import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="section section-alt">
      <Container>
        <SectionHeading
          eyebrow="In their words"
          title="Steadiness you can feel"
          intro="A few words from the people we serve."
          align="center"
        />

        <RevealGroup className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <RevealItem key={t.name} className="h-full">
              <figure className="flex h-full flex-col rounded-[var(--radius-lg)] border hairline bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--color-gold)_45%,transparent)] hover:shadow-[0_24px_48px_-28px_rgba(59,18,32,0.35)]">
                <Quote className="h-7 w-7 shrink-0 text-gold/70" aria-hidden />
                <blockquote className="mt-4 flex-1 font-serif text-[1.15rem] leading-relaxed text-ink">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t hairline pt-5">
                  <p className="font-semibold text-ink">{t.name}</p>
                  <p className="text-sm text-muted">{t.detail}</p>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="mt-8 text-center text-xs italic text-muted">
          {/* TODO(client): Testimonials are SAMPLE/PLACEHOLDER. Real client
              testimonials must comply with SEBI advertising norms for
              investment advisers (disclosures, consent, and whether
              compensation was provided). */}
          Sample testimonials shown for illustration. Not actual client
          statements.
        </p>
      </Container>
    </section>
  );
}
