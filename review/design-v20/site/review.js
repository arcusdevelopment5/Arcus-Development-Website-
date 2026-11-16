(() => {
 const badge=document.createElement('div');badge.className='review-badge';badge.textContent='ΠΡΟΕΠΙΣΚΟΠΗΣΗ ΣΧΕΔΙΑΣΜΟΥ';document.body.append(badge);
 const form=document.querySelector('[data-preview-form]');
 if(!form)return;
 const params=new URLSearchParams(location.search);
 const intent=params.get('intent');
 const support=params.get('kind')==='support';
 const radios=[...form.querySelectorAll('[name="intent"]')];
 const radio=radios.find(x=>x.value===intent);if(radio)radio.checked=true;
 const names={'kolokotroni-14':'Κολοκοτρώνη 14','athanasiou-diakou-16':'Αθανασίου Διάκου 16','artemidos-37':'Αρτέμιδος 37','grigoriou-palama-7':'Γρηγορίου Παλαμά 7','soulioti-17':'Σουλιώτη 17','vyronos-37':'Βύρωνος 37','kanari-16':'Κανάρη 16','agiou-dimitriou-113':'Αγίου Δημητρίου 113'};
 const project=names[params.get('project')];
 if(project){const el=form.querySelector('.review-reference');el.hidden=false;el.textContent='Έργο που σε ενδιέφερε: '+project;}
 if(support){
  form.querySelector('.intent-options').hidden=true;radios.forEach(r=>{r.required=false;r.disabled=true;});
  form.elements.kind.value='support';
  document.querySelector('h1').textContent='Υποστήριξη μετά την παράδοση.';
  document.querySelector('.intro .lede').textContent='Περιέγραψε το ζήτημα και το ακίνητο που αφορά, για να οργανώσουμε την επικοινωνία μας.';
  form.querySelector('button[type="submit"]').textContent='Δοκιμή αιτήματος υποστήριξης →';
 }
 const status=form.querySelector('#form-status');
 form.addEventListener('input',()=>{form.elements.phone.setCustomValidity('');status.textContent='';});
 form.addEventListener('submit',e=>{
  e.preventDefault();
  const phone=form.elements.phone,email=form.elements.email;
  phone.setCustomValidity(!phone.value.trim()&&!email.value.trim()?'Συμπλήρωσε τηλέφωνο ή email.':'');
  if(!form.reportValidity())return;
  const files=[...form.elements.files.files];
  if(files.length>3||files.some(f=>f.size>8*1024*1024||!['image/jpeg','image/png','image/webp','application/pdf'].includes(f.type))){status.textContent='Επίλεξε έως 3 αρχεία JPG, PNG, WebP ή PDF, μέχρι 8 MB το καθένα.';status.focus();return;}
  status.textContent='Ο έλεγχος της φόρμας ολοκληρώθηκε. Αυτή είναι προεπισκόπηση: το αίτημα δεν αποστέλλεται και τα στοιχεία δεν αποθηκεύονται.';status.focus();
 });
})();
