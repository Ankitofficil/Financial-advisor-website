/**
 * Central site config & sample content.
 * TODO(client): Replace firm name, SEBI registration number, contact details, and all
 * placeholder copy/testimonials with real, compliance-reviewed content.
 */

export const site = {
  name: "Meridian Wealth Partners", // TODO(client): real firm name
  shortName: "Meridian",
  tagline: "Independent, fee-only fiduciary planning.",
  sebiReg: "INA000000000", // TODO(client): real SEBI RIA registration number
  email: "hello@meridianwealth.example",
  phone: "+91 98765 43210",
  phoneHref: "+919876543210",
  address: {
    line1: "801, Maker Chambers IV, Nariman Point",
    line2: "Mumbai, Maharashtra 400021",
  },
  hours: "Mon–Sat · 9:30am–6:00pm IST",
  social: {
    linkedin: "https://linkedin.com/company/example",
    x: "https://x.com/example",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

export const CTA_LABEL = "Schedule a Consultation";
export const CTA_HREF = "/contact";
