# Arcus Development

Ο ιστότοπος της Arcus Development για κατασκευές, ανακαινίσεις και σχεδιασμό. Ελληνική αρχική σελίδα και έξι εταιρικές υποσελίδες, με κοινή πλοήγηση και footer.

## Run locally

No installation or build step is required. Serve the `dist` directory with any static web server:

```bash
python3 -m http.server 8000 --directory dist
```

Open http://localhost:8000. The deployable website consists of the contents of `dist/`.

## Editing

- `dist/index.html`: homepage content and semantic structure.
- `dist/styles.css`: original shared styles and the retained Arcus footer.
- `dist/design.css`: current Lovable-inspired presentation, transparent home header, arch imagery, and company-page theme. Overrides intentionally exclude the footer.
- `dist/design.js`: header scroll state, keyboard-accessible interactive floor plan, and service-card disclosures.
- `dist/app.js`: desktop/mobile navigation, service accordions and accent-insensitive glossary search/filtering.
- `dist/assets/`: self-hosted brand assets, fonts and imagery.
- `DESIGN.md`: visual direction, sources and future content decisions.
- `components/header.html` and `components/footer.html`: canonical shared static navigation and footer.
- `scripts/sync-layout.py`: renders both shared components into root-level HTML pages. Run `python3 scripts/sync-layout.py` after changing them. New pages include one `shared-header` and one `shared-footer` start/end marker pair. The legacy `sync-footer.py` entry point delegates to this script.

The existing official Arcus contact page and verified Development telephone provide real contact routes. There is no local contact form, email submission service, analytics, cookie storage or CRM integration. The external contact page opens in a new tab. The first private review version includes `noindex, nofollow`; review this when connecting a public production domain.

Target repository: https://github.com/arcusdevelopment5/Arcus-Development-Website-

## Next pages

Develop service detail pages, an approved real-project portfolio and a dedicated contact flow as separate tasks. Do not use inspirational imagery as evidence of completed projects.

## Company section

- `dist/company.html`: Ποιοι είμαστε.
- `dist/philosophy.html`: Φιλοσοφία και αξίες.
- `dist/faq.html`: Συχνές ερωτήσεις, ten native disclosure answers in three groups.
- `dist/glossary.html`: Τεχνικό λεξικό, sixteen entries with Greek search, category filtering, clear/reset and an empty state. All definitions remain readable without JavaScript.
- `dist/careers.html`: Καριέρα, fields of collaboration and an explicit expression-of-interest route; no invented vacancies.
- `dist/office.html`: Το γραφείο μας, verified Development address/phone, map search and official Arcus contact page.

The footer artwork is now only an abstract floor plan. The decorative A was removed; official brand logos are preserved.

## Current visual direction

The user-selected reference is https://arch-line-bright.lovable.app/. The homepage now follows its dark architectural hero, lightweight Manrope typography, interactive floor plan, pill links, warm neutral surfaces, arch-shaped service photography, numbered process and inset green contact section. All six company pages share the new theme. The existing footer component, floor-plan background and footer CSS are unchanged.

The reference imagery is self-hosted as optimized WebP assets (`reference-*.webp`), sourced from the user-provided Lovable site. It is presented as architectural inspiration, not verified completed projects. The previously verified Arcus archive image retains its source link. Reference placeholder metrics, reviews and contact data are not used.

The conceptual floor plan supports three independent changes, keyboard activation, accessible state announcements and a reset. It represents a design exploration, not a structural proposal. Service cards open matching native details and work on direct fragment links.

## Company mega menu

The shared desktop header uses a full-width company panel inspired by the user's Arcus BnB screenshot: introduction, two photographic links and four secondary links. Fine-pointer hover opens with a short intent delay and closes with an exit grace period. Native disclosure activation remains available for click, touch and keyboard. Escape, outside click, focus departure and viewport changes close the panel. The six-link mobile disclosure remains available below the 961px desktop breakpoint. Short viewports scroll the panel independently.
