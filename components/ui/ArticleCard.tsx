import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Article } from "@/lib/insights";
import { cn } from "@/lib/cn";

export function ArticleCard({
  article,
  className,
}: {
  article: Article;
  className?: string;
}) {
  return (
    <Link
      href={`/insights/${article.slug}`}
      className={cn(
        "group flex h-full flex-col rounded-[var(--radius-lg)] border hairline bg-card p-7 transition-all duration-300",
        "hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--color-gold)_55%,transparent)] hover:shadow-[0_28px_56px_-30px_rgba(11,31,58,0.42)]",
        className
      )}
    >
      <div className="flex items-center gap-3 text-xs">
        <span className="rounded-full bg-[color-mix(in_srgb,var(--color-ink)_6%,transparent)] px-3 py-1 font-semibold uppercase tracking-wide text-gold-ink">
          {article.category}
        </span>
        <span className="text-muted">{article.readingTime}</span>
      </div>

      <h3 className="mt-5 font-serif text-[1.35rem] leading-snug text-ink group-hover:text-slate">
        {article.title}
      </h3>
      <p className="mt-3 flex-1 text-[0.98rem] text-muted">{article.excerpt}</p>

      <div className="mt-6 flex items-center justify-between border-t hairline pt-5 text-sm">
        <span className="text-muted">{article.dateLabel}</span>
        <span className="inline-flex items-center gap-1 font-semibold text-ink">
          Read
          <ArrowUpRight className="h-4 w-4 text-gold-ink transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
