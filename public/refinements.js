(() => {
  document.querySelectorAll('[data-gallery-limit]').forEach(section => {
    const extras = [...section.querySelectorAll('[data-gallery-extra]')];
    const button = section.querySelector('.gallery-toggle');
    const summary = section.querySelector('.gallery-summary');
    const controls = section.querySelector('.gallery-actions');
    if (!button || !extras.length) return;
    const initial = Number(section.dataset.photoInitial), total = Number(section.dataset.photoCount);
    function show(expanded) {
      extras.forEach(figure => { figure.hidden = !expanded; });
      button.setAttribute('aria-expanded', String(expanded));
      button.textContent = expanded ? 'Κράτησε τις επιλεγμένες εικόνες' : button.dataset.allLabel;
      summary.textContent = expanded ? `Προβάλλονται και οι ${total} εικόνες.` : `${initial} επιλεγμένες εικόνες από ${total}.`;
    }
    show(false); controls.hidden = false;
    button.addEventListener('click', () => {
      const expand = button.getAttribute('aria-expanded') !== 'true';
      show(expand);
      if (!expand) section.scrollIntoView({block:'start',behavior:'instant'});
    });
  });
})();
