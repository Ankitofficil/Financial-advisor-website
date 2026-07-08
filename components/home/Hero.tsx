import { ArrowRight, CalendarClock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CTA_HREF, CTA_LABEL } from "@/lib/site";

/**
 * Server component. The load animation is pure CSS (`.hero-rise`) so the H1
 * (the LCP element) is present in the initial SSR HTML and paints immediately,
 * rather than being gated behind JS hydration. Reduced-motion is handled in CSS.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient background: soft navy wash + faint meridian arcs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="anim-float absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(107,34,55,0.07),transparent_70%)]" />
        <div
          className="anim-float absolute -left-32 bottom-[-160px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(176,141,62,0.07),transparent_70%)]"
          style={{ animationDelay: "-4.5s" }}
        />
        <svg
          className="anim-spin-slow absolute right-[-6%] top-[8%] hidden h-[520px] w-[520px] text-ink/[0.06] lg:block"
          viewBox="0 0 400 400"
          fill="none"
        >
          {[70, 120, 170, 200].map((r) => (
            <circle key={r} cx="200" cy="200" r={r} stroke="currentColor" strokeWidth="1" />
          ))}
          <line x1="0" y1="200" x2="400" y2="200" stroke="var(--color-gold)" strokeWidth="1" opacity="0.35" />
        </svg>
      </div>

      <Container className="relative grid items-center gap-12 pb-16 pt-14 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24 lg:pt-24">
        {/* Left: message */}
        <div>
          <p className="eyebrow hero-rise hero-rise-1">
            Independent · Fee-Only · Fiduciary
          </p>
          <h1 className="hero-rise hero-rise-2 mt-5 text-display leading-[1.03]">
            Clarity for the next chapter of your{" "}
            <span className="relative whitespace-nowrap text-slate">
              financial life
              <svg
                aria-hidden
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                height="10"
              >
                <path
                  className="anim-underline-draw"
                  d="M2 8 C 80 2, 220 2, 298 8"
                  pathLength={1}
                  stroke="var(--color-gold)"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </h1>
          <p className="hero-rise hero-rise-3 mt-7 max-w-xl text-lead text-muted">
            We help pre-retirees and professionals turn a lifetime of saving
            into a plan they understand — with honest, conflict-free advice that
            always puts your goals first.
          </p>
          <div className="hero-rise hero-rise-4 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={CTA_HREF} size="lg">
              <CalendarClock className="h-5 w-5" aria-hidden />
              {CTA_LABEL}
            </Button>
            <Button href="/process" variant="secondary" size="lg">
              See how we work
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </div>
          <p className="hero-rise hero-rise-5 mt-5 text-sm text-muted">
            A relaxed, no-obligation conversation — no cost, no commitment.
          </p>
        </div>

        {/* Right: "plan snapshot" card */}
        <div className="hero-rise hero-rise-3 relative">
          <PlanSnapshot />
        </div>
      </Container>
    </section>
  );
}

/** A calm, illustrative "plan on a page" card — no real data, purely decorative. */
function PlanSnapshot() {
  return (
    <div className="card-tilt relative rounded-[var(--radius-lg)] border hairline bg-card p-6 shadow-[0_30px_60px_-30px_rgba(59,18,32,0.35)] hover:shadow-[0_40px_72px_-32px_rgba(59,18,32,0.45)] sm:p-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            Your Plan
          </p>
          <p className="mt-1 font-serif text-xl text-ink">On track for 2032</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[color-mix(in_srgb,var(--color-positive)_12%,transparent)] px-3 py-1 text-xs font-semibold text-positive">
          <span className="anim-pulse-dot h-1.5 w-1.5 rounded-full bg-positive" />
          Confident
        </span>
      </div>

      {/* Illustrative growth curve */}
      <div className="mt-6 rounded-lg bg-surface p-4">
        <svg viewBox="0 0 320 120" className="h-28 w-full" role="img" aria-label="Illustrative long-term growth trajectory">
          <defs>
            <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-gold)" stopOpacity="0.22" />
              <stop offset="100%" stopColor="var(--color-gold)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[30, 60, 90].map((y) => (
            <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="var(--color-ink)" strokeOpacity="0.06" />
          ))}
          <path
            className="anim-draw"
            d="M4 104 C 60 96, 96 78, 150 62 S 250 30, 316 14"
            fill="none"
            stroke="var(--color-slate)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            className="anim-fade-late"
            d="M4 104 C 60 96, 96 78, 150 62 S 250 30, 316 14 L316 116 L4 116 Z"
            fill="url(#fill)"
            stroke="none"
          />
          <circle className="anim-fade-late" cx="316" cy="14" r="4" fill="var(--color-gold)" />
        </svg>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3 text-center">
        {[
          { k: "Retirement", v: "Funded" },
          { k: "Taxes", v: "Optimized" },
          { k: "Estate", v: "In place" },
        ].map((row) => (
          <div key={row.k} className="rounded-lg border hairline bg-surface/60 p-3">
            <p className="text-[0.7rem] uppercase tracking-wide text-muted">{row.k}</p>
            <p className="mt-1 text-sm font-semibold text-ink">{row.v}</p>
          </div>
        ))}
      </div>

      <p className="mt-5 text-center text-[0.72rem] italic text-muted">
        Illustration only — not a projection of results.
      </p>
    </div>
  );
}
