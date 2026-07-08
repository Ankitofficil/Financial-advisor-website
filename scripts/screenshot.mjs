// Screenshot-driven iteration helper (spec §8).
// Usage: node scripts/screenshot.mjs [route ...]
//   Routes default to the full site. Captures mobile (390) + desktop (1280).
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const BASE = process.env.BASE_URL || "http://localhost:3000";
const OUT = "screenshots";
mkdirSync(OUT, { recursive: true });

const routes =
  process.argv.slice(2).length > 0
    ? process.argv.slice(2)
    : ["/", "/about", "/services", "/process", "/insights", "/insights/pay-off-home-loan-before-retiring", "/contact"];

const widths = [
  ["mobile", 390],
  ["desktop", 1280],
];

const slug = (r) => (r === "/" ? "home" : r.replace(/^\//, "").replace(/\//g, "-"));

const browser = await chromium.launch();
for (const route of routes) {
  for (const [name, width] of widths) {
    const page = await browser.newPage({
      viewport: { width, height: 900 },
      deviceScaleFactor: 2,
    });
    await page.goto(`${BASE}${route}`, { waitUntil: "networkidle" });
    // Trigger all whileInView reveals by scrolling through, then reset.
    await page.evaluate(async () => {
      const step = window.innerHeight * 0.8;
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 120));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(500);
    // For clean fullPage shots: neutralize sticky header, hide dev badge, and
    // force any not-yet-triggered scroll reveals to their visible state so a
    // single full-page capture shows every section.
    await page.addStyleTag({
      content: `
        header.sticky { position: relative !important; }
        nextjs-portal, [data-nextjs-toast], #__next-build-watcher { display: none !important; }
        [style*="opacity"] { opacity: 1 !important; }
        [style*="translate"], [style*="transform"] { transform: none !important; }
        .reveal, .reveal-item { opacity: 1 !important; transform: none !important; }
      `,
    });
    await page.waitForTimeout(200);
    const file = `${OUT}/${slug(route)}-${name}.png`;
    await page.screenshot({ path: file, fullPage: true });
    console.log("saved", file);
    await page.close();
  }
}
await browser.close();
