# Arcus Development — homepage direction

Date: 2026-10-28. User-confirmed scope: construction and renovations, one page at a time, beginning with the homepage. Creator archetype in copy and palette, consistent with the Arcus family.

## Design system

- Main message: «Κάθε χώρος, μια νέα δυνατότητα.»
- Voice: imaginative, specific, collaborative and calm. Emphasize the visitor's ideas, thoughtful design, materials and execution. Avoid invented guarantees, metrics, investment returns and testimonials.
- Existing identity: the actual Arcus Development logo found on the current Arcus Real Estate website. It is used unchanged, with a CSS monochrome treatment on light backgrounds.
- Typography: the same Manrope font family used by Arcus Real Estate, with local Greek and Latin subsets. Georgia italic adds an editorial accent to selected expressive phrases.
- Paper `#f5f2ec`, ink `#262821`, clay `#9e4936`, sand `#eae5db`, green charcoal `#35382e`. This is a proposed Development palette, not a verified official brand manual. Clay maintains kinship with Arcus's observed red `#b71c1c` while connecting to tactile construction materials.
- Spacious editorial composition, rectangular controls, generous images, fine dividers, restrained movement and accessible focus states.

## Sources checked

- https://arcusrealestate.gr/el — family identity, Manrope and red/neutral palette.
- https://arcusrealestate.gr/el/services/renovations — service scope and illustrative renovation image.
- https://arcusrealestate.gr/el/blog/anakainisi-me-ypografi-arcus — bathroom photograph and published construction/renovation positioning. The homepage links directly to this article and does not claim a project location, size or date.
- https://arcusrealestate.gr/el/blog/chtizontas-to-mellon — construction and investment department context. No return claims are carried over.
- https://arcusrealestate.gr/el/communication — Development phone 2310445935, Tsalouchidi 54, second floor, Thessaloniki. This official contact entry was used instead of conflicting historical company locations.
- https://arcusdevelopment.gr — older franchise-focused material found in search; not used as the current service positioning after the user's explicit choice of construction and renovations.

## Assets

Existing Arcus assets downloaded from the user's reference website:

- `arcus-development.png`: `https://arcusrealestate.gr/_next/static/media/logo-arcus-development.05.zx4pi34hz8.png`
- `renovations.jpg`: `https://arcusrealestate.gr/img/services/renovations-v4.jpg`. Labeled as an illustrative image.
- `interior.jpg`: `https://arcusrealestate.gr/blog/images/anakainisi-me-ypografi-arcus/----------------------.jpg`. Used with an explicit published-archive caption.
- Manrope Greek/Latin font subsets from the reference site's current font assets.
- `hero-concept.webp`: AI-generated architectural inspiration, explicitly labeled on the homepage. It is not a completed Arcus project or property listing.

Image-generation brief (built-in Imagegen): a photorealistic Mediterranean architectural concept with limewash, travertine, natural oak, cream linen and a terracotta armchair, warm light, no people or text, visual emphasis toward the right to leave space for the homepage title. No existing property is depicted.

## Content boundaries

The initial version was the homepage; the company section now adds six complete static pages. Service navigation continues to use real homepage anchors. Service details expand in place. Contact uses a real telephone and the official Arcus contact page. No portfolio statistics, case-study specifications, customer reviews, awards or certifications are invented. A future portfolio requires approved project photos and verified facts.

## Shared footer — 2026-10-28

User reference: uploaded Arcus BnB footer screenshot. The approved structural direction is a top group-introduction strip with all five reference logos (Development, Real Estate, Lab, BnB, Estate), a dark multicolumn footer, then a fine divider and copyright row. The Development footer carries its own verified address and phone, Creator copy and the signature «Imagine. Create. Live.».

The footer is shared via `components/footer.html` and `scripts/sync-footer.py`, rendered as static accessible HTML. It remains in normal document flow at the bottom of each page. All five authentic logo assets come from the current Arcus Real Estate footer; they use a consistent white CSS treatment. Lab and Estate remain noninteractive brand marks until dedicated destinations are confirmed. Development links to this homepage; Real Estate and BnB use their existing official destinations.

The reference newsletter area is adapted to a project-enquiry CTA with a working contact anchor. No unconnected newsletter form, unverified email/hours, or placeholder legal links have been added.


### Footer graphic revision

The oversized Development-logo watermark was replaced at the user's request with a native SVG architectural line drawing (`dist/assets/footer-architectural-lines.svg`). Its three separated oblique strokes follow the apex, notched right stroke and crossbar of the existing A, then continue into abstract plan walls, door sweeps and construction guides. It carries no company lettering, numerical dimensions or claim to be an actual project plan. Fine warm neutral lines sit behind the lower right footer; the five group logos and normal brand identity remain in their original places.

## Company section — 2026-10-28

User direction: remove the decorative A and retain the floor plan; add “Η εταιρεία μας” with all subsections, using https://arcusrealestate.gr/el as reference. The user selected the Development-specific adaptation: about, philosophy/values, FAQ, technical glossary, careers and the office. Golden Visa and brokerage-specific pages are outside this selected scope.

