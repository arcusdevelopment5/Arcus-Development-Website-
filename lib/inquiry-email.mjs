// Builds the e-mails for a validated enquiry. Pure functions, so they are unit-tested.

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export const INTENT_LABEL = { home: 'Κατοικία', investment: 'Επένδυση', support: 'Υποστήριξη (after-sales)' };
export const TIMELINE_LABEL = { now: 'Άμεσα', '1-3': 'Σε 1–3 μήνες', later: 'Αργότερα' };

/** Short human reference shown to the customer and used in the subject, e.g. AD-7K3QF9. */
export function referenceFrom(idempotency) {
  let h = 2166136261;
  for (const ch of idempotency) h = Math.imul(h ^ ch.charCodeAt(0), 16777619) >>> 0;
  return 'AD-' + h.toString(36).toUpperCase().padStart(6, '0').slice(-6);
}

export function officeEmail(c, ref, files = []) {
  const rows = [
    ['Κωδικός', ref],
    ['Τύπος', INTENT_LABEL[c.intent] || c.intent],
    ['Ονοματεπώνυμο', c.name],
    ['Τηλέφωνο', c.phone],
    ['Email', c.email],
    ['Περιοχή', c.area],
    ['Εμβαδόν', c.sqm ? `${c.sqm} m²` : ''],
    ['Χρονοδιάγραμμα', TIMELINE_LABEL[c.timeline] || ''],
    ['Περιγραφή', c.description],
    ['Συνημμένα', files.map((f) => f.name).join(', ')],
    ['Σελίδα', c.source],
  ].filter(([, v]) => v);
  const subject = `Νέο αίτημα ${INTENT_LABEL[c.intent] || ''} ${ref}: ${c.name}, ${c.area}`.replace(/\s+/g, ' ');
  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n');
  const html = `<div style="font-family:Arial,sans-serif;font-size:15px;color:#1d1d1b">
<h2 style="margin:0 0 12px">Νέο αίτημα από το arcusdevelopment.gr</h2>
<table cellpadding="6" style="border-collapse:collapse">${rows
    .map(([k, v]) => `<tr><td style="color:#6b6b66;vertical-align:top;white-space:nowrap">${esc(k)}</td><td style="white-space:pre-wrap">${esc(v)}</td></tr>`)
    .join('')}</table>
${c.email ? '<p style="color:#6b6b66">Πάτα «Απάντηση» για να γράψεις απευθείας στον πελάτη.</p>' : ''}</div>`;
  return { subject, text, html };
}

export function customerEmail(c, ref) {
  const support = c.intent === 'support';
  const subject = `Λάβαμε το αίτημά σου (${ref}) | Arcus Development`;
  const lines = [
    `Γεια σου ${c.name},`,
    support
      ? 'λάβαμε το αίτημα υποστήριξης και θα επικοινωνήσουμε μαζί σου σύντομα.'
      : 'ευχαριστούμε για το ενδιαφέρον. Λάβαμε το αίτημά σου και θα επικοινωνήσουμε μαζί σου σύντομα για το επόμενο βήμα.',
    `Κωδικός αιτήματος: ${ref}`,
    'Για οτιδήποτε χρειαστείς, απάντησε σε αυτό το email ή κάλεσε στο 2310 445 935.',
    'Arcus Development\nΤσαλουχίδη 54, 2ος όροφος, Θεσσαλονίκη',
  ];
  const text = lines.join('\n\n');
  const html = `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.5;color:#1d1d1b">${lines
    .map((l) => `<p style="white-space:pre-line">${esc(l)}</p>`)
    .join('')}</div>`;
  return { subject, text, html };
}
