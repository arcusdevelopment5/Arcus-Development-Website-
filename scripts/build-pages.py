#!/usr/bin/env python3
"""Compile the authored HTML pages and route metadata for the Next.js route handler."""
from pathlib import Path
import json
ROOT=Path(__file__).resolve().parents[1]
pages={}
for p in (ROOT/'site/pages').glob('*.html'):
 route='/el' if p.stem=='home' else '/el/'+p.stem.replace('--','/')
 pages[route]=p.read_text()
(ROOT/'site/pages.json').write_text(json.dumps(pages,ensure_ascii=False))
# robots.txt and sitemap.xml are served by Next (app/robots.ts, app/sitemap.ts).
print(f'Compiled {len(pages)} pages')
