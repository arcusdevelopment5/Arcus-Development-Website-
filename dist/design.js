// Header tone follows its actual position over the hero.
const siteHeader = document.querySelector('.site-header');
if (document.body.classList.contains('home-page') && siteHeader) {
  const updateHeader = () => siteHeader.classList.toggle('is-scrolled', window.scrollY > 45);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}

// A conceptual floor-plan interaction. Native buttons support pointer and keyboard use.
const plan = document.querySelector('[data-plan]');
if (plan) {
  const names = { kitchen: 'Ενιαία κουζίνα και σαλόνι', bedroom: 'Ανοιχτή διάταξη υπνοδωματίου', study: 'Ανοιχτό γραφείο' };
  const labels = { kitchen: 'Ενοποίηση κουζίνας και σαλονιού', bedroom: 'Άνοιγμα χώρου υπνοδωματίου', study: 'Άνοιγμα χώρου γραφείου' };
  const selected = new Set();
  const buttons = [...plan.querySelectorAll('[data-wall]')];
  const reset = plan.querySelector('.plan-reset');
  const status = plan.querySelector('.plan-status');
  const instruction = plan.querySelector('.plan-instruction');
  function renderPlan() {
    buttons.forEach(button => {
      const key = button.dataset.wall;
      const active = selected.has(key);
      button.setAttribute('aria-pressed', String(active));
      button.setAttribute('aria-label', active ? `Επαναφορά χωρίσματος: ${names[key]}` : labels[key]);
      button.querySelector('span').textContent = active ? '↺' : '×';
      plan.querySelector(`[data-plan-wall="${key}"]`).classList.toggle('is-removed', active);
    });
    const active = selected.size > 0;
    status.hidden = !active;
    instruction.hidden = active;
    reset.hidden = !active;
    status.textContent = active ? [...selected].map(key => names[key]).join(' · ') : '';
  }
  buttons.forEach(button => button.addEventListener('click', () => {
    const key = button.dataset.wall;
    if (selected.has(key)) selected.delete(key);
    else selected.add(key);
    renderPlan();
  }));
  reset.addEventListener('click', () => {
    selected.clear();
    renderPlan();
    buttons[0].focus();
  });
  plan.querySelector('.plan-controls').hidden = false;
}

// Card links open their corresponding native detail section, including direct URLs.
function openServiceFromHash() {
  const id = window.location.hash.slice(1);
  if (!id.startsWith('service-')) return;
  const detail = document.getElementById(id);
  if (!detail?.matches('.service-explorer details')) return;
  detail.open = true;
}
document.querySelectorAll('.arch-card').forEach(link => link.addEventListener('click', () => {
  const detail = document.getElementById(link.hash.slice(1));
  if (detail) detail.open = true;
}));
window.addEventListener('hashchange', openServiceFromHash);
openServiceFromHash();
