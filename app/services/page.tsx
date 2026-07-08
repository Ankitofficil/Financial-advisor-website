import type { Metadata } from "next";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Retirement planning, investment management, tax-efficient strategies, estate planning, and insurance review — coordinated under one fiduciary roof.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Coordinated planning for every part of your financial life."
        intro="Retirement, investments, taxes, estate, and insurance — advised together, so the pieces actually fit. Everything is delivered under our fee-only fiduciary standard."
      />

      {/* Detailed service sections */}
      <section className="section">
        <Container>
          <div className="flex flex-col gap-8">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i === 0 ? 0 : 0.05}>
                <article
                  id={s.slug}
                  className="scroll-mt-28 rounded-[var(--radius-lg)] border hairline bg-card p-7 sm:p-9"
                >
                  <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
                    <div>
                      <div className="flex items-center gap-4">
                        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--color-ink)_5%,transparent)] text-gold-ink">
                          <Icon name={s.icon} className="h-7 w-7" />
                        </span>
                        <span className="font-serif text-lg text-gold-ink">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h2 className="mt-5 text-h2">{s.title}</h2>
                      <p className="mt-4 text-lead text-muted">{s.summary}</p>
                    </div>

                    <div className="lg:pt-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                        What&rsquo;s included
                      </p>
                      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {s.points.map((p) => (
                          <li
                            key={p}
                            className="flex items-start gap-2.5 text-[0.95rem] text-ink/85"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-positive" aria-hidden />
                            {p}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/contact"
                        className="link-underline mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink"
                      >
                        Discuss {s.title.toLowerCase()}
                        <ArrowRight className="h-4 w-4 text-gold-ink" aria-hidden />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* How we're paid — transparency */}
      <section className="section section-alt">
        <Container>
          <SectionHeading
            eyebrow="How we're paid"
            title="No commissions. No surprises."
            intro="We're fee-only, which means our compensation comes from one place — you — and is fully transparent."
            align="center"
          />
          <RevealGroup className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
            {[
              {
                t: "Flat & transparent",
                d: "You'll always know exactly what you pay and why. No hidden loads, no revenue sharing.",
              },
              {
                t: "Aligned with you",
                d: "We don't earn a cent from any product. Our only incentive is to help your plan succeed.",
              },
              {
                t: "Flexible engagements",
                d: "Ongoing management, one-time plans, or hourly advice — structured around what you need.",
              },
            ].map((c) => (
              <RevealItem key={c.t}>
                <div className="h-full rounded-[var(--radius-lg)] border hairline bg-card p-7 text-center">
                  <h3 className="text-h3">{c.t}</h3>
                  <p className="mt-3 text-muted">{c.d}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs italic text-muted">
            {/* TODO(client): Insert actual fee schedule, minimums, and the fee
                disclosures required under the SEBI (Investment Advisers) Regulations. */}
            Specific fees, account minimums, and engagement terms are detailed in
            our disclosure document and client agreement.
          </p>
        </Container>
      </section>

      <CtaBand
        title="Not sure which service you need?"
        body="That's exactly what the intro call is for. Tell us what's on your mind, and we'll point you toward the right starting place — no obligation."
      />
    </>
  );
}
