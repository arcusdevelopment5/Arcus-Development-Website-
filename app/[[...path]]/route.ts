// Serves the pre-built HTML pages from site/pages.json (made by `npm run content`).
// Every page is generated at build time and served from the CDN.
import { PAGES, INDEXING, renderPage } from '../../lib/site';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(PAGES).map((route) => ({ path: route.split('/').filter(Boolean) }));
}

export async function GET(_request: Request, ctx: { params: Promise<{ path?: string[] }> }) {
  const { path = [] } = await ctx.params;
  const html = renderPage('/' + path.join('/'));
  if (!html) return new Response('Not found', { status: 404 });
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      ...(INDEXING ? {} : { 'X-Robots-Tag': 'noindex, nofollow' }),
    },
  });
}
