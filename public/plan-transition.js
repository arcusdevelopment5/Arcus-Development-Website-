(()=>{
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 document.querySelectorAll('[data-plan-transition]').forEach(root=>{
  const toggle=root.querySelector('[data-plan-switch]'),pause=root.querySelector('[data-plan-pause]');
  let timer,visible=false,paused=false;
  const stopped=()=>paused||reduced.matches||document.hidden||document.documentElement.classList.contains('motion-paused');
  const show=next=>{
   root.dataset.state=next?'after':'before';
   toggle.setAttribute('aria-pressed',String(next));
   toggle.setAttribute('aria-label',next?'Επαναφορά αρχικής διαρρύθμισης':'Εμφάνιση νέας διαρρύθμισης');
   root.querySelector('[data-plan-state]').textContent=next?'02 / Μετά τον διαχωρισμό':'01 / Αρχική κατάσταση';
   root.querySelector('[data-plan-description]').textContent=next?'Τρεις κατοικίες. Μια νέα αρχή.':'Η αρχική διαρρύθμιση.';
  };
  const schedule=()=>{clearTimeout(timer);if(visible&&!stopped())timer=setTimeout(()=>{show(root.dataset.state!=='after');schedule()},8500)};
  const update=()=>{root.dataset.paused=String(stopped());pause.textContent=paused?'Συνέχεια ▷':'Παύση Ⅱ';pause.setAttribute('aria-pressed',String(paused));pause.setAttribute('aria-label',paused?'Συνέχιση αυτόματης εναλλαγής':'Παύση αυτόματης εναλλαγής');pause.disabled=reduced.matches; if(reduced.matches)pause.textContent='Μειωμένη κίνηση';schedule()};
  toggle.addEventListener('click',()=>{paused=true;show(root.dataset.state!=='after');update()});
  pause.addEventListener('click',()=>{paused=!paused;update()});
  root.classList.add('is-ready');
  if('IntersectionObserver' in window)new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;schedule()},{threshold:.35}).observe(root);
  new MutationObserver(update).observe(document.documentElement,{attributes:true,attributeFilter:['class']});
  document.addEventListener('visibilitychange',update);reduced.addEventListener('change',update);update();
 });
})();
