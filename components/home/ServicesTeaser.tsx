import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { services } from "@/lib/content";

export function ServicesTeaser() {
  return (
    <section className="section">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What we do"
            title="Everything under one roof"
            intro="Coordinated advice across the pieces of your financial life — so nothing falls through the cracks."
          />
          <Link
            href="/services"
            className="link-underline hidden shrink-0 items-center gap-2 pb-2 font-semibold text-ink md:inline-flex"
          >
            All services
            <ArrowRight className="h-4 w-4 text-gold-ink" aria-hidden />
          </Link>
        </div>

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((s) => (
            <RevealItem key={s.slug} className="h-full">
              <ServiceCard service={s} />
            </RevealItem>
          ))}
        </RevealGroup>

        <Link
          href="/services"
          className="link-underline mt-8 inline-flex items-center gap-2 font-semibold text-ink md:hidden"
        >
          All services
          <ArrowRight className="h-4 w-4 text-gold-ink" aria-hidden />
        </Link>
      </Container>
    </section>
  );
}
