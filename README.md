# Mahedi MarTech site (v1.2)

A second site focused on MarTech: digital marketing plus the websites marketing
runs on. React + Vite, GSAP, Lenis. No backend, no form, no API keys. Facts come
from `src/data.js` (copied from the developer portfolio) and `src/content.js`.
Nothing in it is invented: no results, percentages, budgets or testimonials.

## Run

```bash
npm install
npm run dev      # local dev
npm run build    # outputs to dist/
```

Do not run `npm audit fix` (it rewrites `package.json` to newer major versions).

## Deploy (as its own project, separate from the developer portfolio)

1. Create a new, empty GitHub repo (for example `mahedi-martech`) and push this folder to it.
2. Cloudflare: Workers & Pages, Create, Pages, Connect to Git, pick the new repo.
3. Build command `npm run build`, build output directory `dist`, root directory empty.
4. Save and deploy. Every push to `main` rebuilds the site.

`wrangler.jsonc` is only for the "Deploy command: npx wrangler deploy" style of
project; a normal Pages project ignores it. If you use that style, its `name`
must match the project name in the dashboard.

## What is on the page

Positioning comes from research into what MarTech specialist roles ask for (CMS
and website maintenance, CRM and marketing automation, integrations and data
capture, analytics, email, AI, and being the bridge between marketing and
engineering), matched against Mahedi's own record.

- Hero: "I build and connect the marketing stack", with the stack shown as four
  layers (Experience, Engagement, Data, Intelligence).
- "Marketing and the site it lands on": a chain diagram that draws itself as you
  scroll (channels and email, website, CRM, integrations, insight), then seven
  capability cards: web and CMS engineering, CRM and marketing automation,
  integrations and data, channels and email, analytics, SEO and performance, AI in
  marketing, and delivery, governance and security.
- "The stack I work with": every layer, its tools, and how each is held
  (Hands-on, Certified, Trained, Working knowledge) for quick scanning.
- Experience, latest role first, then the others (Bangla Tigers is one of them).
- Six live sites, 19 certificates grouped by what they cover, education,
  languages, contact.

## Edit the content

- `src/content.js`: headline, hero layers, the text and chips on each capability
  card (`BENTO`), the skills matrix and its levels (`MATRIX`), role points
  (`ROLE_POINTS`), which six sites are shown, which certificates are grouped where
  (`CERT_GROUPS`), and the link to the developer portfolio (`PORTFOLIO_URL`). The
  chain's node labels are in `src/components/System.jsx`.
- Levels in the matrix: Hands-on (used in work), Certified (certificate held),
  Trained (coursework or a lapsed certificate), Working knowledge (his own words).
  Only raise a level if it is true.
- `src/data.js`: roles, certificates (`issued` / `expires` as `YYYY-MM`), sites,
  contact details. Certificates are grouped by issuer in `CERT_GROUPS`.
- Bangla Tigers: add `period`, `startDate`, `endDate` and `location` to its entry in
  `src/data.js`, and more points in `ROLE_POINTS`, once confirmed.

## Look

- Dark on a first visit; the nav button toggles light and remembers the choice
  (stored as `mahedi-mt-theme`).
- `data-palette="violet"` in `index.html`; alternates `"ocean"` and `"gold"`.
- Fonts (Bricolage Grotesque, Inter, JetBrains Mono) are bundled; nothing loads
  from a font CDN. Motion respects `prefers-reduced-motion`.
