import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { site, nav } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";

function LinkedInMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function XMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93zm-1.29 19.5h2.04L6.49 3.24H4.3L17.61 20.65z" />
    </svg>
  );
}

const disclosureLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/disclosures", label: "Investor Charter" },
  { href: "/disclosures", label: "Disclosures" },
];

export function Footer() {
  // pb-24 on mobile keeps the last lines clear of the fixed MobileCtaBar
  return (
    <footer className="mt-auto border-t hairline bg-white/60 pb-24 sm:pb-0">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
        {/* Brand + contact */}
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-[0.95rem] text-muted">
            {site.tagline} Helping pre-retirees and professionals plan the next
            chapter with clarity and confidence.
          </p>
          <ul className="mt-6 space-y-3 text-[0.9rem] text-muted">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-ink" aria-hidden />
              <span>
                {site.address.line1}
                <br />
                {site.address.line2}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-gold-ink" aria-hidden />
              <a href={`tel:${site.phoneHref}`} className="link-underline">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-gold-ink" aria-hidden />
              <a href={`mailto:${site.email}`} className="link-underline">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Explore */}
        <nav aria-label="Footer">
          <h2 className="eyebrow mb-4">Explore</h2>
          <ul className="space-y-2.5 text-[0.95rem]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline inline-flex min-h-[24px] items-center text-ink/80 hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Disclosures + social */}
        <div>
          <h2 className="eyebrow mb-4">Disclosures</h2>
          <ul className="space-y-2.5 text-[0.95rem]">
            {disclosureLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="link-underline inline-flex min-h-[24px] items-center text-ink/80 hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-3">
            <a
              href={site.social.linkedin}
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border hairline text-ink/70 transition-colors hover:border-[var(--color-gold)] hover:text-ink"
            >
              <LinkedInMark />
            </a>
            <a
              href={site.social.x}
              aria-label="X (Twitter)"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border hairline text-ink/70 transition-colors hover:border-[var(--color-gold)] hover:text-ink"
            >
              <XMark />
            </a>
          </div>
        </div>
      </div>

      {/* Compliance disclaimer block — spec §10. TODO(client): legal review. */}
      <div className="border-t hairline pb-20 sm:pb-0">
        <div className="container-x py-8">
          <p className="text-[0.78rem] leading-relaxed text-muted">
            {/* TODO(client): Replace [Firm], SEBI registration number, and registrations
                with real, compliance-approved language. Have this block reviewed by legal/compliance. */}
            Advisory services are offered through {site.name}, a SEBI-registered
            investment adviser (Registration No.&nbsp;{site.sebiReg}).{" "}
            <strong className="font-semibold text-ink/80">
              Investing involves risk, including the possible loss of principal.
            </strong>{" "}
            Past performance is not a guarantee of future results. Registration
            with SEBI does not imply any assurance of returns or any level of
            skill. The information on this website is for general educational
            purposes only and does not constitute investment, legal, or tax
            advice, nor an offer or solicitation to buy or sell any security.
            Please review our{" "}
            <Link href="/disclosures" className="underline decoration-gold-ink/40 underline-offset-2">
              disclosures and Investor Charter
            </Link>{" "}
            for important information.
          </p>
          <p className="mt-4 text-[0.78rem] text-muted">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
            <span className="mx-2 text-hairline/40">·</span>
            <span className="italic">
              Sample marketing site — copy and disclosures are placeholders
              pending client review.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
