# Meridian Wealth Partners — Financial Advisor Website

A multi-page marketing website for an independent, fee-only fiduciary financial-planning
practice. Built to convert visitors into booked consultations while projecting trust,
competence, and calm.

> **Important:** All firm details, bios, testimonials, statistics, and legal/compliance
> text on this site are **realistic placeholders**. Search the codebase for `TODO(client)`
> to find everything that must be replaced and reviewed by the firm's compliance/legal
> counsel before launch. See [Content & compliance checklist](#content--compliance-checklist).

---

## Tech stack

| Concern      | Choice                                            |
| ------------ | ------------------------------------------------- |
| Framework    | Next.js 16 (App Router) + TypeScript              |
| Styling      | Tailwind CSS v4 (`@theme` design tokens)          |
| Animation    | Framer Motion (drawer, timeline, count-up) + CSS  |
| Icons        | lucide-react (+ inline brand/decorative SVG)      |
| Fonts        | Self-hosted via `next/font` — Fraunces + Inter    |
| Forms        | Client-validated; `POST /api/contact` placeholder |
| Deploy       | Vercel (static + one dynamic API route)           |

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

---

## Project structure

```
app/
  layout.tsx            Root layout: fonts, header, footer, mobile CTA, metadata
  page.tsx              Home
  about/ services/ process/ contact/ insights/
  insights/[slug]/      Article pages (SSG)
  api/contact/route.ts  Placeholder form handler (wire to email/CRM)
  privacy/ terms/ disclosures/   Legal stubs (placeholder)
  icon.svg  sitemap.ts  robots.ts  not-found.tsx
components/
  Header, Footer, MobileDrawer, LegalStub
  home/     Hero, Stats, HowWeWork, ServicesTeaser, Testimonials, InsightsTeaser
  process/  Timeline (scroll-animated)
  insights/ ArticleBody, ReadingProgress
  contact/  ContactForm
  ui/       Container, Button, Reveal, CountUp, ServiceCard, ArticleCard, … (shared primitives)
lib/
  site.ts       Firm name, contact info, nav, CTA labels
  content.ts    Services, testimonials, stats, team, philosophy
  insights.ts   Article content (simple typed data model — no MDX needed)
scripts/
  screenshot.mjs  Playwright capture at mobile (390) + desktop (1280)
```

---

## Design system

Tokens live in [`app/globals.css`](app/globals.css) under `@theme`.

- **Color** — deep burgundy `#3B1220`, wine `#6B2237`, muted brass `#B08D3E` (garnish only) with a
  darkened `#7A6221` for brass **text** (WCAG-AA safe), warm cream `#FAF6F0`, positive green `#1F7A53`.
- **Type** — Fraunces (serif display) + Inter (body/UI), on a fluid `clamp()` scale.
- **Motif** — a gold "horizon line" rule and a bespoke meridian logo mark carried across pages.
- **Theme** — a single, deliberately-committed warm-paper light theme (private-bank restraint).

---

## Animation

Purposeful motion, all **`prefers-reduced-motion`-safe**:

- Hero: CSS staggered load (kept off the JS critical path for fast paint).
- Scroll reveals: IntersectionObserver + CSS transitions (no animation library on the critical path).
- Process page: scroll-driven timeline with a gold progress line (Framer `useScroll`).
- Count-up stats, reading-progress bar, button/card/nav micro-interactions.

---

## Accessibility & performance

- Semantic HTML, correct heading order, alt/aria text, labeled fields, visible focus states,
  skip-to-content link, focus management on form errors, scroll-locked accessible mobile drawer.
- Contrast meets WCAG AA (gold is used as text only in its darkened `#8A6D2F` form; the bright
  gold is reserved for dividers/borders/decoration).
- **Lighthouse (home):** Accessibility **100**, Best Practices **100**, SEO **100**.
  Performance measures very fast in the field (observed FCP/LCP ≈ **0.16 s**, CLS **0**); the
  Lighthouse *lab* score varies with the test machine's CPU/network throttling.

Re-check locally:

```bash
npm run build && npm run start          # serve production on :3000
npx lighthouse http://localhost:3000 --view
```

---

## Screenshot-driven iteration

Each page was captured at 390px and 1280px and refined against the screenshots.

```bash
npm run dev                             # in one terminal
node scripts/screenshot.mjs             # captures all pages → /screenshots
node scripts/screenshot.mjs "/about"    # or a specific route
```

(Requires Playwright: `npm i -D playwright && npx playwright install chromium`.)

---

## Deploy on Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import it at [vercel.com/new](https://vercel.com/new). Vercel auto-detects Next.js — no config needed.
3. Deploy. The site is static except `POST /api/contact`, which runs as a serverless function.

Before going live, set the real production domain in [`app/sitemap.ts`](app/sitemap.ts),
[`app/robots.ts`](app/robots.ts), and `metadataBase` in [`app/layout.tsx`](app/layout.tsx).

---

## Content & compliance checklist

Search for **`TODO(client)`** across the repo. The key items:

**Brand & content** — [`lib/site.ts`](lib/site.ts)

- [ ] Firm name, **CRD number**, address, phone, email, hours, social links
- [ ] Advisor & team names, bios, credentials, and **real photos** (replace `Portrait`
      placeholders with `next/image`; a `.photo-reveal` grayscale→color class is provided)
- [ ] Statistics on the home page (currently sample figures) — [`lib/content.ts`](lib/content.ts)
- [ ] Testimonials — must comply with the **SEC Marketing Rule** (consent, required
      disclosures, and whether compensation was provided) — [`lib/content.ts`](lib/content.ts)
- [ ] Insight articles — [`lib/insights.ts`](lib/insights.ts)

**Compliance & legal** — have all of this reviewed by compliance/legal

- [ ] Footer disclaimer block (risk of loss, past performance, not a solicitation, ADV link)
      — [`components/Footer.tsx`](components/Footer.tsx)
- [ ] Privacy Policy, Terms, ADV Part 2, Disclosures pages (currently stubs)
      — `app/privacy`, `app/terms`, `app/disclosures`
- [ ] Fee schedule / minimums on the Services page — [`app/services/page.tsx`](app/services/page.tsx)
- [ ] Per-article educational disclaimer wording — [`app/insights/[slug]/page.tsx`](app/insights/[slug]/page.tsx)
- [ ] Confirm no guaranteed-return language anywhere

**Integrations**

- [ ] Wire `POST /api/contact` to a real email/CRM (Resend/SendGrid/Postmark, Wealthbox/Redtail/…)
      and add rate limiting + spam protection — [`app/api/contact/route.ts`](app/api/contact/route.ts)
- [ ] Newsletter signup → email provider — [`components/ui/NewsletterSignup.tsx`](components/ui/NewsletterSignup.tsx)
- [ ] Embed a real scheduler (e.g. Calendly) on the Contact page
- [ ] Replace the Contact map placeholder with an embedded Google/Mapbox map
```
