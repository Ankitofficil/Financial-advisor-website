import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/ui/CountUp";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="section">
      <Container>
        <RevealGroup className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-lg)] border hairline bg-[color-mix(in_srgb,var(--color-ink)_10%,transparent)] lg:grid-cols-4">
          {stats.map((s) => (
            <RevealItem
              key={s.label}
              className="bg-card px-6 py-9 text-center transition-colors duration-300 hover:bg-[color-mix(in_srgb,var(--color-slate)_4%,white)]"
            >
              <p className="font-serif text-[clamp(2.2rem,1.4rem+2.4vw,3.2rem)] font-medium leading-none text-slate">
                <CountUp
                  to={s.value}
                  prefix={s.prefix ?? ""}
                  suffix={s.suffix ?? ""}
                />
              </p>
              <p className="mt-3 text-sm text-muted">{s.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
        <p className="mt-4 text-center text-xs italic text-muted">
          {/* TODO(client): replace sample figures with real, verifiable numbers */}
          Sample figures shown for illustration.
        </p>
      </Container>
    </section>
  );
}
