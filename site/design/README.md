# Development page sources

These are the approved V34 page bodies, integrated into the production authoring pipeline. Edit the relevant fragment and metadata in `pages.json`, then run `npm run content`. The generator adds the shared header, footer, metadata, consent banner, production form and page-specific assets. Do not edit `site/pages/` or `site/pages.json` directly.

Privacy and warranty bodies continue to come from the existing approved generators and legal data. The contact fragment contains a placeholder for the existing production form. Goal/project links prefill its existing description field without adding API fields or changing submission behavior.

The fifth magazine PDF is intentionally excluded at the owner's request. Its card currently links to the Arcus magazine/blog destination; IT can replace that link in `home.html` when the final PDF location is ready.

Only referenced preview assets are imported. No QA page, preview badge/form handler, obsolete carousel bundle, separate review snapshot, Sites scaffolding or PDF is included.
