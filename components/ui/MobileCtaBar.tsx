import { CalendarClock } from "lucide-react";
import Link from "next/link";
import { CTA_HREF, CTA_LABEL } from "@/lib/site";

/** Sticky bottom CTA on mobile only (hidden ≥ sm). Server component. */
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t hairline bg-surface px-4 py-3 shadow-[0_-8px_24px_-16px_rgba(0,10,6,0.55)] sm:hidden">
      <Link
        href={CTA_HREF}
        className="btn-lift flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-gold px-5 font-semibold text-[#0c1712]"
      >
        <CalendarClock className="h-5 w-5" aria-hidden />
        {CTA_LABEL}
      </Link>
    </div>
  );
}