Reference structure checked at:
- https://arcusrealestate.gr/el/company/about-us
- https://arcusrealestate.gr/el/company/faq
- https://arcusrealestate.gr/el/company/technical-terms
- https://arcusrealestate.gr/el/company/career
- https://arcusrealestate.gr/el/offices
- https://arcusrealestate.gr/el/communication (Development-specific address and telephone)

Original Greek Creator copy replaces brokerage-oriented content. The about page reuses the existing, explicitly labeled architectural AI concept. The office uses a typographic composition with the abstract plan rather than a fabricated office photograph. No team biographies, awards, guarantees, pricing, turnaround promises, vacancies or Development email address have been invented. Career enquiries open the existing Arcus contact page and identify the intended business. The glossary defines basic design/construction vocabulary, without regulatory thresholds or project-specific engineering advice.

The shared header includes a native disclosure dropdown with six links; mobile has the same hierarchy. Each company page adds a breadcrumb, active section navigation and shared footer. Search handles Greek accents/case and final sigma, supports category intersection, and announces results/empty states.

The footer A fragments and oblique offsets were removed. The retained rectilinear floor plan was connected across the removed shape and its construction axis shortened. Original logo assets remain unchanged.

Validation: local browser checked all six new pages at 375, 768 and 1440 pixel frame widths, without horizontal overflow; mobile menu navigation, desktop disclosure/Escape, FAQ expansion, Greek glossary search, category filters, empty results and reset passed. Static audit of all seven pages found no broken local file/anchor links, duplicate IDs or missing main/headings/image alternatives. JavaScript syntax check passed.

## Lovable reference redesign — 2026-10-28

User request: adopt the design of their existing Lovable site, https://arch-line-bright.lovable.app/, while keeping our footer. This is the current visual direction, superseding the previous clay/serif treatment outside the footer.

Observed reference: charcoal photographic hero, large light Manrope headline, interactive rectilinear floor plan, transparent header becoming opaque on scroll, warm grey background, fine borders, pill actions, arch-cropped service images, numbered value/process lists, two-column imagery and a rounded inset green contact section. Applied the same language to all six existing company pages without changing their content or routes.

Current non-footer palette: paper #e7e4df, ink #272727, muted #716e68, line #d1cdc6, green #414f45. Authentic Development logo retained. Footer uses its previous colors, five group logos, architecture background and layout, unchanged.

Self-hosted image sources from the user-owned reference:
- reference-hero.webp: /assets/hero-main-CUygsYU9.jpg
- reference-bathroom.webp: /assets/service-bathroom-C2CF-wrR.jpg
- reference-kitchen.webp: /assets/service-kitchen-MHsbjAyI.jpg
- reference-living.webp: /assets/service-living-C9T7YDfx.jpg
- reference-bedroom.webp: /assets/project-bedroom-D5Tzgv5-.jpg
- reference-openplan.webp: /assets/project-living-DNtvWibO.jpg
All paths above are on https://arch-line-bright.lovable.app. Assets are illustrative; no reference location, date, project size or completion claim is carried over. The existing authentic Arcus bathroom archive photo links to its published article. Placeholder reference statistics/testimonials, contact email/telephone and unconnected submission form were not transferred. The real Development contact routes remain in place.

The hero plan is native SVG with accessible HTML buttons: toggle kitchen/living partition, bedroom partition and study partition independently, see a dashed trace, and reset. No dimensions are invented. The footer plan remains separate and unchanged.

Validation: JavaScript syntax checks passed. Local file/fragment links, unique IDs, semantic page landmarks and image alternatives passed for all seven pages. Browser QA checked homepage at 320/375/768/1024/1440px and all six company pages at 375/768/1440px without horizontal overflow. Three plan changes worked with pointer, Enter and Space, reset cleared all changes, service cards opened their detail sections, header scroll state changed, company dropdown/Escape and mobile navigation worked, and Greek glossary search still returned matching entries. Footer component SHA256 and SVG SHA256 stayed unchanged throughout the redesign.

## Full-width company menu — 2026-10-28

User reference: attached Arcus BnB screenshot, showing a light full-width panel under the header with a brand introduction and two photographic category links. Adapted to Development with «Ποιοι είμαστε» and «Φιλοσοφία και αξίες» image links, followed by FAQs, glossary, careers and office. Reused existing illustrative reference photography and the approved «Imagine. Create. Live.» signature. No changes to the homepage layout, six page contents or shared footer.

The native details disclosure retains click and keyboard semantics. Hover enhancement uses a fine-pointer media query, 100ms opening intent and 240ms exit grace. Header becomes light while open. Escape restores focus; outside click, focus departure, blur and breakpoint changes close the panel. Short viewports have bounded panel scrolling.

Verified in browser: pointer entry opens, panel pointer presence retains the menu, pointer exit closes; company-card navigation works; desktop panel spans the viewport; all six links work with sequential Tab and scroll into view in a 420px-high frame; Tab departure closes; the mobile menu retains all six links and navigates successfully. Static checks passed for shared header markers/IDs and local company links on all seven pages.
