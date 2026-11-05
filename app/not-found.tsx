export const metadata = { title: 'Η σελίδα δεν βρέθηκε | Arcus Development', robots: { index: false } };

export default function NotFound() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', maxWidth: 560, margin: '18vh auto', padding: '0 16px' }}>
      <h1>Η σελίδα δεν βρέθηκε.</h1>
      <p>
        {/* The site pages are served by a route handler, not Next pages, so a plain link is right. */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/el">Επιστροφή στην Arcus Development</a>
      </p>
    </main>
  );
}
