import type { MetadataRoute } from 'next';
import { INDEXING, SITE_URL } from '../lib/site';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  if (!INDEXING) return { rules: { userAgent: '*', disallow: '/' } };
  return { rules: { userAgent: '*', allow: '/', disallow: '/api/' }, sitemap: `${SITE_URL}/sitemap.xml` };
}
