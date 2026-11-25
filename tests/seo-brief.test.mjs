// Acceptance copy from the mandatory IT brief dated 25 November 2026.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const pages = JSON.parse(fs.readFileSync('site/pages.json', 'utf8'));
const text = html => html.replace(/<[^>]+>/g, ' ').replaceAll('&amp;', '&').replace(/\s+/g, ' ').trim();
const firstLede = html => text(html.match(/<p class="lede">([\s\S]*?)<\/p>/)?.[1] || '');
const homeIntro = "Σχεδιάζουμε και ανακαινίζουμε κατοικίες στη Θεσσαλονίκη. Δες πώς αλλάζει η διαρρύθμιση ενός πραγματικού διαμερίσματος ή μίλησέ μας για τον χώρο που θέλεις να ανακαινίσεις.";
const required = [
  [
    "/el/oliki-anakainisi-diamerismatos",
    "Title προς δημοσίευση",
    "Ολική ανακαίνιση διαμερίσματος στη Θεσσαλονίκη – Arcus Development"
  ],
  [
    "/el/ependytiki-anakainisi-diamerismatos",
    "Title προς δημοσίευση",
    "Επενδυτική ανακαίνιση και διαχωρισμός διαμερίσματος – Arcus Development"
  ],
  [
    "/el/oliki-anakainisi-diamerismatos",
    "Meta description",
    "Δες πώς σχεδιάζουμε την ολική ανακαίνιση μιας κατοικίας, από την αποτύπωση και τις επιλογές υλικών μέχρι την οργάνωση εργασιών και την παράδοση."
  ],
  [
    "/el/ependytiki-anakainisi-diamerismatos",
    "Meta description",
    "Εξέτασε τις δυνατότητες αξιοποίησης του διαμερίσματός σου. Η ομάδα μελετά τη διαρρύθμιση, τις υποδομές και τις προϋποθέσεις για πιθανό διαχωρισμό."
  ],
  [
    "/el/oliki-anakainisi-diamerismatos",
    "H1",
    "Ολική ανακαίνιση κατοικίας στη Θεσσαλονίκη"
  ],
  [
    "/el/ependytiki-anakainisi-diamerismatos",
    "H1",
    "Ανακαίνιση διαμερίσματος για επενδυτική αξιοποίηση"
  ],
  [
    "/el/oliki-anakainisi-diamerismatos",
    "Εισαγωγή κάτω από H1",
    "Τι θα ήθελες να λειτουργεί καλύτερα στο σπίτι σου; Αποτυπώνουμε τον χώρο και συζητάμε τις ανάγκες σου. Στη μελέτη βλέπεις τις επιλογές διαρρύθμισης και τις εργασίες που χρειάζεται κάθε επιλογή."
  ],
  [
    "/el/ependytiki-anakainisi-diamerismatos",
    "Εισαγωγή κάτω από H1",
    "Πριν αποφασίσεις πώς θα αξιοποιήσεις το ακίνητο, εξετάζουμε την υπάρχουσα κάτοψη και τις υποδομές. Όταν ζητάς διαχωρισμό, ο αρμόδιος μηχανικός ελέγχει τι επιτρέπεται και ποιες εγκρίσεις απαιτούνται."
  ],
  [
    "/el/oliki-anakainisi-diamerismatos",
    "H2 πριν από παράδειγμα έργου",
    "Από την παλιά κουζίνα στη νέα διαρρύθμιση"
  ],
  [
    "/el/ependytiki-anakainisi-diamerismatos",
    "H2 πριν από παράδειγμα έργου",
    "Πώς ένα διαμέρισμα διαμορφώθηκε σε τρεις κατοικίες"
  ],
  [
    "/el/oliki-anakainisi-diamerismatos",
    "Σύνδεσμος παραδείγματος",
    "Δες την ανακαίνιση στη Γρηγορίου Παλαμά → `/el/erga/grigoriou-palama-7`"
  ],
  [
    "/el/ependytiki-anakainisi-diamerismatos",
    "Σύνδεσμος παραδείγματος",
    "Δες τις κατόψεις του έργου Αθανασίου Διάκου → `/el/erga/athanasiou-diakou-16`"
  ],
  [
    "/el/oliki-anakainisi-diamerismatos",
    "Τελικό κουμπί προς `/el/epikoinonia#project-form`",
    "Περιέγραψε το σπίτι σου"
  ],
  [
    "/el/ependytiki-anakainisi-diamerismatos",
    "Τελικό κουμπί προς `/el/epikoinonia#project-form`",
    "Συζήτησε τις δυνατότητες του ακινήτου σου"
  ]
];
test('mandatory homepage introduction is preserved through design revisions', () => {
  assert.equal(firstLede(pages['/el']), homeIntro);
});
test('both service pages preserve the fourteen mandatory SEO copy and CTA requirements', () => {
  for (const [route, field, value] of required) {
    const html = pages[route];
    if (field === 'Εισαγωγή κάτω από H1') assert.equal(firstLede(html), value, route + field);
    else if (field === 'Title προς δημοσίευση') assert.equal(text(html.match(/<title>(.*?)<\/title>/)[1]), value);
    else if (field === 'H1') assert.equal(text(html.match(/<h1[^>]*>(.*?)<\/h1>/)[1]), value);
    else if (field === 'Meta description') assert.ok(html.includes('name="description" content="' + value + '"'));
    else if (field === 'Σύνδεσμος παραδείγματος') {
      const [label, rawHref] = value.split(' → ');
      const href = rawHref.replaceAll('`', '');
      assert.ok([...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)].some(m => m[1].includes('href="' + href + '"') && text(m[2]) === label), route + field);
    } else if (field.startsWith('Τελικό κουμπί')) {
      const closing = html.slice(html.indexOf('<section class="closing"'));
      assert.ok([...closing.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)].some(m => m[1].includes('href="/el/epikoinonia#project-form"') && text(m[2]) === value));
    } else assert.ok([...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].some(m => text(m[1]) === value));
  }
});
