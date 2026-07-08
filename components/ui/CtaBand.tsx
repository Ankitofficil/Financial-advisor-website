import { CalendarClock, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CTA_HREF, CTA_LABEL } from "@/lib/site";

export function CtaBand({
  title = "Let's talk about your next chapter.",
  body = "Book a free, no-obligation intro call. We'll listen, answer your questions, and help you see your options clearly — whether or not you decide to work with us.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="section">
      <Container>
        <Reveal className="band-deep relative overflow-hidden rounded-[var(--radius-lg)] px-6 py-14 text-white sm:px-12 sm:py-16">
          {/* meridian arcs on the dark band */}
          <svg
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 text-white/[0.07]"
            viewBox="0 0 200 200"
            fill="none"
          >
            {[40, 70, 100].map((r) => (
              <circle key={r} cx="100" cy="100" r={r} stroke="currentColor" strokeWidth="1" />
            ))}
            <line x1="0" y1="100" x2="200" y2="100" stroke="var(--color-gold)" strokeWidth="1" opacity="0.5" />
          </svg>

          <div className="relative max-w-2xl">
            <hr className="horizon" />
            <h2 className="mt-5 text-h2 text-white">{title}</h2>
            <p className="mt-4 text-lead text-white/75">{body}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={CTA_HREF} size="lg" variant="gold">
                <CalendarClock className="h-5 w-5" aria-hidden />
                {CTA_LABEL}
              </Button>
              <Button
                href="/services"
                size="lg"
                variant="ghost"
                className="text-white hover:text-gold"
              >
                Explore services
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
