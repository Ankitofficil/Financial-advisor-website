import type { Metadata } from "next";
import { ShieldCheck, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Portrait } from "@/components/ui/Portrait";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { team, philosophy, credentials } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the independent, fee-only fiduciary team behind Meridian Wealth Partners and the philosophy that guides our advice.",
};

const whyIndependent = [
  "No parent company, no sales quotas, no proprietary products to push.",
  "Advice accountable to you alone — not to a bank or a fund family.",
  "Freedom to recommend whatever genuinely fits, from any provider.",
  "A fee structure you can see, understand, and trust.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the firm"
        title="Independent by design, fiduciary by law."
        intro="We built Meridian to be the kind of firm we'd send our own families to: conflict-free, transparent, and genuinely on your side."
      />

      {/* Founder / lead advisor */}
      <section className="section">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <Portrait name={team[0].name} className="mx-auto max-w-sm lg:mx-0" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow">Our founder</p>
              <hr className="horizon mt-4" />
              <h2 className="mt-5 text-h2">{team[0].name}</h2>
              <p className="mt-2 font-medium text-gold-ink">
                {team[0].role} · {team[0].credentials}
              </p>
              <div className="mt-6 space-y-4 text-muted">
                <p>{team[0].bio}</p>
                <p>
                  He holds the CERTIFIED FINANCIAL PLANNER™ designation and has
                  signed the fiduciary oath — a written commitment to put your
                  interests first, in every recommendation, every time.
                </p>
              </div>
              {/* TODO(client): replace bio, name, and headshot with real details */}
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Fiduciary / philosophy statement */}
      <section className="section section-alt">
        <Container>
          <SectionHeading
            eyebrow="Our philosophy"
            title="Four commitments we don't compromise on"
            intro="These aren't marketing lines. They're the operating rules that shape every plan we build."
          />
          <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2">
            {philosophy.map((p) => (
              <RevealItem key={p.title}>
                <div className="h-full rounded-[var(--radius-lg)] border hairline bg-card p-7">
                  <ShieldCheck className="h-6 w-6 text-gold-ink" aria-hidden />
                  <h3 className="mt-4 text-h3">{p.title}</h3>
                  <p className="mt-3 text-muted">{p.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Why independent */}
      <section className="section">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow="Why independent"
              title="The difference is who we answer to"
              intro="Most advisors work inside big institutions with products to sell and shareholders to satisfy. We don't. Being independent means our only obligation is to you."
            />
            <Reveal delay={0.1}>
              <ul className="space-y-4 rounded-[var(--radius-lg)] border hairline bg-card p-7">
                {whyIndependent.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-positive)_14%,transparent)]">
                      <Check className="h-3.5 w-3.5 text-positive" aria-hidden />
                    </span>
                    <span className="text-ink/85">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Credentials strip */}
      <section className="pb-4">
        <Container>
          <Reveal className="band-deep rounded-[var(--radius-lg)] px-6 py-10 text-white sm:px-10">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  Credentials & standards
                </p>
                <p className="mt-2 max-w-md text-white/75">
                  Independent verification of the standards we hold ourselves to.
                </p>
              </div>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {credentials.map((c) => (
                  <li key={c} className="text-sm font-medium text-white/90">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Team */}
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="The team"
            title="People, not a call center"
            intro="A small, senior team that actually knows your name and your plan."
          />
          <RevealGroup className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <RevealItem key={m.name}>
                <div className="h-full">
                  <Portrait name={m.name} ratio="aspect-[4/5]" />
                  <h3 className="mt-5 text-h3">{m.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-gold-ink">
                    {m.role} · {m.credentials}
                  </p>
                  <p className="mt-3 text-[0.95rem] text-muted">{m.bio}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
          <p className="mt-8 text-xs italic text-muted">
            Team members and bios shown are sample placeholders. TODO(client):
            replace with real staff and photos. Advisory services offered through{" "}
            {site.name}.
          </p>
        </Container>
      </section>

      <CtaBand
        title="Advice that answers to you."
        body="If independent, fee-only, fiduciary planning sounds like what you've been looking for, let's talk. The first conversation is always free."
      />
    </>
  );
}
