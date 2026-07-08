import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { articles } from "@/lib/insights";

export function InsightsTeaser() {
  return (
    <section className="section">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Insights"
            title="Plain-spoken guidance"
            intro="Short reads on the questions we hear most — written to inform, never to sell."
          />
          <Link
            href="/insights"
            className="link-underline hidden shrink-0 items-center gap-2 pb-2 font-semibold text-ink md:inline-flex"
          >
            All insights
            <ArrowRight className="h-4 w-4 text-gold-ink" aria-hidden />
          </Link>
        </div>

        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2">
          {articles.map((a) => (
            <RevealItem key={a.slug} className="h-full">
              <ArticleCard article={a} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
