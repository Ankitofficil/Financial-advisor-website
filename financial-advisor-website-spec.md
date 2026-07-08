# Financial Advisor Website — Build Spec for Claude Code

> **How to use this file:** Open your project folder in Claude Code and run:
> `claude` then paste: *"Read financial-advisor-website-spec.md and build the site described. Work through it phase by phase, and stop after each phase for me to review."*
> Keep this file in the repo root so Claude Code can re-read it any time.

---

## 1. Project Overview

Build a **multi-page marketing website** for an independent financial advisor / wealth-management practice. The goal is to convert visitors into booked consultations while projecting trust, competence, and calm.

**Primary audience:** Pre-retirees and professionals (40–65) with investable assets, evaluating whether to hire an advisor.
**Primary conversion goal:** Book a free intro call (a "Schedule a Consultation" CTA on every page).
**Secondary goals:** Newsletter signup, downloading a guide, reading insight articles.

**Tone:** Professional, reassuring, understated. Not flashy or "salesy." Think private-bank restraint, not crypto-hype.

---

## 2. Tech Stack

Use a modern, static-friendly stack that's easy to deploy:

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion (scroll reveals, page transitions) + CSS for micro-interactions
- **Icons:** lucide-react
- **Fonts:** Self-hosted via `next/font` (see design system)
- **Forms:** Client-side validation; wire the contact form to a placeholder handler (`/api/contact`) with a TODO for the real email/CRM integration
- **Deploy target:** Vercel (include a short deploy note in the README)

If the user prefers plain HTML/CSS/JS instead, adapt — but default to the above.

---

## 3. Use Skills

Before writing any code, **check for and read the relevant Skills** available in this environment (e.g. `frontend-design` for design tokens, typography, and styling conventions; any document skills if generating downloadable PDFs/guides). Read the SKILL.md first, then follow its guidance. Do not skip this step — the skills encode environment-specific constraints that improve output quality.

---

## 4. Pages (Multi-Page Structure)

Build these as distinct routes with shared header/footer:

1. **Home (`/`)** — Hero with headline + CTA, trust bar (credentials/logos), 3-step "how we work," services teaser, testimonial, insights teaser, final CTA.
2. **About (`/about`)** — Advisor bio, photo, fiduciary/philosophy statement, credentials (CFP®, etc.), team (if any), "why independent."
3. **Services (`/services`)** — Retirement planning, investment management, tax-efficient strategies, estate planning, insurance review. Each as a card that expands or links to detail.
4. **Process (`/process`)** — A visual step-by-step of the client journey (Discovery → Plan → Implement → Review). Good candidate for scroll-triggered animation.
5. **Insights / Blog (`/insights`)** — Article listing grid + at least 2 sample article pages (`/insights/[slug]`). Use MDX or a simple data file.
6. **Contact (`/contact`)** — Consultation form (name, email, phone, "how can we help"), office info, map placeholder, and the scheduling CTA.

**Global:** Sticky header with logo + nav + prominent "Schedule a Consultation" button. Footer with nav, ADV/disclosure links, social, and a compliance disclaimer block.

---

## 5. Design System (Professional Theme)

Aim for a refined, editorial-corporate look. Avoid generic Bootstrap/template vibes.

**Color palette (define as CSS variables / Tailwind theme tokens):**
- Primary / ink: deep navy `#0F2A43`
- Secondary: slate blue `#1E3A5F`
- Accent: muted gold `#C6A15B` (used sparingly — CTAs, underlines, dividers)
- Surface: warm off-white `#FAF8F5`
- Card / elevated: `#FFFFFF`
- Text muted: `#5A6B7B`
- Success/positive (for subtle "growth" moments): `#2E7D5B`

**Typography:**
- Headings: a serif with authority (e.g. **Fraunces**, **Source Serif 4**, or **Playfair Display** — pick one and commit)
- Body/UI: a clean sans (e.g. **Inter** or **Söhne**-alike; use **Inter**)
- Establish a clear type scale; headings are large and confident, body is comfortable (16–18px, ~1.6 line-height).

**Layout & feel:**
- Generous whitespace, max content width ~1200px, strong vertical rhythm.
- Subtle depth: soft shadows, 1px hairline borders in navy at low opacity, rounded-`lg` corners.
- Photography: use tasteful placeholder imagery (grayscale-to-color on hover is a nice touch). Note where the client should swap in real photos.
- No gradients-gone-wild, no neon. Gold is a garnish, not the main dish.

---

## 6. Animation

Add motion that feels **premium and purposeful**, never distracting. Respect `prefers-reduced-motion` — disable non-essential animation when set.

Include:
- **Page load:** gentle fade + slight upward translate on hero content (staggered).
- **Scroll reveals:** sections fade/slide in as they enter the viewport (Framer Motion `whileInView`, once: true).
- **Process page:** step-by-step timeline that animates in sequence as the user scrolls.
- **Micro-interactions:** button hover lift + accent underline draw; nav link underline animation; card hover elevation.
- **Number count-up:** for any stats (e.g. "$XXM assets guided," "XX years experience") animate counting up when scrolled into view.
- **Header:** subtle shrink / background-blur on scroll.

