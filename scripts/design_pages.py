"""Authored page fragments and assets for the approved Development design.

The production shell, contact form, consent and legal pages remain owned by
author-site.py. Fragments are source inputs, never copied over generated output.
"""
from pathlib import Path
from html import escape
import json
import re

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'site/design'
PAGES = json.loads((SOURCE / 'pages.json').read_text())


def content(slug, title, description, body):
    metadata = PAGES.get(slug, {})
    template = SOURCE / (slug + '.html')
    if template.exists():
        fragment = template.read_text()
        if slug == 'epikoinonia':
            form = re.search(r'<form\b.*?</form>', body, re.S)
            if not form:
                raise ValueError('The production contact form is missing')
            fragment = fragment.replace('<!-- PRODUCTION_CONTACT_FORM -->', form.group())
        body = fragment
    return metadata.get('title', title), metadata.get('description', description), body


def head(slug):
    metadata = PAGES.get(slug, {})
    tags = '<script src="/theme-init.js"></script>'
    tags += ''.join(f'<link rel="stylesheet" href="{escape(url)}">' for url in metadata.get('styles', []))
    tags += ''.join('<script type="application/ld+json">' + json.dumps(data, ensure_ascii=False) + '</script>' for data in metadata.get('schema', []))
    return tags


def scripts(slug):
    return ''.join(f'<script src="{escape(item["src"])}" ' + ('type="module"' if item['module'] else 'defer') + '></script>' for item in PAGES.get(slug, {}).get('scripts', []))


def body_class(slug):
    return escape(PAGES.get(slug, {}).get('body_class', ''))
