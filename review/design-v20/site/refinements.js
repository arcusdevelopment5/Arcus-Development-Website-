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
  const choices = [...document.querySelectorAll('[data-journey]')];
  const services = [...document.querySelectorAll('[data-journeys]')];
  const summary = document.querySelector('#journey-summary');
  if (!choices.length || !summary) return;
  const copy = {
    buy:'Από την αναζήτηση μέχρι την εγκατάσταση: οι υπηρεσίες που μπορούν να υποστηρίξουν την αγορά σου.',
    owner:'Ανακαίνιση, πώληση, μίσθωση ή διαχείριση: ξεκίνα από τον στόχο που έχεις για το ακίνητό σου.',
    invest:'Από τη διερεύνηση μιας αγοράς μέχρι την ανακαίνιση και τη διαχείριση: δες ποιος αναλαμβάνει κάθε στάδιο.'
  };
  function choose(value) {
    let count=0;
    services.forEach(card=>{card.hidden=!card.dataset.journeys.split(' ').includes(value);if(!card.hidden)count++;});
    choices.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.journey===value)));
    summary.textContent=copy[value]+` (${count} υπηρεσίες)`;
  }
  choices.forEach(button=>button.addEventListener('click',()=>choose(button.dataset.journey)));
  choose('buy');
})();
