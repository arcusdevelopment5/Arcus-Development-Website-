# Development page sources

These are the approved design and November 2026 SEO page bodies, integrated into the production authoring pipeline. Edit the relevant fragment and metadata in `pages.json`, then run `npm run content`. The generator adds the shared header, footer, metadata, consent banner, production form and page-specific assets. Do not edit `site/pages/` or `site/pages.json` directly.

Privacy and warranty bodies continue to come from the existing approved generators and legal data. The contact fragment contains a placeholder for the existing production form. Goal/project links prefill its existing description field without adding API fields or changing submission behavior.

The fifth magazine card keeps the external Heyzine PDF link merged by IT in PR #8. The PDF is not stored in this repository.

Only referenced preview assets are imported. No QA page, preview badge/form handler, obsolete carousel bundle, separate review snapshot, Sites scaffolding or PDF is included.

SEO metadata supports `social_image`, `social_alt`, `social_width` and `social_height`. The production generator emits one OG/Twitter image per page, a stable business identity, and guide breadcrumbs. LocalBusiness fields use only existing verified contact details.

The November 2026 update adds the subsidy guide and the Stavroupoli page. Subsidy details were checked on 24 November 2026 against gov.gr, dypa.gov.gr/anakainizo-noikiazo and stegasi.gov.gr/programs/anakainizo-noikiazo; revisit those official sources before changing eligibility or amounts. Cost-per-square-metre uses the visitor's own inputs, not an Arcus quotation. Approved project costs, hours and GPS remain pending.
