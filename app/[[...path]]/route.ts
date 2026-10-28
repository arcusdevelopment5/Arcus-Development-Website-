import pages from '../../site/pages.json';
const aliases: Record<string,string> = {'/':'/el','/index.html':'/el','/company.html':'/el/etaireia','/philosophy.html':'/el/filosofia','/faq.html':'/el/sychnes-erotiseis','/glossary.html':'/el/techniko-lexiko','/careers.html':'/el/kariera','/office.html':'/el/grafeio'};
export function GET(request: Request) {
 const url = new URL(request.url); const path = url.pathname.replace(/\/$/,'') || '/';
 if (aliases[path]) return Response.redirect(new URL(aliases[path]+url.search,url),301);
 const html=(pages as Record<string,string>)[path];
 if (!html) return new Response('<!doctype html><html lang="el"><meta charset="utf-8"><title>Η σελίδα δεν βρέθηκε</title><h1>Η σελίδα δεν βρέθηκε.</h1><a href="/el">Επιστροφή στην Arcus Development</a></html>',{status:404,headers:{'Content-Type':'text/html; charset=utf-8'}});
 return new Response(html,{headers:{'Content-Type':'text/html; charset=utf-8','X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin','X-Robots-Tag':'noindex, nofollow'}});
}