Keep durations 200–600ms, ease-out. Motion should read as "calm confidence," not "look at me."

---

## 7. Mobile Optimization

Design **mobile-first**, then scale up. Requirements:

- Responsive across 360px → 1440px+. Test at 375px, 390px, 768px, 1280px.
- Hamburger menu on mobile with an accessible slide-in drawer; CTA stays visible.
- Tap targets ≥ 44px; no hover-only interactions that break on touch.
- Fluid typography (clamp) so headings don't overflow on small screens.
- Images: `next/image`, responsive sizes, lazy loading below the fold.
- No horizontal scroll anywhere. Forms are thumb-friendly with correct input types (`type="tel"`, `type="email"`).
- Sticky bottom CTA bar on mobile is acceptable if it doesn't obscure content.

---

## 8. Screenshot-Driven Iteration (Important Workflow)

After building each major page, **take screenshots and critique your own work, then improve it.** Do this in a loop:

1. Run the dev server (`npm run dev`).
2. Use a headless browser (Playwright — install if needed) to capture screenshots at **mobile (390px)** and **desktop (1280px)** widths for each page. Save them to a `/screenshots` folder.
3. Look at each screenshot and evaluate against this checklist:
   - Visual hierarchy clear? Is the eye pulled to the CTA?
   - Spacing consistent? Any cramped or awkward gaps?
   - Alignment and grid holding up? Any overflow or clipping?
   - Does it look bespoke and professional, or templated?
   - Mobile: readable, tappable, no overflow?
4. Make concrete fixes based on what you see, then re-screenshot to confirm.
5. Repeat until it genuinely looks polished. Show me the before/after screenshots when you present each phase.

Example Playwright snippet to adapt:
```js
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  for (const [name, width] of [['mobile', 390], ['desktop', 1280]]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await page.goto('http://localhost:3000/');
    await page.screenshot({ path: `screenshots/home-${name}.png`, fullPage: true });
    await page.close();
  }
  await browser.close();
})();
```

---

## 9. Content Guidance

Write realistic placeholder copy (not lorem ipsum) so the site feels real and the client can edit lightly:

- **Hero headline options:** "Planning that puts your goals first." / "Clarity for the next chapter of your financial life."
- Keep sentences plain and jargon-light. Explain the fiduciary difference simply.
- Include 2–3 short testimonials (mark clearly as sample/placeholder).
- Two sample insight articles (~400–600 words each): e.g. "Should you pay off your mortgage before retiring?" and "The three tax buckets every retiree should understand."
- Every claim about performance/returns must be generic and compliant — no specific promises.

---

## 10. Compliance & Trust (Do Not Skip)

Financial advisor sites have regulatory expectations. Include:

- A **footer disclaimer block**: advisory services offered through [Firm], investing involves risk including loss of principal, past performance ≠ future results, this site is not investment advice, and a placeholder link to Form ADV / disclosures.
- Placeholder links: Privacy Policy, Terms, ADV Part 2, Disclosures.
- No guaranteed-return language anywhere.
- Clear "not a solicitation in states where not registered" line (placeholder).
- Add `TODO:` comments where the client must insert real firm name, CRD number, registrations, and real disclosures.

*(These are placeholders to be reviewed by the firm's compliance/legal — note that clearly.)*

---

## 11. Accessibility & Performance

- Semantic HTML, proper heading order, alt text on images, labeled form fields, visible focus states.
- Color contrast meets WCAG AA (check gold-on-white — darken if needed for text).
- Lighthouse targets: Performance ≥ 90, Accessibility ≥ 95 on the home page.
- Optimize images, avoid layout shift, lazy-load offscreen media.

---

## 12. Build Phases (Work Through in Order — Pause After Each)

1. **Scaffold** — Next.js + Tailwind + fonts + design tokens + shared header/footer. Screenshot the shell.
2. **Home page** — full build, animate, screenshot-iterate.
3. **About + Services + Process** — build, animate, screenshot-iterate.
4. **Insights (listing + 2 articles)** — build, screenshot-iterate.
5. **Contact + form** — build, validate, screenshot-iterate.
6. **Mobile polish pass** — screenshot every page at 390px, fix issues.
7. **A11y + performance pass** — run Lighthouse, fix, and write the README (setup + deploy + "where to add real content/compliance").

---

## 13. Definition of Done

- [ ] All 6 page types build and route correctly with shared nav/footer.
- [ ] Professional theme applied consistently via design tokens.
- [ ] Animations present, purposeful, and `prefers-reduced-motion`-safe.
- [ ] Fully responsive; no horizontal scroll; verified via screenshots at 390px & 1280px.
- [ ] Screenshot-iteration loop actually performed, with before/after shown.
- [ ] Compliance disclaimer + `TODO:` placeholders in place.
- [ ] Lighthouse Perf ≥ 90, A11y ≥ 95 on home.
- [ ] README with run + deploy instructions and a "content to replace" checklist.

---

*Deliverable: a clean, deployable, professional multi-page financial-advisor website that looks bespoke, animates tastefully, works beautifully on mobile, and is iterated against real screenshots.*
