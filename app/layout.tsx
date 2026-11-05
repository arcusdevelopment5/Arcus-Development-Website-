// Only used by Next's own fallback pages; the site pages are complete HTML documents.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el">
      <body>{children}</body>
    </html>
  );
}
