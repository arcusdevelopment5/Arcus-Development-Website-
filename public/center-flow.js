/* CenterFlow adapted for Arcus: semantic buttons, native SVG animation, no per-frame React updates. */
document.querySelectorAll('[data-center-flow]').forEach(root=>{
 const {services,goals}=JSON.parse(root.querySelector('.flow-data').textContent);
 let goal='all';
 const detail=root.querySelector('.flow-detail');
 function showService(index){
  let s=services[index];
  if(goal==='rent' && index===1) s=['Εκτίμηση μισθώματος',s[1],'Εξετάζουμε το ακίνητο και τα δεδομένα της αγοράς για να διαμορφώσουμε μια ρεαλιστική ζητούμενη τιμή ενοικίασης.',['Χαρακτηριστικά και κατάσταση του ακινήτου','Σύγκριση με αντίστοιχα ακίνητα','Πρόταση ζητούμενου μισθώματος'],s[4]];
  root.querySelectorAll('[data-service]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.service)===index)));
  root.querySelectorAll('[data-flow-line]').forEach(p=>p.classList.toggle('is-selected',Number(p.dataset.flowLine)===index));
  detail.replaceChildren();
  const add=(tag,text,cls)=>{const el=document.createElement(tag);el.textContent=text;if(cls)el.className=cls;detail.append(el);return el;};
  add('p',s[1],'flow-kicker');add('h3',s[0]);add('p',s[2]);
  const ul=add('ul','');s[3].forEach(text=>{const li=document.createElement('li');li.textContent=text;ul.append(li)});
  const a=add('a',index===4?'Συζήτησε τον τεχνικό έλεγχο':'Δες την υπηρεσία','flow-action');a.href=s[4];
  if(s[4].startsWith('https:')){a.target='_blank';a.rel='noopener';a.setAttribute('aria-label','Δες την υπηρεσία '+s[0]+' — νέα καρτέλα');}
 }
 function selectGoal(key){
  goal=key;const g=goals[key];
  root.dataset.selectedGoal=key;
  root.querySelector('[data-service="1"] span').textContent=key==='rent'?'Εκτίμηση μισθώματος':services[1][0];
  root.querySelectorAll('[data-goal]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.goal===key)));
  root.querySelector('[data-goal-caption]').textContent=g.label;
  root.querySelectorAll('[data-service]').forEach(b=>b.classList.toggle('is-muted',!g.active.includes(Number(b.dataset.service))));
  root.querySelectorAll('[data-flow-line]').forEach(p=>p.classList.toggle('is-muted',!g.active.includes(Number(p.dataset.flowLine))));
  const list=root.querySelector('[data-flow-steps]');list.replaceChildren(...g.steps.map(t=>{const li=document.createElement('li');li.textContent=t;return li}));
  root.querySelector('[data-flow-contact]').href='/el/epikoinonia/?kind=plan&journey='+encodeURIComponent(key);
  if(key==='rent'){
   root.querySelectorAll('[data-service]').forEach(b=>b.setAttribute('aria-pressed','false'));
   root.querySelectorAll('[data-flow-line]').forEach(p=>p.classList.remove('is-selected'));
   detail.innerHTML='<p class="flow-kicker">Οι υπηρεσίες για την ενοικίασή σου</p><h3>Θέλω να το νοικιάσω</h3><p>Από την εκτίμηση του μισθώματος μέχρι τη μίσθωση και τη διαχείριση. Αν χρειάζεται, οργανώνουμε και την προετοιμασία του ακινήτου σου.</p><ul><li>Εκτίμηση μισθώματος</li><li>Μελέτη και ανακαίνιση, αν χρειάζεται</li><li>Ρεύμα και συνδέσεις, όπου χρειάζεται</li><li>Μίσθωση και προαιρετική διαχείριση</li></ul><a class="flow-action" href="/el/epikoinonia/?kind=plan&amp;journey=rent">Συζήτησε την ενοικίαση του ακινήτου σου</a>';
  }else showService(key==='renovate'?5:key==='sell'?1:0);
 }
 root.querySelectorAll('[data-service]').forEach(b=>b.addEventListener('click',()=>showService(Number(b.dataset.service))));
 root.querySelectorAll('[data-goal]').forEach(b=>b.addEventListener('click',()=>selectGoal(b.dataset.goal)));
 let inView=false;function motion(){root.classList.toggle('is-visible',inView&&!document.hidden)}
 const observer=new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;motion()},{threshold:.12});observer.observe(root);document.addEventListener('visibilitychange',motion);
});
