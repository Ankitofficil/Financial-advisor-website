import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <Container className="section flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="eyebrow">Error 404</p>
      <hr className="horizon mt-4" />
      <h1 className="mt-5 text-h1">This page took a wrong turn.</h1>
      <p className="mt-4 max-w-md text-lead text-muted">
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
        Let&rsquo;s get you back on course.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/">Back to home</Button>
        <Button href="/contact" variant="secondary">
          Contact us
        </Button>
      </div>
    </Container>
  );
}
