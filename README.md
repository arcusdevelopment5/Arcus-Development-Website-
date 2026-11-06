# Arcus Development

Ελληνικός ιστότοπος για δύο υπηρεσίες: ολική ανακαίνιση διαμερίσματος για κατοικία και επενδυτική ανακαίνιση. Περιλαμβάνει 18 σελίδες, πραγματικά έργα με πριν/μετά, εταιρικές υποσελίδες, διαδικασία, εγγύηση και λειτουργική φόρμα αιτήματος.

Η έκδοση παραμένει ιδιωτική για έλεγχο (noindex) μέχρι το launch. Η κατάσταση κάθε απαίτησης καταγράφεται στο [BLUEPRINT_STATUS.md](BLUEPRINT_STATUS.md).

## Ανάπτυξη

Next.js στο Vercel. Απαιτούνται Node 22.13+ (`.nvmrc`), Python 3 και [uv](https://docs.astral.sh/uv/) για το `npm run content`.

```bash
npm install
npm run content   # μόνο όταν αλλάζει το περιεχόμενο (scripts/author-site.py)
npm test
npm run dev       # http://localhost:3000
```

Οι σελίδες είναι έτοιμο HTML στο `site/pages.json` και παράγονται στατικά στο build. Χωρίς `RESEND_API_KEY` η φόρμα δουλεύει τοπικά και απλώς τυπώνει το email στο terminal. Οι μεταβλητές περιβάλλοντος περιγράφονται στο `.env.example`.

## Πηγές επεξεργασίας

- `scripts/author-site.py`: περιεχόμενο νέων σελίδων, κοινό header, συνδέσεις footer.
- `site/legacy/`: εγκεκριμένες εταιρικές σελίδες από την προηγούμενη έκδοση.
- `site/data/projects.json`: επαληθευμένα στοιχεία έργων.
- `site/data/project-provenance.json`: πηγές, video timestamps και όρια των διαθέσιμων στοιχείων.
- `components/footer.html`: διατηρημένο footer με πέντε λογότυπα και κάτοψη.
- `public/site.css`, `public/site.js`: νέο design και αλληλεπιδράσεις.
- `scripts/build-pages.py`: compiler, sitemap/robots. Τα `site/pages/` και `site/pages.json` παράγονται με `npm run content`.
- `app/[[...path]]/route.ts`: σελίδες και 301 redirects παλιών διευθύνσεων.
- `lib/inquiries-server.ts`, `app/api/`, `db/`, `drizzle/`: αποθήκευση και προστατευμένη διαχείριση.

Το `python3 scripts/sync-layout.py` παραμένει συμβατό entry point αναγέννησης.

## Φόρμα επικοινωνίας

Η `/el/epikoinonia` δέχεται κατοικία/επένδυση και `?kind=support` για υποστήριξη. Το `app/api/inquiries` ελέγχει τα στοιχεία και στέλνει email μέσω **Resend** στο `CONTACT_TO_EMAIL`, με Reply-To τον πελάτη. Τίποτα δεν αποθηκεύεται σε βάση.

Τα συνημμένα (έως 3 JPG/PNG/WebP/PDF των 8 MB) ανεβαίνουν από τον browser σε **ιδιωτικό Vercel Blob** (`app/api/uploads`, `client/blob-upload.ts`), ελέγχονται στον server (file signatures), επισυνάπτονται στο email και διαγράφονται αμέσως μετά.

Προστασία: same-origin, honeypot, προαιρετικό Cloudflare Turnstile (`TURNSTILE_SITE_KEY`/`TURNSTILE_SECRET_KEY`), idempotency key στο Resend ώστε μια επανάληψη να μη στέλνει δεύτερο email. Με `CONTACT_CONFIRMATION=on` ο πελάτης λαμβάνει και επιβεβαίωση.

## Δημόσια κυκλοφορία

Noindex και robots παραμένουν ενεργά για το ιδιωτικό review. Το launch γίνεται με `SITE_INDEXING=on` στο production του Vercel και νέο deploy. Πριν το public launch απαιτούνται πραγματικό domain/canonicals, τελικά στοιχεία υπευθύνου επεξεργασίας και διατήρησης δεδομένων, εγκεκριμένοι όροι εγγύησης και analytics/consent configuration. Τα `arcus:analytics` events/dataLayer hooks δεν αποτελούν ενεργή σύνδεση GA4. Δεν φορτώνονται εξωτερικά analytics.

Δεν παρουσιάζονται reference φωτογραφίες ως έργα, ενδεικτική κάτοψη ως μελέτη, ανύπαρκτες μαρτυρίες, υποσχέσεις απόδοσης επένδυσης ή ανεπιβεβαίωτα εμβαδά.
