#!/usr/bin/env python3
"""Render the shared header/footer into root-level static pages."""
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
for page in sorted((ROOT / 'dist').glob('*.html')):
    source = page.read_text()
    for name in ('header', 'footer'):
        start, end = f'<!-- shared-{name}:start -->', f'<!-- shared-{name}:end -->'
        if start not in source:
            continue
        if source.count(start) != 1 or source.count(end) != 1:
            raise ValueError(f'Expected one {name} region in {page}')
        content = (ROOT / f'components/{name}.html').read_text().strip()
        if page.name != 'index.html':
            content = content.replace(f'href="{page.name}"', f'href="{page.name}" aria-current="page"')
        before, remainder = source.split(start, 1)
        _, after = remainder.split(end, 1)
        source = before + start + '\n' + content + '\n' + end + after
    page.write_text(source)
    print(f'Updated {page.relative_to(ROOT)}')
