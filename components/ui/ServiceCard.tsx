import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { Service } from "@/lib/content";
import { cn } from "@/lib/cn";

export function ServiceCard({
  service,
  showPoints = false,
}: {
  service: Service;
  showPoints?: boolean;
}) {
  return (
    <Link
      href={`/services#${service.slug}`}
      className={cn(
        "group flex h-full flex-col rounded-[var(--radius-lg)] border hairline bg-card p-7 transition-all duration-300",
        "hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--color-gold)_60%,transparent)] hover:shadow-[0_28px_56px_-30px_rgba(0,10,6,0.42)]"
      )}
    >
      <div className="flex items-start justify-between">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--color-ink)_5%,transparent)] text-gold-ink transition-colors group-hover:bg-[color-mix(in_srgb,var(--color-gold)_16%,transparent)]">
          <Icon name={service.icon} className="h-6 w-6" />
        </span>
        <ArrowUpRight className="h-5 w-5 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-ink" aria-hidden />
      </div>

      <h3 className="mt-5 text-h3">{service.title}</h3>
      <p className="mt-3 text-[0.98rem] text-muted">{service.summary}</p>

      {showPoints && (
        <ul className="mt-5 space-y-2 border-t hairline pt-5">
          {service.points.map((p) => (
            <li key={p} className="flex items-start gap-2.5 text-[0.92rem] text-ink/80">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-positive" aria-hidden />
              {p}
            </li>
          ))}
        </ul>
      )}
    </Link>
  );
}
