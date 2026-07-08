import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const steps = [
  {
    n: "01",
    title: "We listen",
    text: "A relaxed conversation about your life, your goals, and what's weighing on you — no jargon, no sales pitch.",
  },
  {
    n: "02",
    title: "We plan",
    text: "A clear, written roadmap across retirement, investments, taxes, and estate — with the trade-offs shown in plain numbers.",
  },
  {
    n: "03",
    title: "We stay with you",
    text: "We put the plan to work and meet regularly to adjust as markets move and life changes. You're never on your own.",
  },
];

export function HowWeWork() {
  return (
    <section className="section section-alt">
      <Container>
        <SectionHeading
          eyebrow="How we work"
          title="A simple, human way to plan"
          intro="No mystery, no gatekeeping. Three steps, and a partner who stays in your corner for the long run."
        />

        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <RevealItem key={s.n}>
              <div className="group h-full rounded-[var(--radius-lg)] border hairline bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--color-gold)_50%,transparent)] hover:shadow-[0_24px_48px_-28px_rgba(11,31,58,0.4)]">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-2xl text-gold-ink">{s.n}</span>
                  <span className="h-px flex-1 bg-[color-mix(in_srgb,var(--color-ink)_10%,transparent)]" />
                </div>
                <h3 className="mt-5 text-h3">{s.title}</h3>
                <p className="mt-3 text-muted">{s.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-10">
          <Link
            href="/process"
            className="link-underline inline-flex items-center gap-2 font-semibold text-ink"
          >
            See our full process
            <ArrowRight className="h-4 w-4 text-gold-ink" aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
