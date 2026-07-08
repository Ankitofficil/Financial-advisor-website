import { BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { credentials } from "@/lib/content";
import { RevealGroup } from "@/components/ui/Reveal";

export function TrustBar() {
  return (
    <div className="border-y hairline bg-white/50">
      <Container className="py-5">
        <RevealGroup>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
            <li className="reveal-item text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              {/* TODO(client): confirm real credentials & memberships */}
              Trusted for
            </li>
            {credentials.map((c) => (
              <li
                key={c}
                className="reveal-item inline-flex items-center gap-2 text-sm font-medium text-ink/80"
              >
                <BadgeCheck className="h-4 w-4 text-gold-ink" aria-hidden />
                {c}
              </li>
            ))}
          </ul>
        </RevealGroup>
      </Container>
    </div>
  );
}
