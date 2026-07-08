import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { NewsletterSignup } from "@/components/ui/NewsletterSignup";
import { CtaBand } from "@/components/ui/CtaBand";
import { articles } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Plain-spoken articles on retirement, taxes, investing, and planning — written to inform, never to sell.",
};

export default function InsightsPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Plain-spoken guidance for real decisions."
        intro="Short, practical reads on the questions we hear most from clients — no jargon, no sales pitch, no promises we can't keep."
      />

      <section className="section">
        <Container>
          {/* Featured article */}
          <RevealGroup className="grid gap-6 lg:grid-cols-2">
            <RevealItem className="h-full">
              <ArticleCard article={featured} className="h-full" />
            </RevealItem>
            <RevealItem className="h-full">
              <div className="grid h-full gap-6">
                {rest.map((a) => (
                  <ArticleCard key={a.slug} article={a} className="h-full" />
                ))}
              </div>
            </RevealItem>
          </RevealGroup>

          <p className="mt-8 text-xs italic text-muted">
            {/* TODO(client): Add real articles. Ensure any market/return
                commentary is generic and compliant — no specific predictions. */}
            Sample articles shown for illustration. Educational only — not
            individualized investment advice.
          </p>
        </Container>
      </section>

      <NewsletterSignup />

      <CtaBand
        title="Have a question these didn't answer?"
        body="The best insights come from a real conversation about your situation. Book a free intro call and ask us anything."
      />
    </>
  );
}
