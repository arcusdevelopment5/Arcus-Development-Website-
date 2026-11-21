// Carry the selected project/goal into the existing description field.
// Submission and validation remain in app.js and the production inquiry API.
(() => {
  const form = document.querySelector('#project-form');
  if (!form) return;
  const params = new URLSearchParams(location.search);
  if (params.get('kind') === 'support') return;
  const goals = {all:'Ολοκληρωμένο πλάνο υπηρεσιών',buy:'Να αγοράσω',sell:'Να πουλήσω',renovate:'Να ανακαινίσω',rent:'Να το νοικιάσω',owner:'Αξιοποίηση ακινήτου',invest:'Επενδυτικό πλάνο'};
  const projects = {'kolokotroni-14':'Κολοκοτρώνη','athanasiou-diakou-16':'Αθανασίου Διάκου','artemidos-37':'Αρτέμιδος','grigoriou-palama-7':'Γρηγορίου Παλαμά','soulioti-17':'Σουλιώτη','vyronos-37':'Βύρωνος','kanari-16':'Κανάρη','agiou-dimitriou-113':'Αγίου Δημητρίου'};
  const goal = goals[params.get('journey')];
  const project = projects[params.get('project')];
  const lines = [goal && 'Ο στόχος μου: '+goal+'.', project && 'Έργο που με ενδιαφέρει: '+project+'.'].filter(Boolean);
  const field = form.querySelector('[name="description"]');
  if (field && !field.value && lines.length) field.value = lines.join('\n')+'\n';
})();
