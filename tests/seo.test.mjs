import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const pages = JSON.parse(fs.readFileSync('site/pages.json', 'utf8'));
const schema = html => [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));

test('SEO routes, business identity and article metadata survive production generation', () => {
  const guide = '/el/odigoi/anakainizo-noikiazo';
  assert.ok(pages[guide]);
  assert.ok(pages['/el/anakainisi-stavroupoli']);
  for (const route of ['/el', '/el/epikoinonia']) {
    const business = schema(pages[route]).find(x => x['@type'] === 'GeneralContractor');
    assert.equal(business.telephone, '+302310445935');
    assert.equal(business['@id'], 'https://arcusdevelopment.gr/#organization');
    assert.ok(!business.aggregateRating && !business.openingHoursSpecification);
  }
  const nodes = schema(pages[guide]);
  assert.equal(nodes.filter(x => x['@type'] === 'BreadcrumbList').length, 1);
  assert.equal(nodes.find(x => x['@type'] === 'Article').mainEntityOfPage, 'https://arcusdevelopment.gr' + guide);
  const photos = new Set();
  for (const [route, html] of Object.entries(pages)) {
    if (!/^\/el\/(erga\/|odigoi\/|anakainisi-stavroupoli$)/.test(route)) continue;
    const og = [...html.matchAll(/<meta property="og:image" content="([^"]+)"/g)];
    assert.equal(og.length, 1, route);
    assert.ok(og[0][1].includes('/assets/social/'), route);
    assert.ok(fs.existsSync('public' + new URL(og[0][1]).pathname), route);
    assert.ok(html.includes('property="og:image:width" content="1200"'), route);
    photos.add(og[0][1]);
  }
  assert.equal(photos.size, 13);
});

test('quote calculator uses user input, clears stale results and rejects invalid values', () => {
  const events = {};
  const total = {valueAsNumber:50000};
  const area = {valueAsNumber:80};
  const result = {textContent:''};
  let valid = true;
  const form = {addEventListener:(name, fn) => events[name] = fn, reportValidity:() => valid};
  const elements = {'budget-calculator':form,'budget-total':total,'budget-area':area,'budget-result':result};
  vm.runInNewContext(fs.readFileSync('public/seo-budget.js','utf8'), {document:{getElementById:id=>elements[id]},Intl,Number});
  let prevented = false;
  events.submit({preventDefault:()=>prevented=true});
  assert.ok(prevented);
  assert.ok(result.textContent.startsWith('625,00'));
  events.input();
  const initial = result.textContent;
  area.valueAsNumber = 0;
  events.submit({preventDefault(){}});
  assert.equal(result.textContent, initial);
  area.valueAsNumber = NaN;
  events.submit({preventDefault(){}});
  assert.equal(result.textContent, initial);
  valid = false;area.valueAsNumber=80;
  events.submit({preventDefault(){}});
  assert.equal(result.textContent, initial);
});
