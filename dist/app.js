const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#mobile-nav');
const companyMenu = document.querySelector('.company-menu');
const navigationHeader = document.querySelector('.site-header');
const hoverNavigation = window.matchMedia('(min-width: 961px) and (hover: hover) and (pointer: fine)');
let companyOpenTimer;
let companyCloseTimer;
let keyboardNavigation = false;

function clearCompanyTimers() {
  window.clearTimeout(companyOpenTimer);
  window.clearTimeout(companyCloseTimer);
}
function setCompanyMenu(open, restoreFocus = false) {
  if (!companyMenu) return;
  clearCompanyTimers();
  companyMenu.open = open;
  navigationHeader?.classList.toggle('company-open', open);
  if (restoreFocus) companyMenu.querySelector('summary').focus();
}
function setMenu(open, restoreFocus = false) {
  if (!toggle || !menu) return;
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Κλείσιμο μενού' : 'Άνοιγμα μενού');
  menu.hidden = !open;
  if (open) setCompanyMenu(false);
  if (restoreFocus) toggle.focus();
}
toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
companyMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setCompanyMenu(false)));

// Keep the native disclosure for click, touch and keyboard. Hover adds intent and a
// short exit grace period, so moving from the trigger to the wide panel is stable.
companyMenu?.addEventListener('pointerenter', event => {
  if (!hoverNavigation.matches || event.pointerType === 'touch') return;
  keyboardNavigation = false;
  clearCompanyTimers();
  if (!companyMenu.open) companyOpenTimer = window.setTimeout(() => setCompanyMenu(true), 100);
});
companyMenu?.addEventListener('pointerleave', event => {
  if (!hoverNavigation.matches || event.pointerType === 'touch') return;
  clearCompanyTimers();
  if (keyboardNavigation && companyMenu.contains(document.activeElement)) return;
  companyCloseTimer = window.setTimeout(() => setCompanyMenu(false), 240);
});
companyMenu?.addEventListener('toggle', () => {
  window.clearTimeout(companyOpenTimer);
  navigationHeader?.classList.toggle('company-open', companyMenu.open);
});
companyMenu?.addEventListener('focusout', () => {
  requestAnimationFrame(() => {
    if (!companyMenu.contains(document.activeElement)) setCompanyMenu(false);
  });
});
document.addEventListener('pointerdown', () => { keyboardNavigation = false; }, { passive: true });
document.addEventListener('keydown', event => {
  keyboardNavigation = true;
  if (event.key !== 'Escape') return;
  clearCompanyTimers();
  if (menu && !menu.hidden) setMenu(false, true);
  if (companyMenu?.open) setCompanyMenu(false, true);
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) setMenu(false);
  if (companyMenu?.open && !companyMenu.contains(event.target)) setCompanyMenu(false);
});
window.matchMedia('(min-width: 961px)').addEventListener('change', event => {
  if (event.matches) setMenu(false);
  setCompanyMenu(false);
});
window.addEventListener('blur', () => setCompanyMenu(false));

document.querySelectorAll('.service-list details').forEach(details => {
  details.addEventListener('toggle', () => {
    if (details.open) document.querySelectorAll('.service-list details').forEach(other => {
      if (other !== details) other.open = false;
    });
  });
});
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const search = document.querySelector('#term-search');
if (search) {
  const entries = [...document.querySelectorAll('.term-entry')];
  const filters = [...document.querySelectorAll('[data-filter]')];
  const clear = document.querySelector('#clear-search');
  const empty = document.querySelector('.empty-terms');
  const count = document.querySelector('#term-count');
  const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('el').replace(/ς/g, 'σ');
  let category = 'all';
  function updateTerms() {
    const query = normalize(search.value.trim());
    let visible = 0;
    entries.forEach(entry => {
      const match = (category === 'all' || entry.dataset.category === category) && normalize(entry.textContent).includes(query);
      entry.hidden = !match;
      if (match) visible++;
    });
    clear.hidden = search.value.length === 0;
    empty.hidden = visible > 0;
    count.textContent = `${visible} ${visible === 1 ? 'όρος' : 'όροι'} από ${entries.length}`;
    filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === category)));
  }
  search.addEventListener('input', updateTerms);
  filters.forEach(button => button.addEventListener('click', () => { category = button.dataset.filter; updateTerms(); }));
  clear.addEventListener('click', () => { search.value = ''; updateTerms(); search.focus(); });
  document.querySelector('#reset-terms').addEventListener('click', () => { search.value = ''; category = 'all'; updateTerms(); search.focus(); });
  document.querySelector('.glossary-tools').hidden = false;
  updateTerms();
}
