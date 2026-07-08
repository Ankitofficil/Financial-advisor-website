import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, CalendarClock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free, no-obligation intro call with Meridian Wealth Partners, or reach us by phone or email. We reply within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let's start with a conversation."
        intro="Tell us a little about what's on your mind and we'll be in touch within one business day. No pressure, no obligation — just a friendly first step."
      />

      <section className="section">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            {/* Form */}
            <Reveal>
              <ContactForm />
            </Reveal>

            {/* Office info */}
            <Reveal delay={0.1} className="flex flex-col gap-6">
              <div className="rounded-[var(--radius-lg)] border hairline bg-card p-7">
                <h2 className="text-h3">Reach us directly</h2>
                <hr className="horizon mt-4" />
                <ul className="mt-6 space-y-5 text-[0.98rem]">
                  <InfoRow icon={MapPin} label="Office">
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                  </InfoRow>
                  <InfoRow icon={Phone} label="Phone">
                    <a href={`tel:${site.phoneHref}`} className="link-underline">
                      {site.phone}
                    </a>
                  </InfoRow>
                  <InfoRow icon={Mail} label="Email">
                    <a href={`mailto:${site.email}`} className="link-underline break-all">
                      {site.email}
                    </a>
                  </InfoRow>
                  <InfoRow icon={Clock} label="Hours">
                    {site.hours}
                  </InfoRow>
                </ul>
              </div>

              {/* Scheduling nudge */}
              <div className="band-deep rounded-[var(--radius-lg)] p-7 text-white">
                <CalendarClock className="h-6 w-6 text-gold" aria-hidden />
                <h3 className="mt-4 font-serif text-xl text-white">Prefer to book directly?</h3>
                <p className="mt-2 text-white/75">
                  {/* TODO(client): embed a real scheduler (e.g. Calendly) here. */}
                  A live scheduling link will go here so you can grab a time that
                  suits you — typically a 30-minute intro call.
                </p>
              </div>

              {/* Map placeholder */}
              <div
                className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-lg)] border hairline"
                role="img"
                aria-label="Map placeholder showing office location"
              >
                <svg viewBox="0 0 400 250" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
                  <rect width="400" height="250" fill="#eef1f3" />
                  {/* faux streets */}
                  {[40, 100, 160, 210].map((y) => (
                    <line key={`h${y}`} x1="0" y1={y} x2="400" y2={y} stroke="#d6dde2" strokeWidth="6" />
                  ))}
                  {[70, 160, 250, 330].map((x) => (
                    <line key={`v${x}`} x1={x} y1="0" x2={x} y2="250" stroke="#d6dde2" strokeWidth="6" />
                  ))}
                  <rect x="70" y="100" width="90" height="60" fill="#e2e8ec" />
                  {/* pin */}
                  <g transform="translate(200,110)">
                    <path
                      d="M0 40 C -18 12, -18 -4, 0 -22 C 18 -4, 18 12, 0 40 Z"
                      fill="#0b1f3a"
                    />
                    <circle cx="0" cy="-4" r="7" fill="#c9a227" />
                  </g>
                </svg>
                <span className="absolute bottom-3 left-3 rounded-full bg-white/85 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-ink/70 backdrop-blur">
                  {/* TODO(client): replace with an embedded Google/Mapbox map */}
                  Map placeholder
                </span>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--color-ink)_5%,transparent)] text-gold-ink">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
          {label}
        </p>
        <p className="mt-1 text-ink/85">{children}</p>
      </div>
    </li>
  );
}
