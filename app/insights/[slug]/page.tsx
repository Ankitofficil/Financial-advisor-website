import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarClock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArticleBody } from "@/components/insights/ArticleBody";
import { ReadingProgress } from "@/components/insights/ReadingProgress";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { articles, getArticle } from "@/lib/insights";
import { CTA_HREF, CTA_LABEL } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article not found" };
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <>
      <ReadingProgress />

      {/* Header */}
      <header className="border-b hairline">
        <Container className="max-w-3xl pb-10 pt-12 sm:pt-16">
          <Link
            href="/insights"
            className="link-underline inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            All insights
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
            <span className="rounded-full bg-[color-mix(in_srgb,var(--color-ink)_6%,transparent)] px-3 py-1 font-semibold uppercase tracking-wide text-gold-ink">
              {article.category}
            </span>
            <span className="text-muted">{article.readingTime}</span>
            <span className="text-muted">·</span>
            <span className="text-muted">{article.dateLabel}</span>
          </div>

          <h1 className="mt-5 text-h1">{article.title}</h1>
          <p className="mt-5 text-lead text-muted">{article.excerpt}</p>
          <p className="mt-6 text-sm text-muted">By {article.author}</p>
        </Container>
      </header>

      {/* Body */}
      <article>
        <Container className="max-w-3xl py-12 sm:py-16">
          <ArticleBody body={article.body} />

          {/* Article-level compliance note */}
          <div className="mt-12 rounded-[var(--radius-lg)] border hairline bg-white/60 p-6 text-[0.85rem] text-muted">
            {/* TODO(client): confirm this disclosure with compliance. */}
            <strong className="font-semibold text-ink/80">
              Educational content only.
            </strong>{" "}
            This article is for general information and is not individualized
            investment, tax, or legal advice. Investing involves risk, including
            possible loss of principal, and past performance does not guarantee
            future results. Consult a qualified professional about your specific
            situation.
          </div>

          {/* Inline CTA */}
          <Reveal className="mt-10 flex flex-col items-start gap-4 band-deep rounded-[var(--radius-lg)] px-6 py-8 text-white sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-serif text-xl">Want this applied to your plan?</p>
              <p className="mt-1 text-white/70">
                Let&rsquo;s talk it through — the first call is free.
              </p>
            </div>
            <Button href={CTA_HREF} size="lg" variant="gold" className="shrink-0">
              <CalendarClock className="h-5 w-5" aria-hidden />
              {CTA_LABEL}
            </Button>
          </Reveal>
        </Container>
      </article>

      {/* Related */}
      <section className="section section-alt border-t hairline">
        <Container>
          <h2 className="text-h3">Keep reading</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
