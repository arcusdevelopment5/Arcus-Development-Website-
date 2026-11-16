"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
  type ReactNode,
} from "react";
import * as THREE from "three";
import { cn } from "@/lib/utils";

export interface PassageGalleryItem {
  src: string;
  alt: string;
  title?: string;
}

export interface PassageGalleryProps {
  items?: PassageGalleryItem[];
  colors?: [string, string];
  backgroundColor?: string;
  lanes?: number;
  gap?: number;
  radius?: number;
  photoFill?: number;
  accentFill?: number;
  lineOpacity?: number;
  fog?: number;
  speed?: number;
  boost?: number;
  blur?: number;
  look?: number;
  fov?: number;
  hover?: number;
  focusOnClick?: boolean;
  captions?: boolean;
  wheel?: boolean;
  interactive?: boolean;
  seed?: number;
  paused?: boolean;
  dpr?: number;
  ariaLabel?: string;
  onFocusChange?: (item: PassageGalleryItem | null, index: number) => void;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export interface PassageGalleryHandle {
  close: () => void;
  travel: (cells: number) => void;
}

type Settings = Required<
  Omit<
    PassageGalleryProps,
    "className" | "style" | "children" | "onFocusChange" | "ariaLabel"
  >
> & {
  onFocusChange?: (item: PassageGalleryItem | null, index: number) => void;
  reduced: boolean;
};

interface Controller {
  sync: () => void;
  close: () => void;
  travel: (cells: number) => void;
  destroy: () => void;
}

interface Spring {
  value: number;
  velocity: number;
}

const MAX_ITEMS = 48;
const MAX_LANES = 16;
const PERIOD = 2048;
const CELL_WIDTH = 512;
const EMPTY = 0;
const PHOTO = 1;
const ACCENT = 2;

const defaultItems: PassageGalleryItem[] = [
  {
    src: "https://pro.reactbits.dev/demo-media/abstract-fuchsia-wave.webp",
    alt: "Broad fuchsia S-shaped band with a coral gradient across deep plum",
    title: "Fuchsia wave",
  },
  {
    src: "https://pro.reactbits.dev/demo-media/abstract-coral-fold.webp",
    alt: "Broad vermilion and orange folded plane over deep plum with fine grain",
    title: "Coral fold",
  },
  {
    src: "https://pro.reactbits.dev/demo-media/abstract-rose-balance.webp",
    alt: "Tilted raspberry rounded rectangle and tangerine disc on a rose-pink field",
    title: "Rose balance",
  },
  {
    src: "https://pro.reactbits.dev/demo-media/abstract-violet-steps.webp",
    alt: "Three interlocking violet and pink stepped planes with an amber edge",
    title: "Violet steps",
  },
  {
    src: "https://pro.reactbits.dev/demo-media/abstract-plum-ribbon.webp",
    alt: "Intersecting pink and plum diagonal ribbons on a coral-magenta field",
    title: "Plum ribbon",
  },
  {
    src: "https://pro.reactbits.dev/demo-media/abstract-orchid-orbit.webp",
    alt: "Fuchsia ring and peach crescent on a grainy orchid-purple field",
    title: "Orchid orbit",
  },
  {
    src: "https://pro.reactbits.dev/demo-media/abstract-amber-loop.webp",
    alt: "Tilted golden-amber loop on a grainy raspberry-purple field",
    title: "Amber loop",
  },
  {
    src: "https://pro.reactbits.dev/demo-media/abstract-pink-eclipse.webp",
    alt: "Coral-pink disc crossing a violet diagonal plane on a grainy purple field",
    title: "Pink eclipse",
  },
];

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const subscribeToMotion = (notify: () => void) => {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", notify);
  return () => media.removeEventListener("change", notify);
};

const readMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const isLight = (value: string) => {
  const hex = value.replace("#", "");
  if (!/^[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(hex)) return false;
  const full = hex.length === 3 ? hex.replace(/./g, (c) => c + c) : hex;
  const r = Number.parseInt(full.slice(0, 2), 16);
  const g = Number.parseInt(full.slice(2, 4), 16);
  const b = Number.parseInt(full.slice(4, 6), 16);
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 > 0.6;
};

const hiddenStyle: CSSProperties = {
  position: "absolute",
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: 0,
};

const stageStyle: CSSProperties = {
  position: "absolute",
  inset: 0,
  touchAction: "pan-y",
  userSelect: "none",
  WebkitUserSelect: "none",
  WebkitTouchCallout: "none",
  outline: "none",
};

const overlayStyle: CSSProperties = {
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "none",
};

const quadVertexShader = `
void main() {
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const tunnelFragmentShader = `
precision highp float;

uniform vec2 uResolution;
uniform mat4 uCameraMatrix;
uniform mat4 uProjectionInverse;
uniform vec2 uHalf;
uniform float uTravel;
uniform float uShutter;
uniform float uSamples;
uniform float uGap;
uniform float uRadius;
uniform float uLineOpacity;
uniform vec3 uLineColor;
uniform float uFogLength;
uniform vec4 uBackground;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform sampler2D uAtlas;
uniform sampler2D uCells;
uniform vec2 uGrid;
uniform float uInset;
uniform float uLoaded[${MAX_ITEMS}];
uniform vec4 uHover;
uniform vec4 uHoverOut;
uniform vec4 uFocus;
uniform float uDim;
uniform float uDpr;

const float PERIOD = ${PERIOD}.0;

vec3 toOklab(vec3 c) {
  float l = 0.4122214708 * c.r + 0.5363325363 * c.g + 0.0514459929 * c.b;
  float m = 0.2119034982 * c.r + 0.6806995451 * c.g + 0.1073969566 * c.b;
  float s = 0.0883024619 * c.r + 0.2817188376 * c.g + 0.6299787005 * c.b;
  l = pow(max(l, 0.0), 1.0 / 3.0);
  m = pow(max(m, 0.0), 1.0 / 3.0);
  s = pow(max(s, 0.0), 1.0 / 3.0);
  return vec3(
    0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s
  );
}

vec3 fromOklab(vec3 c) {
  float l = c.x + 0.3963377774 * c.y + 0.2158037573 * c.z;
  float m = c.x - 0.1055613458 * c.y - 0.0638541728 * c.z;
  float s = c.x - 0.0894841775 * c.y - 1.2914855480 * c.z;
  l = l * l * l;
  m = m * m * m;
  s = s * s * s;
  return vec3(
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
  );
}

vec3 toSrgb(vec3 c) {
  c = clamp(c, 0.0, 1.0);
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
}

float roundBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

bool sameCell(vec4 slot, float wall, float lane, float row) {
  return abs(slot.x - wall) < 0.5 && abs(slot.y - lane) < 0.5 && abs(slot.z - row) < 0.5;
}

vec4 surface(float wall, vec2 cont, vec2 fw, vec2 gx, vec2 gy) {
  float lane = floor(cont.x);
  float row = mod(floor(cont.y), PERIOD);
  vec2 cell = fract(cont);
  vec2 edge = min(cell, 1.0 - cell) / max(fw, vec2(1e-5));
  float cellPx = 1.0 / max(max(fw.x, fw.y), 1e-5);
  float width = 0.5 * uDpr;
  float line = 1.0 - smoothstep(width - 0.5, width + 0.5, min(edge.x, edge.y));
  line *= smoothstep(4.0, 16.0, cellPx / uDpr) * uLineOpacity;
  vec4 result = vec4(uLineColor * line, line);
  int index = (int(row) * 4 + int(wall)) * ${MAX_LANES} + int(clamp(lane, 0.0, ${MAX_LANES - 1}.0));
  vec4 info = texelFetch(uCells, ivec2(index % ${CELL_WIDTH}, index / ${CELL_WIDTH}), 0);
  float kind = floor(info.r * 255.0 + 0.5);
  if (kind < 0.5) return result;
  float hover = 0.0;
  if (sameCell(uHover, wall, lane, row)) hover = uHover.w;
  if (sameCell(uHoverOut, wall, lane, row)) hover = max(hover, uHoverOut.w);
  float vacant = sameCell(uFocus, wall, lane, row) ? uFocus.w : 0.0;
  float halfSize = 0.5 - uGap * 0.5;
  float grow = hover * min(uGap * 0.35, 0.03);
  vec2 local = cell - 0.5;
  float d = roundBox(local, vec2(halfSize + grow), min(uRadius * 0.5, halfSize));
  float aa = max(fw.x, fw.y) * 0.75;
  float cover = (1.0 - smoothstep(-aa, aa, d)) * (1.0 - vacant);
  vec3 color;
  if (kind < 1.5) {
    float which = floor(info.g * 255.0 + 0.5);
    float span = 2.0 * (halfSize + grow);
    vec2 uv = local / span + 0.5;
    vec2 dx = gx / span;
    vec2 dy = gy / span;
    if (wall > 0.5 && wall < 1.5) {
      uv.y = 1.0 - uv.y;
    } else if (wall > 1.5 && wall < 2.5) {
      uv = uv.yx;
      dx = dx.yx;
      dy = dy.yx;
    } else if (wall > 2.5) {
      uv = vec2(1.0 - uv.y, uv.x);
      dx = dx.yx;
      dy = dy.yx;
    }
    uv = clamp(uv, 0.0, 1.0);
    vec2 slot = vec2(mod(which, uGrid.x), floor(which / uGrid.x));
    float inner = 1.0 - 2.0 * uInset;
    vec2 atlasUv = vec2(
      (slot.x + uInset + uv.x * inner) / uGrid.x,
      1.0 - (slot.y + uInset + (1.0 - uv.y) * inner) / uGrid.y
    );
    vec2 scale = vec2(inner) / uGrid;
    vec3 image = textureGrad(uAtlas, atlasUv, dx * scale, dy * scale).rgb;
    float loaded = uLoaded[int(which)];
    vec3 placeholder = mix(uBackground.rgb, uLineColor, 0.06);
    color = mix(placeholder, image, loaded) * (0.88 + 0.22 * hover);
  } else {
    vec2 uv = local / (2.0 * halfSize) + 0.5;
    float t = clamp(info.b * 0.55 + (uv.x * 0.6 + uv.y * 0.4) * 0.45, 0.0, 1.0);
    color = toSrgb(max(fromOklab(mix(toOklab(uColorA), toOklab(uColorB), t)), 0.0));
    color *= 0.86 + 0.18 * hover;
  }
  return vec4(color * cover, cover) + result * (1.0 - cover);
}

void main() {
  vec2 ndc = gl_FragCoord.xy / uResolution * 2.0 - 1.0;
  vec4 view = uProjectionInverse * vec4(ndc, 1.0, 1.0);
  vec3 dir = normalize((uCameraMatrix * vec4(view.xyz / view.w, 0.0)).xyz);
  vec3 origin = uCameraMatrix[3].xyz;
  vec2 reach = max(abs(dir.xy), vec2(1e-6));
  float tx = (uHalf.x - sign(dir.x) * origin.x) / reach.x;
  float ty = (uHalf.y - sign(dir.y) * origin.y) / reach.y;
  float t = min(tx, ty);
  vec3 hit = origin + dir * t;
  float wall;
  vec2 cont;
  if (tx < ty) {
    wall = dir.x > 0.0 ? 3.0 : 2.0;
    cont = vec2(hit.y + uHalf.y, uTravel - hit.z);
  } else {
    wall = dir.y > 0.0 ? 1.0 : 0.0;
    cont = vec2(hit.x + uHalf.x, uTravel - hit.z);
  }
  vec2 gx = dFdx(cont);
  vec2 gy = dFdy(cont);
  vec2 fw = sqrt(gx * gx + gy * gy);
  float count = max(uSamples, 1.0);
  float jitter = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
  vec4 content = vec4(0.0);
  for (int i = 0; i < 12; i++) {
    if (float(i) >= count) break;
    float offset = count > 1.0 ? ((float(i) + jitter) / count - 0.5) * uShutter : 0.0;
    content += surface(wall, cont + vec2(0.0, offset), fw, gx, gy);
  }
  content /= count;
  float haze = 1.0 - exp(-pow(t / uFogLength, 1.5));
  content *= (1.0 - haze) * (1.0 - uDim);
  float alpha = content.a + uBackground.a * (1.0 - content.a);
  vec3 color = content.rgb + uBackground.rgb * uBackground.a * (1.0 - content.a);
  gl_FragColor = vec4(color, alpha);
}
`;

const photoVertexShader = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const photoFragmentShader = `
precision highp float;

uniform sampler2D uImage;
uniform float uImageAspect;
uniform float uPlaneAspect;
uniform float uRadius;
uniform float uOpacity;
uniform float uShade;
varying vec2 vUv;

float roundBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

void main() {
  vec2 p = (vUv - 0.5) * vec2(uPlaneAspect, 1.0);
  float d = roundBox(p, vec2(uPlaneAspect, 1.0) * 0.5, uRadius);
  float aa = fwidth(d);
  float cover = 1.0 - smoothstep(-aa, aa, d);
  vec2 uv = vUv - 0.5;
  if (uPlaneAspect < uImageAspect) {
    uv.x *= uPlaneAspect / uImageAspect;
  } else {
    uv.y *= uImageAspect / uPlaneAspect;
  }
  vec3 color = texture2D(uImage, uv + 0.5).rgb * uShade;
  float alpha = cover * uOpacity;
  gl_FragColor = vec4(color * alpha, alpha);
}
`;

const seeded = (seed: number) => {
  let state = Math.imul(Math.floor(seed) + 7, 2654435761) >>> 0 || 1;
  return () => {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    state >>>= 0;
    return state / 4294967296;
  };
};

const step = (spring: Spring, target: number, dt: number, response: number) => {
  const omega = (2 * Math.PI) / Math.max(response, 0.02);
  const substeps = Math.max(1, Math.ceil(dt / (1 / 120)));
  const h = dt / substeps;
  for (let i = 0; i < substeps; i++) {
    const accel = omega * omega * (target - spring.value) - 2 * omega * spring.velocity;
    spring.velocity += accel * h;
    spring.value += spring.velocity * h;
  }
  return Math.abs(target - spring.value) > 1e-4 || Math.abs(spring.velocity) > 1e-4;
};

const createPassage = (
  root: HTMLElement,
  stage: HTMLElement,
  settingsRef: { current: Settings },
  itemsRef: { current: PassageGalleryItem[] },
  onFocus: (index: number) => void,
): Controller | null => {
  const doc = root.ownerDocument;
  const canvas = doc.createElement("canvas");
  canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block";
  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
      premultipliedAlpha: true,
      powerPreference: "high-performance",
    });
  } catch {
    return null;
  }
  stage.appendChild(canvas);
  renderer.setClearColor(0x000000, 0);

  const loaded = new Array<number>(MAX_ITEMS).fill(0);
  const tunnelUniforms = {
    uResolution: { value: new THREE.Vector2(1, 1) },
    uCameraMatrix: { value: new THREE.Matrix4() },
    uProjectionInverse: { value: new THREE.Matrix4() },
    uHalf: { value: new THREE.Vector2(2.5, 1.5) },
    uTravel: { value: 0 },
    uShutter: { value: 0 },
    uSamples: { value: 1 },
    uGap: { value: 0.1 },
    uRadius: { value: 0.06 },
    uLineOpacity: { value: 0.12 },
    uLineColor: { value: new THREE.Color(1, 1, 1) },
    uFogLength: { value: 12 },
    uBackground: { value: new THREE.Vector4(0, 0, 0, 1) },
    uColorA: { value: new THREE.Color() },
    uColorB: { value: new THREE.Color() },
    uAtlas: { value: null as THREE.Texture | null },
    uCells: { value: null as THREE.Texture | null },
    uGrid: { value: new THREE.Vector2(1, 1) },
    uInset: { value: 0.004 },
    uLoaded: { value: loaded },
    uHover: { value: new THREE.Vector4(-9, -9, -9, 0) },
    uHoverOut: { value: new THREE.Vector4(-9, -9, -9, 0) },
    uFocus: { value: new THREE.Vector4(-9, -9, -9, 0) },
    uDim: { value: 0 },
    uDpr: { value: 1 },
  };
  const tunnelMaterial = new THREE.ShaderMaterial({
    uniforms: tunnelUniforms,
    vertexShader: quadVertexShader,
    fragmentShader: tunnelFragmentShader,
    depthTest: false,
    depthWrite: false,
    blending: THREE.NoBlending,
  });
  const photoUniforms = {
    uImage: { value: null as THREE.Texture | null },
    uImageAspect: { value: 1 },
    uPlaneAspect: { value: 1 },
    uRadius: { value: 0.05 },
    uOpacity: { value: 1 },
    uShade: { value: 1 },
  };
  const photoMaterial = new THREE.ShaderMaterial({
    uniforms: photoUniforms,
    vertexShader: photoVertexShader,
    fragmentShader: photoFragmentShader,
    transparent: true,
    premultipliedAlpha: true,
    depthTest: false,
    depthWrite: false,
  });

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(72, 1, 0.05, 400);
  camera.rotation.order = "YXZ";
  const quadGeometry = new THREE.PlaneGeometry(2, 2);
  const quad = new THREE.Mesh(quadGeometry, tunnelMaterial);
  quad.frustumCulled = false;
  quad.renderOrder = 0;
  const photoGeometry = new THREE.PlaneGeometry(1, 1);
  const photo = new THREE.Mesh(photoGeometry, photoMaterial);
  photo.frustumCulled = false;
  photo.renderOrder = 1;
  photo.visible = false;
  scene.add(quad, photo);

  const cellData = new Uint8Array(CELL_WIDTH * ((PERIOD * 4 * MAX_LANES) / CELL_WIDTH) * 4);
  const cellTexture = new THREE.DataTexture(
    cellData,
    CELL_WIDTH,
    (PERIOD * 4 * MAX_LANES) / CELL_WIDTH,
    THREE.RGBAFormat,
    THREE.UnsignedByteType,
  );
  cellTexture.minFilter = THREE.NearestFilter;
  cellTexture.magFilter = THREE.NearestFilter;
  cellTexture.generateMipmaps = false;
  tunnelUniforms.uCells.value = cellTexture;

  let atlasCanvas: HTMLCanvasElement | null = null;
  let atlasTexture: THREE.CanvasTexture | null = null;
  let images: (HTMLImageElement | null)[] = [];
  const imageTextures = new Map<number, THREE.Texture>();
  let itemsKey = "";
  let cellsKey = "";
  let slotSize = 512;
  let width = 1;
  let height = 1;
  let dpr = 1;
  let halfX = 2.5;
  let halfY = 1.5;
  let lanesX = 5;
  let lanesY = 3;
  let travel = 0;
  let velocity = 0;
  let visible = false;
  let destroyed = false;
  let lost = false;
  let raf = 0;
  let last = 0;
  let colorKey = "";
  const yaw: Spring = { value: 0, velocity: 0 };
  const pitch: Spring = { value: 0, velocity: 0 };
  const shiftX: Spring = { value: 0, velocity: 0 };
  const shiftY: Spring = { value: 0, velocity: 0 };
  const boostSpring: Spring = { value: 0, velocity: 0 };
  const hoverIn: Spring = { value: 0, velocity: 0 };
  const hoverOut: Spring = { value: 0, velocity: 0 };
  const flight: Spring = { value: 0, velocity: 0 };
  const dim: Spring = { value: 0, velocity: 0 };
  const pointer = { x: 0, y: 0, inside: false };
  let press: {
    id: number;
    x: number;
    y: number;
    lastY: number;
    lastX: number;
    at: number;
    moved: boolean;
    touch: boolean;
    samples: { t: number; v: number }[];
  } | null = null;
  let boosting = false;
  let pressTimer = 0;
  let pendingTravel = 0;
  let wheelAt = -1e9;
  let focus: {
    wall: number;
    lane: number;
    row: number;
    which: number;
    target: number;
    aspect: Spring;
  } | null = null;
  let hovered: { wall: number; lane: number; row: number } | null = null;
  const fading = new Array<number>(MAX_ITEMS).fill(0);

  const linearColor = (value: string, fallback: string, target: THREE.Color) => {
    try {
      target.set(value);
    } catch {
      target.set(fallback);
    }
    return target;
  };

  const refreshColors = () => {
    const settings = settingsRef.current;
    const key = `${settings.colors[0]}|${settings.colors[1]}|${settings.backgroundColor}`;
    if (key === colorKey) return false;
    colorKey = key;
    linearColor(settings.colors[0], "#5227FF", tunnelUniforms.uColorA.value);
    linearColor(settings.colors[1], "#FF9FFC", tunnelUniforms.uColorB.value);
    const background = settings.backgroundColor.trim().toLowerCase();
    const transparent = background === "transparent" || background === "";
    const base = new THREE.Color(0x0a0a0a);
    if (!transparent) linearColor(settings.backgroundColor, "#0a0a0a", base);
    const encoded = { r: 0, g: 0, b: 0 };
    base.getRGB(encoded, THREE.SRGBColorSpace);
    tunnelUniforms.uBackground.value.set(encoded.r, encoded.g, encoded.b, transparent ? 0 : 1);
    const luminance = 0.2126 * base.r + 0.7152 * base.g + 0.0722 * base.b;
    const light = !transparent && luminance > 0.35;
    tunnelUniforms.uLineColor.value.setRGB(light ? 0 : 1, light ? 0 : 1, light ? 0 : 1);
    return true;
  };

  const buildCells = () => {
    const settings = settingsRef.current;
    const count = Math.min(itemsRef.current.length, MAX_ITEMS);
    const key = [
      settings.photoFill,
      settings.accentFill,
      settings.seed,
      count,
    ].join("|");
    if (key === cellsKey) return false;
    cellsKey = key;
    const random = seeded(settings.seed * 131 + 17);
    const photoFill = clamp(settings.photoFill, 0, 1);
    const accentFill = clamp(settings.accentFill, 0, 1 - photoFill);
    let bag: number[] = [];
    const draw = (avoid: Set<number>) => {
      if (!bag.length) {
        bag = Array.from({ length: count }, (_, i) => i);
        for (let i = bag.length - 1; i > 0; i--) {
          const j = Math.floor(random() * (i + 1));
          [bag[i], bag[j]] = [bag[j], bag[i]];
        }
      }
      for (let i = bag.length - 1; i >= 0; i--) {
        if (!avoid.has(bag[i]) || count <= avoid.size) {
          return bag.splice(i, 1)[0];
        }
      }
      return bag.pop() ?? 0;
    };
    const recent: number[] = [];
    for (let row = 0; row < PERIOD; row++) {
      for (let wall = 0; wall < 4; wall++) {
        for (let lane = 0; lane < MAX_LANES; lane++) {
          const offset = (((row * 4 + wall) * MAX_LANES + lane) * 4) | 0;
          const pick = random();
          const shade = random();
          if (count > 0 && pick < photoFill) {
            const which = draw(new Set(recent));
            recent.push(which);
            if (recent.length > Math.min(6, Math.max(0, count - 2))) recent.shift();
            cellData[offset] = PHOTO;
            cellData[offset + 1] = which;
            cellData[offset + 2] = 0;
          } else if (pick < photoFill + accentFill) {
            cellData[offset] = ACCENT;
            cellData[offset + 1] = 0;
            cellData[offset + 2] = Math.round(shade * 255);
          } else {
            cellData[offset] = EMPTY;
            cellData[offset + 1] = 0;
            cellData[offset + 2] = 0;
          }
          cellData[offset + 3] = 255;
        }
      }
    }
    cellTexture.needsUpdate = true;
    return true;
  };

  const cellAt = (wall: number, lane: number, row: number) => {
    const wrapped = ((row % PERIOD) + PERIOD) % PERIOD;
    const offset = ((wrapped * 4 + wall) * MAX_LANES + clamp(lane, 0, MAX_LANES - 1)) * 4;
    return { kind: cellData[offset], which: cellData[offset + 1], row: wrapped };
  };

  const disposeImages = () => {
    imageTextures.forEach((texture) => texture.dispose());
    imageTextures.clear();
    atlasTexture?.dispose();
    atlasTexture = null;
    atlasCanvas = null;
    images = [];
  };

  const buildAtlas = () => {
    const items = itemsRef.current.slice(0, MAX_ITEMS);
    const key = items.map((item) => item.src).join("\u0000");
    if (key === itemsKey) return;
    itemsKey = key;
    disposeImages();
    loaded.fill(0);
    fading.fill(0);
    const count = Math.max(items.length, 1);
    slotSize = count <= 12 ? 640 : count <= 24 ? 512 : 384;
    const cols = Math.ceil(Math.sqrt(count));
    const rows = Math.ceil(count / cols);
    atlasCanvas = doc.createElement("canvas");
    atlasCanvas.width = cols * slotSize;
    atlasCanvas.height = rows * slotSize;
    const context = atlasCanvas.getContext("2d");
    if (context) {
      context.fillStyle = "#000";
      context.fillRect(0, 0, atlasCanvas.width, atlasCanvas.height);
    }
    atlasTexture = new THREE.CanvasTexture(atlasCanvas);
    atlasTexture.colorSpace = THREE.NoColorSpace;
    atlasTexture.minFilter = THREE.LinearMipmapLinearFilter;
    atlasTexture.magFilter = THREE.LinearFilter;
    atlasTexture.generateMipmaps = true;
    atlasTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    tunnelUniforms.uAtlas.value = atlasTexture;
    tunnelUniforms.uGrid.value.set(cols, rows);
    tunnelUniforms.uInset.value = 1.5 / slotSize;
    const owner = atlasCanvas;
    images = items.map((item, index) => {
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.decoding = "async";
      image.onload = () => {
        if (destroyed || atlasCanvas !== owner || !context) return;
        const side = Math.min(image.naturalWidth, image.naturalHeight);
        const sx = (image.naturalWidth - side) / 2;
        const sy = (image.naturalHeight - side) / 2;
        const col = index % cols;
        const row = Math.floor(index / cols);
        context.drawImage(image, sx, sy, side, side, col * slotSize, row * slotSize, slotSize, slotSize);
        if (atlasTexture) atlasTexture.needsUpdate = true;
        fading[index] = 1;
        schedule();
      };
      image.src = item.src;
      return image;
    });
  };

  const resize = () => {
    const settings = settingsRef.current;
    const rect = root.getBoundingClientRect();
    const nextDpr = Math.min(window.devicePixelRatio || 1, Math.max(settings.dpr, 0.5));
    const nextWidth = Math.max(1, Math.round(rect.width));
    const nextHeight = Math.max(1, Math.round(rect.height));
    if (nextWidth === width && nextHeight === height && nextDpr === dpr) return false;
    width = nextWidth;
    height = nextHeight;
    dpr = nextDpr;
    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height, false);
    tunnelUniforms.uResolution.value.set(width * dpr, height * dpr);
    tunnelUniforms.uDpr.value = dpr;
    return true;
  };

  const fogLength = () =>
    (12 / clamp(settingsRef.current.fog, 0.05, 4)) * Math.max(1, Math.hypot(halfX, halfY) / 2.9);

  const shape = () => {
    const settings = settingsRef.current;
    lanesX = clamp(Math.round(settings.lanes), 2, MAX_LANES);
    lanesY = clamp(Math.round(lanesX / Math.max(width / height, 0.2)), 2, MAX_LANES);
    halfX = lanesX / 2;
    halfY = lanesY / 2;
    tunnelUniforms.uHalf.value.set(halfX, halfY);
  };

  const cellPose = (wall: number, lane: number, row: number) => {
    const along = row + 0.5;
    const z = travel - along;
    const position = new THREE.Vector3();
    const right = new THREE.Vector3();
    const up = new THREE.Vector3();
    const normal = new THREE.Vector3();
    const lift = 0.002;
    if (wall === 0) {
      position.set(lane + 0.5 - halfX, -halfY + lift, z);
      right.set(1, 0, 0);
      up.set(0, 0, -1);
      normal.set(0, 1, 0);
    } else if (wall === 1) {
      position.set(lane + 0.5 - halfX, halfY - lift, z);
      right.set(1, 0, 0);
      up.set(0, 0, 1);
      normal.set(0, -1, 0);
    } else if (wall === 2) {
      position.set(-halfX + lift, lane + 0.5 - halfY, z);
      right.set(0, 0, -1);
      up.set(0, 1, 0);
      normal.set(1, 0, 0);
    } else {
      position.set(halfX - lift, lane + 0.5 - halfY, z);
      right.set(0, 0, 1);
      up.set(0, 1, 0);
      normal.set(-1, 0, 0);
    }
    const quaternion = new THREE.Quaternion().setFromRotationMatrix(
      new THREE.Matrix4().makeBasis(right, up, normal),
    );
    return { position, quaternion };
  };

  const castRay = (clientX: number, clientY: number) => {
    const rect = canvas.getBoundingClientRect();
    const ndc = new THREE.Vector3(
      ((clientX - rect.left) / rect.width) * 2 - 1,
      -(((clientY - rect.top) / rect.height) * 2 - 1),
      0.5,
    );
    ndc.unproject(camera);
    const origin = camera.position;
    const dir = ndc.sub(origin).normalize();
    const reachX = Math.max(Math.abs(dir.x), 1e-6);
    const reachY = Math.max(Math.abs(dir.y), 1e-6);
    const tx = (halfX - Math.sign(dir.x) * origin.x) / reachX;
    const ty = (halfY - Math.sign(dir.y) * origin.y) / reachY;
    const t = Math.min(tx, ty);
    const hit = origin.clone().addScaledVector(dir, t);
    let wall: number;
    let across: number;
    if (tx < ty) {
      wall = dir.x > 0 ? 3 : 2;
      across = hit.y + halfY;
    } else {
      wall = dir.y > 0 ? 1 : 0;
      across = hit.x + halfX;
    }
    const along = travel - hit.z;
    const lane = Math.floor(across);
    const row = Math.floor(along);
    const settings = settingsRef.current;
    const localX = across - lane - 0.5;
    const localY = along - row - 0.5;
    const halfSize = 0.5 - clamp(settings.gap, 0, 0.6) * 0.5;
    const inside = Math.abs(localX) <= halfSize && Math.abs(localY) <= halfSize;
    const cell = cellAt(wall, lane, row);
    const clear = Math.exp(-Math.pow(t / fogLength(), 1.5));
    return { wall, lane, row, wrapped: cell.row, kind: inside ? cell.kind : EMPTY, which: cell.which, clear, t };
  };

  const prewarm = (which: number) => {
    const image = images[which];
    if (!image || !image.complete || !image.naturalWidth || imageTextures.has(which)) return;
    const texture = new THREE.Texture(image);
    texture.colorSpace = THREE.NoColorSpace;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.generateMipmaps = true;
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    texture.needsUpdate = true;
    imageTextures.set(which, texture);
    renderer.initTexture(texture);
  };

  const openFocus = (hit: ReturnType<typeof castRay>) => {
    const image = images[hit.which];
    if (!image || !image.complete || !image.naturalWidth) return;
    prewarm(hit.which);
    const texture = imageTextures.get(hit.which);
    if (!texture) return;
    photoUniforms.uImage.value = texture;
    photoUniforms.uImageAspect.value = image.naturalWidth / image.naturalHeight;
    focus = {
      wall: hit.wall,
      lane: hit.lane,
      row: hit.row,
      which: hit.which,
      target: 1,
      aspect: { value: 1, velocity: 0 },
    };
    tunnelUniforms.uFocus.value.set(hit.wall, hit.lane, hit.wrapped, 0);
    onFocus(hit.which);
    schedule();
  };

  const closeFocus = () => {
    if (!focus || focus.target === 0) return;
    focus.target = 0;
    onFocus(-1);
    schedule();
  };

  const clearHover = () => {
    if (hovered) {
      tunnelUniforms.uHoverOut.value.copy(tunnelUniforms.uHover.value);
      hoverOut.value = hoverIn.value;
      hoverOut.velocity = 0;
      hovered = null;
      hoverIn.value = 0;
      hoverIn.velocity = 0;
      tunnelUniforms.uHover.value.set(-9, -9, -9, 0);
    }
    root.style.cursor = "";
  };

  const updateHover = (clientX: number, clientY: number) => {
    const settings = settingsRef.current;
    if (!settings.interactive || focus || press) {
      clearHover();
      return;
    }
    const hit = castRay(clientX, clientY);
    const target = hit.kind === PHOTO || (hit.kind === ACCENT && settings.hover > 0) ? hit : null;
    const same =
      target && hovered && hovered.wall === target.wall && hovered.lane === target.lane && hovered.row === target.wrapped;
    if (!same) {
      if (hovered) {
        tunnelUniforms.uHoverOut.value.copy(tunnelUniforms.uHover.value);
        hoverOut.value = hoverIn.value;
        hoverOut.velocity = 0;
      }
      hovered = target ? { wall: target.wall, lane: target.lane, row: target.wrapped } : null;
      if (target && target.kind === PHOTO) prewarm(target.which);
      hoverIn.value = 0;
      hoverIn.velocity = 0;
      if (target) tunnelUniforms.uHover.value.set(target.wall, target.lane, target.wrapped, 0);
      else tunnelUniforms.uHover.value.set(-9, -9, -9, 0);
    }
    root.style.cursor =
      target && target.kind === PHOTO && settings.focusOnClick && target.clear > 0.25 ? "pointer" : "";
  };

  const schedule = () => {
    if (destroyed || lost || !visible || raf) return;
    raf = requestAnimationFrame(frame);
  };

  function frame(now: number) {
    raf = 0;
    if (destroyed || lost) return;
    const settings = settingsRef.current;
    const dt = last ? Math.min(Math.max((now - last) / 1000, 0), 0.1) : 1 / 60;
    last = now;
    const reduced = settings.reduced;
    let busy = false;

    if (refreshColors()) busy = true;
    shape();

    const lookAmount = reduced ? 0 : clamp(settings.look, 0, 3) * (focus ? 0.3 : 1);
    const px = pointer.inside ? pointer.x : 0;
    const py = pointer.inside ? pointer.y : 0;
    busy = step(yaw, -px * 0.12 * lookAmount, dt, 1.1) || busy;
    busy = step(pitch, py * 0.08 * lookAmount, dt, 1.1) || busy;
    busy = step(shiftX, px * 0.16 * halfX * Math.min(lookAmount, 1), dt, 1.3) || busy;
    busy = step(shiftY, py * 0.16 * halfY * Math.min(lookAmount, 1), dt, 1.3) || busy;

    busy = step(boostSpring, boosting && !reduced ? 1 : 0, dt, boosting ? 0.9 : 0.7) || busy;
    const scrolling = now - wheelAt < 1200;
    const base = reduced || focus ? 0 : settings.speed;
    const cruise = settings.paused || scrolling ? 0 : base;
    const rush = Math.max(settings.boost, 1) * Math.max(Math.abs(base), 0.3) * Math.sign(base || 1);
    const target = cruise + (rush - cruise) * boostSpring.value * (reduced || focus ? 0 : 1);
    if (!press || !press.moved) {
      const response = focus ? 0.12 : 0.45;
      velocity += (target - velocity) * (1 - Math.exp(-dt / response));
    }
    if (!press || !press.moved) {
      const glide = pendingTravel * (1 - Math.exp(-dt / (reduced ? 0.02 : 0.16)));
      pendingTravel -= glide;
      if (Math.abs(pendingTravel) < 1e-4) pendingTravel = 0;
      travel += velocity * dt + glide;
    }
    if (Math.abs(velocity) > 1e-4 || Math.abs(target) > 1e-4) busy = true;
    if (pendingTravel !== 0 || scrolling) busy = true;
    travel = ((travel % PERIOD) + PERIOD) % PERIOD;

    camera.fov = clamp(settings.fov, 30, 110);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    camera.position.set(shiftX.value, shiftY.value, 0);
    camera.rotation.set(pitch.value, yaw.value, 0, "YXZ");
    camera.updateMatrixWorld();
    tunnelUniforms.uCameraMatrix.value.copy(camera.matrixWorld);
    tunnelUniforms.uProjectionInverse.value.copy(camera.projectionMatrixInverse);
    tunnelUniforms.uTravel.value = travel;

    const blur = reduced ? 0 : clamp(settings.blur, 0, 3);
    const shutter = Math.min(Math.abs(velocity) * 0.03 * blur, 0.9);
    tunnelUniforms.uShutter.value = shutter * Math.sign(velocity || 1);
    tunnelUniforms.uSamples.value = shutter > 0.03 ? Math.min(12, Math.ceil(shutter / 0.05) + 2) : 1;
    tunnelUniforms.uGap.value = clamp(settings.gap, 0, 0.6);
    tunnelUniforms.uRadius.value = clamp(settings.radius, 0, 1);
    tunnelUniforms.uLineOpacity.value = clamp(settings.lineOpacity, 0, 1);
    tunnelUniforms.uFogLength.value = fogLength();

    for (let i = 0; i < MAX_ITEMS; i++) {
      if (fading[i] && loaded[i] < 1) {
        loaded[i] = reduced ? 1 : Math.min(1, loaded[i] + dt / 0.6);
        busy = true;
      }
    }

    busy = step(hoverIn, hovered ? clamp(settings.hover, 0, 2) : 0, dt, 0.35) || busy;
    busy = step(hoverOut, 0, dt, 0.35) || busy;
    tunnelUniforms.uHover.value.w = Math.max(hoverIn.value, 0);
    tunnelUniforms.uHoverOut.value.w = Math.max(hoverOut.value, 0);

    if (focus) {
      const flightTarget = focus.target;
      busy = step(flight, flightTarget, dt, reduced ? 0.12 : 0.7) || busy;
      busy = step(dim, flightTarget * 0.72, dt, 0.7) || busy;
      const p = clamp(flight.value, 0, 1.05);
      const eased = clamp(p, 0, 1);
      const start = cellPose(focus.wall, focus.lane, focus.row);
      const distance = 2.2;
      const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
      const end = camera.position.clone().addScaledVector(forward, distance);
      const visibleHeight = 2 * distance * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
      const visibleWidth = visibleHeight * camera.aspect;
      const imageAspect = photoUniforms.uImageAspect.value;
      busy = step(focus.aspect, flightTarget ? imageAspect : 1, dt, 0.9) || busy;
      let endHeight = visibleHeight * 0.66;
      let endWidth = endHeight * imageAspect;
      if (endWidth > visibleWidth * 0.82) {
        endWidth = visibleWidth * 0.82;
        endHeight = endWidth / imageAspect;
      }
      const tile = 1 - clamp(settings.gap, 0, 0.6);
      const aspect = clamp(focus.aspect.value, Math.min(1, imageAspect), Math.max(1, imageAspect));
      const size = tile + (Math.sqrt(endWidth * endHeight) - tile) * eased;
      const planeHeight = size / Math.sqrt(aspect);
      const planeWidth = planeHeight * aspect;
      photo.position.lerpVectors(start.position, end, eased);
      const arc = Math.sin(Math.PI * eased) * 0.35;
      photo.position.addScaledVector(
        new THREE.Vector3(0, 0, 1).applyQuaternion(start.quaternion),
        arc,
      );
      photo.quaternion.slerpQuaternions(start.quaternion, camera.quaternion, eased);
      photo.scale.set(planeWidth, planeHeight, 1);
      photo.visible = p > 0.0005 || flightTarget > 0;
      photoUniforms.uPlaneAspect.value = aspect;
      const tileRadius = Math.min(clamp(settings.radius, 0, 1) * 0.5, tile * 0.5) / tile;
      photoUniforms.uRadius.value = tileRadius + (0.018 - tileRadius) * eased;
      const hit = cellPose(focus.wall, focus.lane, focus.row).position.distanceTo(camera.position);
      const clear = Math.exp(-Math.pow(hit / fogLength(), 1.5));
      photoUniforms.uShade.value = (0.88 + (1 - 0.88) * eased) * (clear + (1 - clear) * eased) * (1 - dim.value * (1 - eased));
      photoUniforms.uOpacity.value = 1;
      tunnelUniforms.uFocus.value.w = flightTarget > 0 || p > 0.002 ? 1 : 0;
      tunnelUniforms.uDim.value = dim.value;
      if (flightTarget === 0 && p <= 0.002 && Math.abs(flight.velocity) < 0.02) {
        focus = null;
        flight.value = 0;
        flight.velocity = 0;
        photo.visible = false;
        tunnelUniforms.uFocus.value.set(-9, -9, -9, 0);
      }
    } else {
      busy = step(dim, 0, dt, 0.7) || busy;
      tunnelUniforms.uDim.value = Math.max(dim.value, 0);
    }

    renderer.render(scene, camera);
    if (busy) schedule();
  }

  const locate = (event: PointerEvent) => {
    const rect = root.getBoundingClientRect();
    pointer.x = clamp(((event.clientX - rect.left) / rect.width) * 2 - 1, -1, 1);
    pointer.y = clamp(-(((event.clientY - rect.top) / rect.height) * 2 - 1), -1, 1);
  };

  const onMove = (event: PointerEvent) => {
    if (!settingsRef.current.interactive) return;
    if (event.pointerType !== "touch") {
      pointer.inside = true;
      locate(event);
    }
    if (press && press.id === event.pointerId) {
      const dx = event.clientX - press.x;
      const dy = event.clientY - press.y;
      if (!press.moved && Math.hypot(dx, dy) > 6) {
        press.moved = true;
        window.clearTimeout(pressTimer);
        boosting = false;
      }
      if (press.moved && !focus) {
        const delta = press.touch ? event.clientX - press.lastX : event.clientY - press.lastY;
        const cells = (delta / Math.max(height, 1)) * 6 * (press.touch ? -1 : 1);
        travel += cells;
        const t = performance.now();
        press.samples.push({ t, v: cells });
        while (press.samples.length && t - press.samples[0].t > 90) press.samples.shift();
      }
      press.lastX = event.clientX;
      press.lastY = event.clientY;
    } else if (event.pointerType !== "touch") {
      updateHover(event.clientX, event.clientY);
    }
    schedule();
  };

  const onDown = (event: PointerEvent) => {
    const settings = settingsRef.current;
    if (!settings.interactive || !event.isPrimary || event.button > 0) return;
    press = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      lastX: event.clientX,
      lastY: event.clientY,
      at: performance.now(),
      moved: false,
      touch: event.pointerType === "touch",
      samples: [],
    };
    if (event.pointerType !== "touch") {
      try {
        stage.setPointerCapture(event.pointerId);
      } catch {}
    }
    window.clearTimeout(pressTimer);
    if (!focus) {
      pressTimer = window.setTimeout(() => {
        if (press && !press.moved && !focus) {
          boosting = true;
          clearHover();
          schedule();
        }
      }, 220);
    }
    schedule();
  };

  const finish = (event: PointerEvent, cancelled: boolean) => {
    if (!press || press.id !== event.pointerId) return;
    const settings = settingsRef.current;
    const ended = press;
    press = null;
    window.clearTimeout(pressTimer);
    const wasBoosting = boosting;
    boosting = false;
    try {
      if (stage.hasPointerCapture(event.pointerId)) stage.releasePointerCapture(event.pointerId);
    } catch {}
    if (ended.moved && !focus) {
      const now = performance.now();
      const recent = ended.samples.filter((sample) => now - sample.t < 90);
      if (recent.length > 1) {
        const span = Math.max((recent[recent.length - 1].t - recent[0].t) / 1000, 1 / 60);
        const sum = recent.reduce((total, sample) => total + sample.v, 0);
        velocity = clamp(sum / span, -40, 40);
      }
    } else if (!cancelled && !ended.moved && !wasBoosting) {
      if (focus) {
        closeFocus();
      } else if (settings.focusOnClick) {
        const hit = castRay(event.clientX, event.clientY);
        if (hit.kind === PHOTO && hit.clear > 0.25) openFocus(hit);
      }
    }
    if (event.pointerType !== "touch") updateHover(event.clientX, event.clientY);
    schedule();
  };

  const onUp = (event: PointerEvent) => finish(event, false);
  const onCancel = (event: PointerEvent) => finish(event, true);
  const onLeave = (event: PointerEvent) => {
    if (press && press.id === event.pointerId) return;
    pointer.inside = false;
    clearHover();
    schedule();
  };

  const onWheel = (event: WheelEvent) => {
    const settings = settingsRef.current;
    if (!settings.wheel || !settings.interactive) return;
    event.preventDefault();
    const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? height : 1;
    const delta = clamp((event.deltaY + event.deltaX) * unit, -240, 240);
    if (focus && focus.target === 1) closeFocus();
    pendingTravel += delta * 0.012;
    wheelAt = performance.now();
    schedule();
  };

  const onKey = (event: KeyboardEvent) => {
    if (!settingsRef.current.interactive) return;
    if (event.key === "Escape") {
      closeFocus();
    } else if (event.key === "ArrowUp" || event.key === "ArrowRight") {
      event.preventDefault();
      velocity += 3;
      schedule();
    } else if (event.key === "ArrowDown" || event.key === "ArrowLeft") {
      event.preventDefault();
      velocity -= 3;
      schedule();
    }
  };

  stage.addEventListener("pointerdown", onDown);
  stage.addEventListener("pointermove", onMove);
  stage.addEventListener("pointerup", onUp);
  stage.addEventListener("pointercancel", onCancel);
  stage.addEventListener("pointerleave", onLeave);
  stage.addEventListener("wheel", onWheel, { passive: false });
  root.addEventListener("keydown", onKey);

  const resizer = new ResizeObserver(() => {
    if (resize()) schedule();
  });
  resizer.observe(root);

  const observer =
    typeof IntersectionObserver === "undefined"
      ? null
      : new IntersectionObserver(
          ([entry]) => {
            visible = entry.isIntersecting;
            if (visible) {
              last = 0;
              schedule();
            } else if (raf) {
              cancelAnimationFrame(raf);
              raf = 0;
            }
          },
          { rootMargin: "80px" },
        );
  if (observer) observer.observe(root);
  else visible = true;

  const onLost = (event: Event) => {
    event.preventDefault();
    lost = true;
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
  };
  const onRestored = () => {
    lost = false;
    colorKey = "";
    cellsKey = "";
    itemsKey = "";
    buildCells();
    buildAtlas();
    schedule();
  };
  canvas.addEventListener("webglcontextlost", onLost);
  canvas.addEventListener("webglcontextrestored", onRestored);

  resize();
  shape();
  refreshColors();
  buildCells();
  buildAtlas();
  photo.visible = true;
  renderer.compile(scene, camera);
  photo.visible = false;
  schedule();

  return {
    sync: () => {
      resize();
      buildCells();
      buildAtlas();
      if (focus && focus.which >= itemsRef.current.length) closeFocus();
      last = 0;
      schedule();
    },
    close: closeFocus,
    travel: (cells: number) => {
      velocity += cells * 2;
      schedule();
    },
    destroy: () => {
      destroyed = true;
      if (raf) cancelAnimationFrame(raf);
      window.clearTimeout(pressTimer);
      observer?.disconnect();
      resizer.disconnect();
      stage.removeEventListener("pointerdown", onDown);
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerup", onUp);
      stage.removeEventListener("pointercancel", onCancel);
      stage.removeEventListener("pointerleave", onLeave);
      stage.removeEventListener("wheel", onWheel);
      root.removeEventListener("keydown", onKey);
      root.style.cursor = "";
      canvas.removeEventListener("webglcontextlost", onLost);
      canvas.removeEventListener("webglcontextrestored", onRestored);
      images.forEach((image) => {
        if (image) image.onload = null;
      });
      disposeImages();
      cellTexture.dispose();
      quadGeometry.dispose();
      photoGeometry.dispose();
      tunnelMaterial.dispose();
      photoMaterial.dispose();
      renderer.dispose();
      if (!renderer.getContext().isContextLost()) renderer.forceContextLoss();
      canvas.remove();
    },
  };
};

export const PassageGallery = forwardRef<PassageGalleryHandle, PassageGalleryProps>(
  function PassageGallery(
    {
      items = defaultItems,
      colors = ["#5227FF", "#FF9FFC"],
      backgroundColor = "#0a0a0a",
      lanes = 5,
      gap = 0.1,
      radius = 0.06,
      photoFill = 0.3,
      accentFill = 0.06,
      lineOpacity = 0.12,
      fog = 1,
      speed = 0.6,
      boost = 10,
      blur = 1,
      look = 1,
      fov = 72,
      hover = 1,
      focusOnClick = true,
      captions = true,
      wheel = true,
      interactive = true,
      seed = 0,
      paused = false,
      dpr = 2,
      ariaLabel = "Photo tunnel. Scroll or drag to travel, hold to speed up, click a photo to view it.",
      onFocusChange,
      className,
      style,
      children,
    },
    ref,
  ) {
    const rootRef = useRef<HTMLDivElement>(null);
    const stageRef = useRef<HTMLDivElement>(null);
    const controllerRef = useRef<Controller | null>(null);
    const reduced = useSyncExternalStore(subscribeToMotion, readMotion, () => false);
    const [focused, setFocused] = useState(-1);
    const [failed, setFailed] = useState(false);
    const list = items.length ? items : defaultItems;
    const itemsRef = useRef(list);

    const settings: Settings = {
      items: list,
      colors,
      backgroundColor,
      lanes,
      gap,
      radius,
      photoFill,
      accentFill,
      lineOpacity,
      fog,
      speed,
      boost,
      blur,
      look,
      fov,
      hover,
      focusOnClick,
      captions,
      wheel,
      interactive,
      seed,
      paused,
      dpr,
      onFocusChange,
      reduced,
    };
    const settingsRef = useRef(settings);

    useEffect(() => {
      settingsRef.current = settings;
      itemsRef.current = list;
      controllerRef.current?.sync();
    });

    useEffect(() => {
      const root = rootRef.current;
      const stage = stageRef.current;
      if (!root || !stage) return;
      const controller = createPassage(root, stage, settingsRef, itemsRef, (index) => {
        setFocused(index);
        const item = index >= 0 ? itemsRef.current[index] ?? null : null;
        settingsRef.current.onFocusChange?.(item, index);
      });
      if (!controller) {
        const frame = requestAnimationFrame(() => setFailed(true));
        return () => cancelAnimationFrame(frame);
      }
      controllerRef.current = controller;
      return () => {
        controller.destroy();
        controllerRef.current = null;
      };
    }, []);

    useImperativeHandle(
      ref,
      () => ({
        close: () => controllerRef.current?.close(),
        travel: (cells: number) => controllerRef.current?.travel(cells),
      }),
      [],
    );

    const background = backgroundColor.trim().toLowerCase();
    const transparent = background === "transparent" || background === "";
    const current = focused >= 0 ? list[focused] : null;
    const light = !transparent && isLight(background);

    return (
      <div
        ref={rootRef}
        className={cn("relative h-full min-h-[420px] w-full overflow-hidden", className)}
        style={{ backgroundColor: transparent ? undefined : backgroundColor, ...style }}
        role="region"
        aria-roledescription="gallery"
        aria-label={ariaLabel}
        tabIndex={0}
      >
        <div ref={stageRef} style={stageStyle} />
        {failed ? (
          <div
            style={{
              ...overlayStyle,
              gap: 12,
              flexWrap: "wrap",
              padding: 24,
              alignContent: "center",
            }}
          >
            {list.slice(0, 6).map((item) => (
              <img
                key={item.src}
                src={item.src}
                alt={item.alt}
                style={{ width: 120, height: 120, objectFit: "cover", borderRadius: 8 }}
              />
            ))}
          </div>
        ) : null}
        <ul style={hiddenStyle}>
          {list.map((item) => (
            <li key={item.src}>{item.alt}</li>
          ))}
        </ul>
        {captions ? (
          <div
            aria-live="polite"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: "5%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              pointerEvents: "none",
              opacity: current ? 1 : 0,
              transform: current ? "translateY(0)" : "translateY(6px)",
              transition: current
                ? "opacity 420ms ease 380ms, transform 520ms cubic-bezier(0.22, 1, 0.36, 1) 380ms"
                : "opacity 160ms ease, transform 160ms ease",
              color: light ? "rgba(10, 10, 10, 0.92)" : "rgba(255, 255, 255, 0.92)",
              fontSize: 14,
              lineHeight: 1.4,
              textAlign: "center",
            }}
          >
            {current ? (
              <>
                <span style={{ fontWeight: 500 }}>{current.title ?? current.alt}</span>
                <span style={{ opacity: 0.55, fontVariantNumeric: "tabular-nums", fontSize: 12 }}>
                  {String(focused + 1).padStart(2, "0")} / {String(list.length).padStart(2, "0")}
                </span>
              </>
            ) : null}
          </div>
        ) : null}
        {children ? (
          <div style={overlayStyle}>
            <div style={{ pointerEvents: "auto" }}>{children}</div>
          </div>
        ) : null}
      </div>
    );
  },
);

PassageGallery.displayName = "PassageGallery";

export default PassageGallery;
