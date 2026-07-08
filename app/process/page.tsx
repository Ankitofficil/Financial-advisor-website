import type { Metadata } from "next";
import { MessagesSquare, PencilRuler, Rocket, RefreshCw } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/process/Timeline";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How we work with you: Discovery, Plan, Implement, and Review — a clear, four-step client journey with a partner who stays for the long run.",
};

const promises = [
  {
    icon: MessagesSquare,
    t: "You'll never feel rushed",
    d: "Every step moves at your pace, with time to ask anything.",
  },
  {
    icon: PencilRuler,
    t: "Everything in writing",
    d: "Your plan is documented in plain language you can revisit anytime.",
  },
  {
    icon: Rocket,
    t: "We handle the busywork",
    d: "Paperwork, transfers, and coordination — we do the heavy lifting.",
  },
  {
    icon: RefreshCw,
    t: "It's a relationship, not a transaction",
    d: "We're with you through every market and every life change.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our process"
        title="A clear path from questions to confidence."
        intro="Working with an advisor shouldn't feel like a leap of faith. Here's exactly what to expect, step by step — and where you fit in at each stage."
      />

      {/* Timeline */}
      <section className="section">
        <Container className="max-w-4xl">
          <Timeline />
        </Container>
      </section>

      {/* Our promises */}
      <section className="section section-alt">
        <Container>
          <SectionHeading
            eyebrow="What stays constant"
            title="Four things you can count on at every step"
            align="center"
          />
          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((p) => (
              <RevealItem key={p.t}>
                <div className="h-full rounded-[var(--radius-lg)] border hairline bg-card p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--color-ink)_5%,transparent)] text-gold-ink">
                    <p.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-lg font-medium text-ink font-serif">
                    {p.t}
                  </h3>
                  <p className="mt-2 text-[0.95rem] text-muted">{p.d}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Reassurance strip */}
      <section className="pt-4">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-serif text-[clamp(1.4rem,1.1rem+1.4vw,2rem)] leading-snug text-ink">
              &ldquo;The best financial plan is the one you actually
              understand — and can stick with when it matters most.&rdquo;
            </p>
            <p className="mt-4 text-sm text-muted">— The Meridian approach</p>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="Ready for step one?"
        body="Discovery is just a friendly conversation — no forms, no commitment. Let's start there."
      />
    </>
  );
}
