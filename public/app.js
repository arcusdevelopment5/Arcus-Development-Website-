// Arcus Development — site behaviour (ARCUSCRM-533). No dependencies.
// The inquiry form logic is unchanged from the previous site.js; keep it in sync with lib/inquiry-validation.mjs.
(() => {
  'use strict';
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const requestId = () => Array.from(crypto.getRandomValues(new Uint8Array(16)), b => b.toString(16).padStart(2, '0')).join('');

  // ---- analytics hooks (no tracker is loaded; events only reach window listeners / an existing dataLayer)
  const allowedEvents = new Set(['select_service_home', 'select_service_investment', 'view_project', 'interact_before_after', 'click_primary_cta', 'submit_project_inquiry', 'click_phone', 'click_email']);
  function event(name, params = {}) {
    if (!allowedEvents.has(name)) return;
    const safe = { event: name, page: location.pathname, ...params };
    window.dispatchEvent(new CustomEvent('arcus:analytics', { detail: safe }));
    if (Array.isArray(window.dataLayer)) window.dataLayer.push(safe);
  }
  $$('[data-event]').forEach(a => a.addEventListener('click', () => event(a.dataset.event)));
  $$('a[href^="tel:"]').forEach(a => { if (!a.dataset.event) a.addEventListener('click', () => event('click_phone')); });

  // ---- header: scrolled state, current page, dropdowns, mobile menu
  const header = $('.site-header');
  const onScroll = () => header && header.classList.toggle('is-scrolled', scrollY > 8);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  const here = location.pathname.replace(/\/$/, '');
  $$('.nav > a, .drop-panel a, .mnav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === here || (href === '/el/erga' && here.startsWith('/el/erga/'))) a.setAttribute('aria-current', 'page');
  });
  const drops = $$('.drop');
  const canHover = matchMedia('(hover:hover) and (pointer:fine)');
  drops.forEach(drop => {
    let timer;
    drop.addEventListener('pointerenter', e => { if (!canHover.matches || e.pointerType === 'touch') return; clearTimeout(timer); timer = setTimeout(() => { drops.forEach(d => { if (d !== drop) d.open = false; }); drop.open = true; }, 90); });
    drop.addEventListener('pointerleave', e => { if (!canHover.matches || e.pointerType === 'touch') return; clearTimeout(timer); timer = setTimeout(() => { drop.open = false; }, 220); });
    drop.addEventListener('toggle', () => { if (drop.open) drops.forEach(d => { if (d !== drop) d.open = false; }); });
    drop.addEventListener('focusout', () => requestAnimationFrame(() => { if (!drop.contains(document.activeElement)) drop.open = false; }));
  });
  const mnav = $('#mnav'), toggle = $('.nav-toggle');
  function menu(open, focus = false) {
    if (!mnav || !toggle) return;
    mnav.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Κλείσιμο μενού' : 'Άνοιγμα μενού');
    document.documentElement.style.overflow = open ? 'hidden' : '';
    if (focus) toggle.focus();
  }
  toggle?.addEventListener('click', () => menu(mnav.hidden));
  $$('a', mnav || document.createElement('div')).forEach(a => a.addEventListener('click', () => menu(false)));
  matchMedia('(min-width: 981px)').addEventListener('change', () => menu(false));
  document.addEventListener('click', e => { if (!e.target.closest('.drop')) drops.forEach(d => { d.open = false; }); });
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    drops.forEach(d => { if (d.open) { d.open = false; $('summary', d).focus(); } });
    if (mnav && !mnav.hidden) menu(false, true);
  });

  // ---- before / after comparison
  $$('[data-comparison]').forEach(figure => {
    const input = $('input[type="range"]', figure), stage = $('.compare-stage', figure), presets = $$('[data-compare-value]', figure);
    let tracked = false;
    const update = () => {
      const value = Number(input.value);
      stage.style.setProperty('--pos', value + '%');
      input.setAttribute('aria-valuetext', `${value}% πριν, ${100 - value}% μετά`);
      presets.forEach(b => b.setAttribute('aria-pressed', String(Number(b.dataset.compareValue) === value)));
    };
    const interact = () => { update(); if (!tracked) { event('interact_before_after'); tracked = true; } };
    input.addEventListener('input', interact);
    presets.forEach(b => b.addEventListener('click', () => { input.value = b.dataset.compareValue; interact(); }));
    update();
  });

  // ---- the CAD plan: before / after
  $$('[data-plan-transition]').forEach(root => {
    const buttons = $$('[data-plan-show]', root), text = $('[data-plan-description]', root);
    const show = after => {
      root.dataset.state = after ? 'after' : 'before';
      buttons.forEach(x => x.setAttribute('aria-pressed', String((x.dataset.planShow === 'after') === after)));
      text.textContent = after ? 'Τρεις κατοικίες. Μια νέα αρχή.' : 'Η αρχική διαρρύθμιση.';
    };
    let timer = null, visible = false, touched = false;
    const schedule = () => {
      clearTimeout(timer);
      if (!root.hasAttribute('data-plan-auto') || touched || reduced.matches || !visible || document.hidden) return;
      timer = setTimeout(() => { show(root.dataset.state !== 'after'); schedule(); }, 4200);
    };
    buttons.forEach(b => b.addEventListener('click', () => { touched = true; clearTimeout(timer); show(b.dataset.planShow === 'after'); }));
    if ('IntersectionObserver' in window) new IntersectionObserver(e => { visible = e[0].isIntersecting; schedule(); }, { threshold: .3 }).observe(root);
    document.addEventListener('visibilitychange', schedule);
  });

  // ---- portfolio filter
  const filters = $$('[data-project-filter]');
  filters.forEach(button => button.addEventListener('click', () => {
    let count = 0;
    $$('[data-project-category]').forEach(card => {
      card.hidden = button.dataset.projectFilter !== 'all' && !card.dataset.projectCategory.split(' ').includes(button.dataset.projectFilter);
      if (!card.hidden) count++;
    });
    filters.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    $('#project-count').textContent = `${count} ${count === 1 ? 'έργο' : 'έργα'}`;
    $('.portfolio-empty').hidden = count !== 0;
  }));

  // ---- glossary search
  const search = $('#term-search');
  if (search) {
    const entries = $$('.term-entry'), buttons = $$('[data-filter]'), clear = $('#clear-search'), empty = $('.empty-terms'), count = $('#term-count');
    let category = 'all';
    const norm = t => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLocaleLowerCase('el').replace(/ς/g, 'σ');
    const update = () => {
      let visible = 0;
      entries.forEach(entry => {
        entry.hidden = !((category === 'all' || entry.dataset.category === category) && norm(entry.textContent).includes(norm(search.value.trim())));
        if (!entry.hidden) visible++;
      });
      clear.hidden = !search.value; empty.hidden = visible > 0;
      count.textContent = `${visible} ${visible === 1 ? 'όρος' : 'όροι'} από ${entries.length}`;
      buttons.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.filter === category)));
    };
    search.addEventListener('input', update);
    buttons.forEach(b => b.addEventListener('click', () => { category = b.dataset.filter; update(); }));
    clear?.addEventListener('click', () => { search.value = ''; update(); search.focus(); });
    $('#reset-terms')?.addEventListener('click', () => { category = 'all'; search.value = ''; update(); search.focus(); });
    $('.glossary-tools').hidden = false; update();
  }

  // ---- project gallery lightbox
  const box = $('.lightbox');
  if (box && box.showModal) {
    const links = $$('.gallery-open'), img = $('img', box), caption = $('#lightbox-caption'), counter = $('#lightbox-counter');
    let index = 0, opener = null;
    const show = i => {
      index = (i + links.length) % links.length;
      const a = links[index];
      img.src = a.getAttribute('href'); img.alt = a.dataset.caption || '';
      caption.textContent = a.dataset.caption || '';
      counter.textContent = `${String(index + 1).padStart(2, '0')} / ${String(links.length).padStart(2, '0')}`;
    };
    links.forEach((a, i) => a.addEventListener('click', e => { e.preventDefault(); opener = a; show(i); box.showModal(); }));
    $('[data-gallery-prev]', box).addEventListener('click', () => show(index - 1));
    $('[data-gallery-next]', box).addEventListener('click', () => show(index + 1));
    $('[data-gallery-close]', box).addEventListener('click', () => box.close());
    box.addEventListener('click', e => { if (e.target === box) box.close(); });
    box.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') show(index - 1); if (e.key === 'ArrowRight') show(index + 1); });
    box.addEventListener('close', () => opener?.focus());
  }

  // ---- project chapters: highlight the stage in view
  const chapterLinks = $$('.chapters a');
  if (chapterLinks.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => entries.forEach(en => {
      if (!en.isIntersecting) return;
      chapterLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + en.target.id));
    }), { rootMargin: '-45% 0px -50% 0px' });
    chapterLinks.forEach(a => { const t = document.getElementById(a.getAttribute('href').slice(1)); if (t) io.observe(t); });
  }

  // ---- gentle reveal on scroll
  if (!reduced.matches && 'IntersectionObserver' in window) {
    const targets = $$('.sec-head, .path, .work, .steps li, .compare, .split > *, .warranty-grid > *, .faq-wrap > *, .values li, .stop, .case > *, .timeline li, .gallery figure, .next-story, .location > *');
    const io = new IntersectionObserver(entries => entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } }), { rootMargin: '0px 0px -8% 0px', threshold: .08 });
    targets.forEach(t => { if (t.getBoundingClientRect().top > innerHeight) { t.classList.add('reveal'); io.observe(t); } });
  }

  // ---- mobile sticky CTA hides at the closing section and footer
  const sticky = $('.sticky-cta');
  if (sticky && 'IntersectionObserver' in window) {
    const ends = $$('.closing, .site-footer, .hero .actions, .intro');
    const visible = new Set();
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => en.isIntersecting ? visible.add(en.target) : visible.delete(en.target));
      sticky.classList.toggle('is-hidden', visible.size > 0);
    });
    ends.forEach(el => io.observe(el));
  }

  // ---- inquiry form (unchanged behaviour)
  const form = $('#project-form');
  if (form) {
    const params = new URLSearchParams(location.search), kind = params.get('kind') === 'support' ? 'support' : 'project';
    form.elements.kind.value = kind; form.elements.source.value = location.pathname; form.elements.idempotency.value = requestId();
    if (kind === 'support') {
      $('.intent-options', form).hidden = true;
      $$('[name="intent"]', form).forEach(r => { r.required = false; });
      const input = document.createElement('input'); input.type = 'hidden'; input.name = 'intent'; input.value = 'support'; form.append(input);
      $('#description').placeholder = 'Περιέγραψε το ζήτημα και πότε το παρατήρησες.';
      $('h1').innerHTML = 'Η φροντίδα συνεχίζεται.<br><em>Πες μας τι χρειάζεσαι.</em>';
      $('button[type="submit"]', form).firstChild.textContent = 'Καταχώρισε αίτημα υποστήριξης ';
    } else {
      const intent = params.get('intent');
      if (['home', 'investment'].includes(intent)) $(`[name="intent"][value="${intent}"]`, form).checked = true;
    }
    function errors(map) {
      $$('.field-error', form).forEach(el => { el.textContent = ''; });
      $$('[aria-invalid]', form).forEach(el => el.removeAttribute('aria-invalid'));
      for (const [name, message] of Object.entries(map)) {
        const slot = $('#' + name + '-error'); if (slot) slot.textContent = message;
        const input = $(`[name="${name}"]`, form); if (input) input.setAttribute('aria-invalid', 'true');
      }
      const first = $('[aria-invalid="true"]', form); if (first) first.focus();
    }
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const status = $('#form-status'), submit = $('button[type="submit"]', form), data = new FormData(form), issues = {};
      if (!data.get('intent')) issues.intent = 'Επίλεξε κατοικία ή επένδυση.';
      if (String(data.get('name') || '').trim().length < 2) issues.name = 'Συμπλήρωσε το ονοματεπώνυμό σου.';
      if (String(data.get('area') || '').trim().length < 2) issues.area = 'Συμπλήρωσε δήμο ή γειτονιά.';
      const phone = String(data.get('phone') || '').trim(), email = String(data.get('email') || '').trim();
      if (!phone && !email) issues.phone = 'Συμπλήρωσε τηλέφωνο ή email.';
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) issues.email = 'Έλεγξε τη διεύθυνση email.';
      if (phone && !/^\+?[\d\s().-]{8,25}$/.test(phone)) issues.phone = 'Έλεγξε τον αριθμό τηλεφώνου.';
      const sqm = String(data.get('sqm') || '');
      if (sqm && (!Number.isInteger(Number(sqm)) || Number(sqm) < 1 || Number(sqm) > 10000)) issues.sqm = 'Γράψε έγκυρο εμβαδόν σε m².';
      if (!data.get('privacy')) issues.privacy = 'Διάβασε την ενημέρωση απορρήτου.';
      const files = data.getAll('files').filter(f => f.size > 0);
      if (files.length > 3 || files.some(f => f.size > 8 * 1024 * 1024 || !['image/jpeg', 'image/png', 'image/webp', 'application/pdf'].includes(f.type))) issues.files = 'Έως 3 αρχεία JPG, PNG, WebP ή PDF, 8 MB το καθένα.';
      errors(issues);
      if (Object.keys(issues).length) { status.textContent = 'Έλεγξε τα πεδία που σημειώνονται.'; return; }
      submit.disabled = true; status.textContent = 'Καταχωρίζουμε το αίτημά σου…';
      try {
        const payload = Object.fromEntries([...data.entries()].filter(([, v]) => typeof v === 'string'));
        payload.turnstile = String(data.get('cf-turnstile-response') || '');
        if (files.length) {
          status.textContent = 'Ανεβάζουμε τα αρχεία σου…';
          try { const { uploadFiles } = await import('/blob-upload.js'); payload.files = await uploadFiles(files, payload.idempotency); }
          catch { errors({ files: 'Δεν ανέβηκαν τα αρχεία. Δοκίμασε ξανά ή στείλε το αίτημα χωρίς συνημμένο.' }); throw new Error('Δεν ανέβηκαν τα αρχεία. Δοκίμασε ξανά ή στείλε το αίτημα χωρίς συνημμένο.'); }
          status.textContent = 'Καταχωρίζουμε το αίτημά σου…';
        }
        const r = await fetch('/api/inquiries', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload), credentials: 'same-origin' });
        const result = await r.json().catch(() => ({ error: 'Δεν επιβεβαιώθηκε η καταχώριση. Τα στοιχεία παραμένουν στη φόρμα. Δοκίμασε ξανά ή κάλεσε στο 2310 445 935.' }));
        if (!r.ok || !result.ok) { if (result.errors) errors(result.errors); throw new Error(result.error || 'Δεν ολοκληρώθηκε η καταχώριση. Έλεγξε τα στοιχεία και προσπάθησε ξανά.'); }
        status.textContent = `Το αίτημά σου καταχωρίστηκε. Κωδικός: ${result.id}. Κράτησε τον κωδικό για την επικοινωνία μας.`;
        status.focus();
        event('submit_project_inquiry', { intent: kind === 'support' ? 'support' : String(data.get('intent')) });
        form.reset(); form.elements.kind.value = kind; form.elements.source.value = location.pathname; form.elements.idempotency.value = requestId();
        if (kind === 'support') $('input[type="hidden"][name="intent"]', form).value = 'support';
      } catch (error) {
        status.textContent = error.message || 'Δεν επιβεβαιώθηκε η καταχώριση. Τα στοιχεία παραμένουν στη φόρμα. Μπορείς να καλέσεις στο 2310 445 935.';
        status.focus();
      } finally {
        submit.disabled = false;
        if (window.turnstile && $('.cf-turnstile', form)) window.turnstile.reset($('.cf-turnstile', form));
      }
    });
    const siteKey = document.querySelector('meta[name="turnstile-sitekey"]')?.content;
    if (siteKey) {
      const box = document.createElement('div'); box.className = 'cf-turnstile'; box.dataset.sitekey = siteKey; box.dataset.language = 'el';
      $('#form-status').before(box);
      const sc = document.createElement('script'); sc.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js'; sc.async = true; sc.defer = true; document.head.append(sc);
    }
  }

  const year = $('#year'); if (year) year.textContent = new Date().getFullYear();
})();
