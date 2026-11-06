import pages from '../site/pages.json';

export const SITE_URL = (process.env.SITE_URL || 'https://arcusdevelopment.gr').replace(/\/$/, '');

/**
 * Launch switch. Until SITE_INDEXING=on is set (production only), every page keeps
 * noindex and robots.txt blocks crawlers. Read at build time: redeploy after changing it.
 */
export const INDEXING = process.env.SITE_INDEXING === 'on' && process.env.VERCEL_ENV === 'production';

export const PAGES = pages as Record<string, string>;

const NOINDEX = '<meta name="robots" content="noindex,nofollow">';

export function renderPage(route: string) {
  let html = PAGES[route];
  if (!html) return null;
  if (INDEXING) html = html.replace(NOINDEX, '');
  const siteKey = process.env.TURNSTILE_SITE_KEY;
  if (siteKey && html.includes('id="project-form"')) {
    html = html.replace('</head>', `<meta name="turnstile-sitekey" content="${siteKey.replace(/[^\w-]/g, '')}"></head>`);
  }
  return html;
}
