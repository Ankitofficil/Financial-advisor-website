import Link from "next/link";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * Wordmark with a small "meridian" mark — a circle bisected by a horizon line,
 * echoing the site's gold horizon motif.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      title={`${site.name} — home`}
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span aria-hidden className="relative inline-flex h-8 w-8 shrink-0 items-center justify-center">
        <svg viewBox="0 0 32 32" className="h-8 w-8">
          <circle
            cx="16"
            cy="16"
            r="13"
            fill="none"
            stroke="var(--color-ink)"
            strokeWidth="1.5"
          />
          <line
            x1="3"
            y1="16"
            x2="29"
            y2="16"
            stroke="var(--color-gold)"
            strokeWidth="1.5"
          />
          <circle cx="16" cy="16" r="2.2" fill="var(--color-gold)" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[1.15rem] font-medium tracking-tight text-ink">
          {site.name.split(" ").slice(0, 1).join(" ")}
          <span className="text-gold-ink"> Wealth</span>
        </span>
        <span className="mt-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-muted">
          Partners
        </span>
      </span>
    </Link>
  );
}
