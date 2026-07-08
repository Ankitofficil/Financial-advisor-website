import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function LegalStub({ title, intro }: { title: string; intro: string }) {
  return (
    <Container className="section max-w-3xl">
      <p className="eyebrow">Legal</p>
      <hr className="horizon mt-4" />
      <h1 className="mt-5 text-h1">{title}</h1>
      <p className="mt-5 text-lead text-muted">{intro}</p>
      <div className="mt-8 rounded-lg border hairline bg-white p-6 text-[0.95rem] text-muted">
        {/* TODO(client): Replace this placeholder with real, compliance-reviewed
            content. Do not launch with placeholder legal text. */}
        <strong className="font-semibold text-ink">Placeholder.</strong> Final
        language must be supplied and reviewed by the firm&rsquo;s compliance
        and legal counsel before launch.
      </div>
      <div className="mt-8">
        <Button href="/" variant="secondary">
          Back to home
        </Button>
      </div>
    </Container>
  );
}
