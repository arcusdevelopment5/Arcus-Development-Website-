# Project gallery source

Editable source for the V34 React/Three.js gallery, matching the shipped `public/assets/arcus-passage.js` and its three imported chunks. Only these current sources are retained; abandoned carousel variants are excluded. The `.txt` suffix keeps the independent browser island out of the Next.js TypeScript and ESLint compilation.

To rebuild in a separate working directory, restore the source filenames under `carousel/`, install React/React DOM 19, Three.js 0.181 and esbuild 0.25, and run `node carousel/build-journey.mjs`. Copy its entry and reachable chunks from `dist/assets/` to `public/assets/`, replacing the preceding gallery chunks. Preserve the bundled third-party license notices. No additional production packages or build steps are required to serve the committed bundles.
