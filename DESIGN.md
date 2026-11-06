# Arcus Development — design (ARCUSCRM-533, "monograph")

The site reads like an architect's monograph: warm paper, ink, one Arcus green, large real
photographs and a serif display face for the Greek headlines. Nothing moves unless it explains
something (the before/after slider, the CAD plan before/after).

## Files

- `public/styles.css`: the only stylesheet. Tokens at the top (`:root`).
- `public/app.js`: the only script (menu, slider, plan, filters, glossary, lightbox, form).
  The form logic is the previous `site.js` logic, unchanged.
- `public/assets/fonts/`: Noto Serif Display (SIL OFL), self-hosted; no request goes to Google.
- `public/favicon.svg`: the "A" plan mark on Arcus green.
- Legal text that must stay word for word: `site/data/legal/` (privacy notice, warranty terms).

## Tokens

| Token | Value | Use |
|---|---|---|
| `--paper` | `#f5f2eb` | page background |
| `--paper-2` / `--paper-3` | `#ece7dc` / `#e2dbcd` | tinted sections, warranty band |
| `--ink` / `--ink-2` / `--ink-3` | `#1d1c1a` / `#4b4842` / `#77726a` | text, body, labels |
| `--green` | `#2d3e33` | the one accent: emphasis, closing block, footer |

Type: `Noto Serif Display` 300 for h1–h3 (italic `<em>` in green for the second line),
`Manrope` for everything else at 17px body. Labels are sentence case; never `text-transform`
on Greek (capitals would get a τόνος).

## Page rhythm

Home: hero (headline + two real photos) → proof line → two paths (zig-zag) → Παλαμά 7
before/after → four selected projects → four steps → CAD plan (Αθ. Διάκου 16) → 2-year warranty
→ FAQ → One Stop Shop → green closing block that runs into the green footer.

Inner pages share `intro()` (eyebrow, large serif title, lede) and `finalcta()`. Project pages:
full-bleed cover, sticky chapter bar, story + facts, one section per stage, lightbox.

## Rules kept from before

Facts only from `site/data/*.json`; real photos only; every image has alt/width/height;
`prefers-reduced-motion` turns the reveal animation off; no horizontal scroll at 375px.
