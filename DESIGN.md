# Arcus Development — design (ARCUSCRM-533, "monograph")

The site reads like an architect's monograph: warm paper, ink, one Arcus green and large real
photographs. Headlines use Manrope light (350, tight tracking), as on the v37 site. Nothing moves unless it explains
something (the before/after slider, the CAD plan before/after).

## Files

- `public/styles.css`: the only stylesheet. Tokens at the top (`:root`).
- `public/app.js`: the only script (menu, slider, plan, filters, glossary, lightbox, form).
  The form logic is the previous `site.js` logic, unchanged.
- `public/favicon.svg`: the "A" plan mark on Arcus green.
- Legal text that must stay word for word: `site/data/legal/` (privacy notice, warranty terms).

## Tokens

| Token | Value | Use |
|---|---|---|
| `--paper` | `#f5f2eb` | page background |
| `--paper-2` / `--paper-3` | `#ece7dc` / `#e2dbcd` | tinted sections, warranty band |
| `--ink` / `--ink-2` / `--ink-3` | `#1d1c1a` / `#4b4842` / `#77726a` | text, body, labels |
| `--green` | `#2d3e33` | the one accent: closing block, buttons on hover |
| `--footer` | `#1a1c1b` | footer (near-black, so the ISO and Great Place to Work badges sit cleanly) |
| `--sage` | `#557259` | emphasis text (`<em>`), a lighter tint of the same green |

Type: `Manrope` only. Headings weight 350, letter-spacing −0.045em, `<em>` upright in sage;
body 17px. Labels are sentence case; never `text-transform`
on Greek (capitals would get a τόνος).

## Page rhythm

Home: hero on a dark green-charcoal gradient (headline + the real CAD plan of Αθ. Διάκου 16, auto-switching Πριν/Μετά until touched) → proof line → two paths (zig-zag) → Παλαμά 7
before/after → four selected projects → four steps → investment block (photo) → 2-year warranty
→ FAQ → One Stop Shop → green closing block, then the near-black footer, built in the structure of the v37 Arcus Group footer (group strip with six logos; brand + ISO/GPTW, links, contact, «Κάθε ιδέα, μια αρχή.», «Imagine. Create. Live.»; floor-plan line drawing in the corner).

Desktop navigation: both dropdowns are full-width mega menus (company: five pages with a
one-line description each plus a photo; services: two photo cards).

Inner pages share `intro()` (eyebrow, large light title, lede) and `finalcta()`. Project pages:
full-bleed cover, sticky chapter bar, story + facts, one section per stage, lightbox.

## Rules kept from before

Facts only from `site/data/*.json`; real photos only; every image has alt/width/height;
`prefers-reduced-motion` turns the reveal animation off; no horizontal scroll at 375px.
