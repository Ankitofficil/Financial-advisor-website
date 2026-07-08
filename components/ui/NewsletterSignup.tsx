"use client";

import { useState } from "react";
import { Mail, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonEl } from "@/components/ui/Button";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "done">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!valid) {
      setStatus("error");
      return;
    }
    // TODO(client): wire to real email/CRM provider (e.g. Mailchimp, ConvertKit).
    setStatus("done");
    setEmail("");
  };

  return (
    <section className="section">
      <Container>
        <div className="overflow-hidden rounded-[var(--radius-lg)] border hairline bg-white/[0.04] px-6 py-10 sm:px-10">
          <div className="grid items-center gap-8 md:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="eyebrow">Stay informed</p>
              <hr className="horizon mt-4" />
              <h2 className="mt-5 text-h3">
                A short, occasional note — worth reading.
              </h2>
              <p className="mt-3 text-muted">
                Practical planning ideas a few times a year. No spam, no product
                pitches. Unsubscribe anytime.
              </p>
            </div>

            {status === "done" ? (
              <div
                role="status"
                className="flex items-center gap-3 rounded-[var(--radius-lg)] border hairline bg-card p-5 text-ink"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-positive)_14%,transparent)]">
                  <Check className="h-5 w-5 text-positive" aria-hidden />
                </span>
                <p className="font-medium">
                  You&rsquo;re on the list. Thanks for subscribing.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="relative flex-1">
                    <Mail
                      className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                      aria-hidden
                    />
                    <input
                      id="newsletter-email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === "error") setStatus("idle");
                      }}
                      aria-invalid={status === "error"}
                      aria-describedby={
                        status === "error" ? "newsletter-error" : undefined
                      }
                      className="min-h-[48px] w-full rounded-full border hairline bg-card pl-10 pr-4 text-ink placeholder:text-muted/70 focus:border-[var(--color-gold)] focus:outline-none"
                    />
                  </div>
                  <ButtonEl type="submit" size="lg" className="shrink-0">
                    Subscribe
                  </ButtonEl>
                </div>
                {status === "error" && (
                  <p
                    id="newsletter-error"
                    className="mt-2 text-sm text-[#b4453a]"
                  >
                    Please enter a valid email address.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
