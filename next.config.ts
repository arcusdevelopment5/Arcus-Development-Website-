import type { NextConfig } from "next";

// Old WordPress-era and previous-version addresses → new pages (permanent).
const aliases: Record<string, string> = {
  "/": "/el",
  "/index.html": "/el",
  "/company.html": "/el/etaireia",
  "/philosophy.html": "/el/filosofia",
  "/faq.html": "/el/sychnes-erotiseis",
  "/glossary.html": "/el/techniko-lexiko",
  "/careers.html": "/el/kariera",
  "/office.html": "/el/grafeio",
  "/el/admin": "/el",
  // Live WordPress pages (2026-11) that carry meaning; theme demo pages are left to 404.
  "/epikoinonia": "/el/epikoinonia",
  "/contact-2": "/el/epikoinonia",
  "/contact-3": "/el/epikoinonia",
  "/about-us": "/el/etaireia",
  "/about-us-1": "/el/etaireia",
  "/about-us-3": "/el/etaireia",
  "/about-us-4": "/el/etaireia",
  "/arcus-team": "/el/etaireia",
  "/the-team": "/el/etaireia",
  "/meet-the-team": "/el/etaireia",
  "/our-process": "/el/diadikasia",
  "/our-services": "/el",
  "/portfolio-:slug": "/el/erga",
  "/single-portfolio-:n": "/el/erga",
};

const nextConfig: NextConfig = {
  trailingSlash: false,
  poweredByHeader: false,
  async redirects() {
    return Object.entries(aliases).map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
