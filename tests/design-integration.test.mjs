import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const pages = JSON.parse(fs.readFileSync(path.join(root, 'site/pages.json'), 'utf8'));

test('all production pages retain consent, legal identification and the indexing switch', () => {
  for (const [route, html] of Object.entries(pages)) {
    assert.equal((html.match(/<h1\b/g) || []).length, 1, route);
    assert.ok(html.includes('<meta name="robots" content="noindex,nofollow">'), route);
    assert.ok(html.includes('id="consent"') && html.includes('data-consent-open'), route);
    assert.ok(html.includes('802211949') && html.includes('172215306000'), route);
    assert.ok(!/data-preview-form|ΠΡΟΕΠΙΣΚΟΠΗΣΗ ΣΧΕΔΙΑΣΜΟΥ|src="\/review.js"/.test(html), route);
    for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      assert.doesNotThrow(() => JSON.parse(match[1]), route);
    }
  }
});

test('contact uses the production form and existing submission fields', () => {
  const html = pages['/el/epikoinonia'];
  assert.equal((html.match(/<form\b/g) || []).length, 1);
  assert.ok(html.includes('id="project-form"'));
  for (const field of ['kind','source','idempotency','website','intent','name','area','phone','email','sqm','timeline','description','files','privacy']) {
    assert.ok(html.includes(`name="${field}"`), field);
  }
  assert.ok(html.includes('src="/app.js"'));
  assert.ok(html.includes('src="/contact-context.js"'));
});

test('page links, responsive images and local assets resolve without the deferred PDF', () => {
  const aliases = ['/el/kariera','/el/grafeio','/el/erga/perraivou-9'];
  for (const [route, html] of Object.entries(pages)) {
    const urls = [...html.matchAll(/(?:src|href|data-display-src)="(\/[^"\s]+)"/g)].map(m => m[1]);
    for (const srcset of html.matchAll(/srcset="([^"]+)"/g)) {
      urls.push(...srcset[1].split(',').map(s => s.trim().split(/\s+/)[0]));
    }
    for (const url of urls) {
      const pathname = new URL(url.replaceAll('&amp;', '&'), 'https://arcusdevelopment.gr').pathname.replace(/\/$/, '') || '/';
      assert.ok(!pathname.endsWith('estate-5.pdf'), route);
      const found = pathname === '/' || pages[pathname] || aliases.includes(pathname) || fs.existsSync(path.join(root, 'public', pathname));
      assert.ok(found, `${route}: missing ${url}`);
    }
  }
});

test('new guides and all eight project galleries are served by the production page map', () => {
  assert.equal(Object.keys(pages).filter(p => p.startsWith('/el/odigoi')).length, 4);
  const projects = Object.entries(pages).filter(([p]) => p.startsWith('/el/erga/'));
  assert.equal(projects.length, 8);
  for (const [route, html] of projects) {
    assert.ok(html.includes('id="project-journey"'), route);
    assert.ok(html.includes('/assets/arcus-passage.js'), route);
    assert.ok(html.includes('gallery-open'), route);
  }
  assert.ok(pages['/el/one-stop-shop'].includes('data-center-flow'));
  assert.ok(pages['/el/one-stop-shop'].includes('Να το νοικιάσω'));
  assert.ok(!pages['/el'].includes('data-center-flow'));
});
