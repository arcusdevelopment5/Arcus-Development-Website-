# Instructions for coding agents (Codex, Claude, others)

This repository is the **live website https://arcusdevelopment.gr** of ARCUS DEVELOPMENT Ε.Ε.
Every merge into `main` is deployed to production automatically by Vercel. Work carefully.

Read this file completely before changing anything. If a request conflicts with a rule here,
stop and ask the person you work for; do not work around the rule.

## 1. The stack (do not change it)

- **Next.js 16 on Vercel**, Node 22 (`.nvmrc`), npm. Region fra1, set in `vercel.json`.
- The pages are **pre-built HTML**: Python scripts write `site/pages/*.html` and `site/pages.json`,
  and `app/[[...path]]/route.ts` serves them as static pages.
- The contact form sends an **e-mail through Resend** to info@arcusdevelopment.gr. Attachments go to
  **private Vercel Blob** storage and are deleted after the e-mail is sent. There is **no database
  and no admin page**.

**Never add or bring back** any of these. They were removed on purpose and do not run on Vercel:
vinext, Vite, wrangler, Cloudflare Workers / D1 / R2, drizzle, the OpenAI "Sites" scaffolding
(`.openai/`, `scripts/vite/`, `scripts/connector-preview/`, `worker/`, sites-env scripts),
`/el/admin` or any login, the shadcn `components/ui` kit, Tailwind. If your tooling generates
them, delete them before committing.

Do not add npm packages, analytics, tracking, chat widgets or external scripts without approval.

## 2. Where things live

| You want to change | Edit this | Then |
|---|---|---|
| Page text, page structure, the header and menus | `scripts/author-site.py` (+ `company_story.py`, `one_stop_journey.py`, `project_portfolio.py`, `plan_transition.py`) | `npm run content` |
| Project data (portfolio) | `site/data/drive-projects.json` | `npm run content` |
| One Stop Shop services | `site/data/one-stop-shop.json` | `npm run content` |
| Footer source | `components/footer.html` (some footer links are adjusted in `author-site.py`) | `npm run content` |
| Company pages from the old site | `site/legacy/*.html` | `npm run content` |
| Design and interactions | `public/*.css`, `public/*.js` | nothing |
| Images, fonts, logos | `public/assets/` | nothing |
| Redirects (old or removed URLs) | `next.config.ts` → `aliases` | nothing |

**Never edit generated files by hand:** `site/pages/*.html`, `site/pages.json`,
`components/header.html`, `components/footer-current.html`, `public/blob-upload.js`. They are overwritten by `npm run content`
or the build. **Do commit** the regenerated `site/pages/` and `site/pages.json` with your change,
because the build serves the committed copies.

### Adding, renaming or removing a page
- Add it in `scripts/author-site.py` with `page(slug, title, description, body)`. The slug
  `erga--name` becomes `/el/erga/name`.
- When a page is removed or renamed, add it to the `retired` list in `author-site.py` **and** add a
  redirect in `next.config.ts` to the closest live page. Never leave a public URL returning 404.
- The sitemap and robots.txt are generated automatically (`app/sitemap.ts`, `app/robots.ts`).
  Don't create `public/sitemap.xml` or `public/robots.txt`.

## 3. Rules for the content

- **Facts only.** Never invent square metres, dates, durations, prices, testimonials, ratings,
  certificates or client names. Never infer figures from photos. If something is missing, ask.
- **Greek capitals take no τόνος.** Write caps by hand without accents
  (ΕΠΙΚΟΙΝΩΝΙΑ, not ΕΠΙΚΟΙΝΩΝΊΑ). Don't add new CSS `text-transform: uppercase` for Greek text (it produces accented capitals).
- Use the site's existing tone: Greek, second person singular (εσύ), short sentences.
- Real images only. Don't present reference/stock photos as Arcus projects.
- Every image needs `alt` text, `width` and `height`.

## 4. Legal parts: do not change without approval

These are approved by the company. Change them only when you are asked to, and say so in the PR:
- `/el/aporrito` (privacy notice). **If you change what the form collects, where data goes, add a
  cookie, analytics or a new external service, the privacy page must be updated in the same PR.**
- `/el/eggyisi-ypostirixi` (2-year warranty and its exclusions).
- The footer line `© ARCUS DEVELOPMENT Ε.Ε. · ΑΦΜ 802211949 · Αρ. ΓΕΜΗ 172215306000` and the
  privacy link. Greek law requires the ΓΕΜΗ number on the website.
- Analytics (GA4, GTM, pixels) need a cookie-consent banner first. Don't add them without one.

## 5. Code you should not touch without approval

`app/api/` (form and uploads), `lib/` (validation, e-mail, site config), `client/blob-upload.ts`,
`app/robots.ts`, `app/sitemap.ts`, `app/[[...path]]/route.ts`, `vercel.json`, `package.json`.
The form fields in the contact page must stay in sync with `lib/inquiry-validation.mjs`; if you
need a new field, ask.

Environment variables live in Vercel (see `.env.example`), never in the repository. Never commit
`.env*`, `.vercel/`, `__pycache__/`, `node_modules/` or `.next/`. Never print or paste API keys.

## 6. Before you open a PR

Run all of these. All must pass:

```bash
npm install
npm run content   # needs Python 3 and uv (https://docs.astral.sh/uv/)
npm test
npm run lint
npm run build
```

Then check locally with `npm run dev` (http://localhost:3000): the pages you changed, on desktop and
at 375 px phone width, with no horizontal scroll and no console errors.

## 7. Pull requests

- Branch from the latest `main`. One topic per PR. Never push to `main` directly.
- The PR description says, in plain words: what changed, which pages, why, and what you checked.
  List anything you could not verify.
- Vercel posts a **preview link** on the PR. Check the change there before asking for a merge.
- Merges are done by Arcus as **arcusdevelopment5** with a **merge commit** (not squash).
- Don't mark a PR "do not merge" for routine work; say clearly if it is a draft.

## 8. How the form works (for reference)

1. The browser validates the form (`public/site.js`). If there are attachments, it uploads them
   to private Blob storage through `/api/uploads` (`public/blob-upload.js`, built from
   `client/blob-upload.ts`).
2. `POST /api/inquiries` checks the origin, the honeypot field, every field and each file's real
   type (JPG/PNG/WebP/PDF, up to 3 files of 8 MB), then sends one e-mail through Resend to
   `CONTACT_TO_EMAIL` with Reply-To set to the customer. The files are attached and then deleted.
3. The visitor sees a reference code such as `AD-7K3QF9`, which is also in the e-mail subject.

Without `RESEND_API_KEY`, local development only prints the e-mail in the terminal; nothing is sent.
