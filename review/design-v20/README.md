# Arcus Development — design review V20

Preview: https://arcus-development-design-review.adreaslougas.chatgpt.site
Source snapshot: Sites commit aaeaf0aa97ef9216f73e07b1e8c2be5f57aa6e5d (16 November 2026).

This is the complete approved-for-review static design, not an integration into the production authoring pipeline. Existing Next.js pages, APIs, dependencies, legal content and deployment configuration are unchanged.

Run locally from this directory:

```sh
python3 -m http.server 8080 --directory site
```

Open http://localhost:8080/el/. Serve this directory at the origin root because links and assets use absolute paths. The snapshot retains noindex and the preview-only contact form. Do not use that form or the snapshot footer/privacy copy as production replacements.

## Review scope

- Light/dark styling, navigation, translucent project captions without street numbers.
- Project galleries, horizontal Athanasiou Diakou carousel, filters and original photo brightness.
- Before/after comparison with gentle automatic motion and manual controls.
- Updated Kolokotroni studio photographs and Soulioti kitchen image.
- Removed selected redundant floorplans; renovation guides and contact styling.
- Homepage architectural grid and cursor illumination, stopping exactly above the Arcus Group proof row.

## Integration into the live application

Use scripts/author-site.py and related generators for page changes, then regenerate content. Keep production Resend/Blob form handling and validation, legal footer identifiers, approved privacy/warranty and indexing policy intact. Do not copy site HTML over generated production pages by hand.

`components-source/` contains the authored carousel/comparison code and build scripts. The dependency reference documents the preview toolchain only; it is not installed by the production build. Review dependencies and component licensing before integrating. Prebuilt browser bundles are in site/assets. No license keys or Sites hosting scaffolding are included.

## Verification

Preview browser checks completed in the design iteration, including grid boundary alignment and cursor enter/leave, photo rendering and comparison controls. GPU carousel rendering was not verified in the cloud browser. This PR does not change production behavior; production integration and its responsive/functional acceptance checks remain separate work.
