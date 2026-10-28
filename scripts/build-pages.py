#!/usr/bin/env python3
"""Compile the authored HTML pages and route metadata for the Worker."""
from pathlib import Path
import json
ROOT=Path(__file__).resolve().parents[1]
pages={}
for p in (ROOT/'site/pages').glob('*.html'):
 route='/el' if p.stem=='home' else '/el/'+p.stem.replace('--','/')
 pages[route]=p.read_text()
(ROOT/'site/pages.json').write_text(json.dumps(pages,ensure_ascii=False))
origin='https://arcus-development-home.adreaslougas.chatgpt.site'
urls=''.join(f'<url><loc>{origin}{route}</loc></url>' for route in pages if '/admin' not in route)
(ROOT/'public/sitemap.xml').write_text('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+urls+'</urlset>')
(ROOT/'public/robots.txt').write_text('User-agent: *\nDisallow: /\n# Private review site. Enable indexing only with the approved public launch.\n')
print(f'Compiled {len(pages)} pages')
