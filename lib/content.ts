/**
 * Sample content shared across pages. Placeholder copy — realistic, not lorem.
 * TODO(client): Replace testimonials, stats, and bios with real, approved content.
 */

export type Service = {
  slug: string;
  title: string;
  icon: string; // lucide icon name
  summary: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "retirement-planning",
    title: "Retirement Planning",
    icon: "Compass",
    summary:
      "A clear, income-focused roadmap for the years when your paycheck stops and your portfolio takes over.",
    points: [
      "Retirement income and withdrawal strategy",
      "EPF, PPF & NPS optimisation",
      "Healthcare and long-term-care planning",
      "Cash-flow modeling for every scenario",
    ],
  },
  {
    slug: "investment-management",
    title: "Investment Management",
    icon: "LineChart",
    summary:
      "Low-cost, evidence-based portfolios built around your goals, timeline, and comfort with risk — not the market's mood.",
    points: [
      "Globally diversified, tax-aware portfolios",
      "Disciplined rebalancing",
      "Risk-appropriate asset allocation",
      "Transparent, fee-only structure",
    ],
  },
  {
    slug: "tax-efficient-strategies",
    title: "Tax-Efficient Strategies",
    icon: "Receipt",
    summary:
      "Coordinating investments and withdrawals so you keep more of what you earn — this year and in retirement.",
    points: [
      "Asset location across account types",
      "Old vs new tax regime planning",
      "Tax-loss harvesting",
      "Charitable giving strategies",
    ],
  },
  {
    slug: "estate-planning",
    title: "Estate Planning",
    icon: "Scroll",
    summary:
      "Making sure your wishes are honored and your family is cared for, with a plan that's coordinated across your advisors.",
    points: [
      "Beneficiary and titling review",
      "Wealth-transfer strategies",
      "Coordination with your attorney",
      "Legacy and gifting plans",
    ],
  },
  {
    slug: "insurance-review",
    title: "Insurance Review",
    icon: "ShieldCheck",
    summary:
      "An objective look at what you're paying for and whether it still fits — no products sold, no commissions.",
    points: [
      "Life and disability coverage analysis",
      "Long-term-care options",
      "Policy cost and suitability review",
      "Independent, conflict-free guidance",
    ],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};

/** SAMPLE / PLACEHOLDER testimonials — clearly marked, must be replaced. */
export const testimonials: Testimonial[] = [
  {
    quote:
      "For the first time, we actually understand our own money. Meridian turned a pile of accounts into one plan we can follow — and sleep on.",
    name: "Sunita & Rajesh M.",
    detail: "Clients since 2019 · Retiring in 2027",
  },
  {
    quote:
      "No jargon, no pressure, no products being pushed. Just honest advice that clearly put our interests first. That was the whole difference.",
    name: "Ramesh T.",
    detail: "Business owner · Approaching retirement",
  },
  {
    quote:
      "When the market dropped, they called us before we could panic. Having someone steady in your corner is worth more than any hot tip.",
    name: "Meera V.",
    detail: "Physician · Long-term planning client",
  },
];

export const stats = [
  { value: 850, prefix: "₹", suffix: " Cr+", label: "Client assets guided" },
  { value: 22, suffix: "yrs", label: "Advising families" },
  { value: 100, suffix: "%", label: "Fiduciary, fee-only" },
  { value: 340, suffix: "+", label: "Households served" },
];

export type ProcessStep = {
  n: string;
  title: string;
  summary: string;
  detail: string;
  duration: string;
};

export const processSteps: ProcessStep[] = [
  {
    n: "01",
    title: "Discovery",
    summary: "We listen first.",
    detail:
      "A relaxed, no-obligation conversation about where you are, where you want to be, and what keeps you up at night. We gather the full picture — accounts, goals, timelines, and worries.",
    duration: "Week 1",
  },
  {
    n: "02",
    title: "Plan",
    summary: "We build your roadmap.",
    detail:
      "We model your future in plain numbers and design a written plan across retirement, investments, taxes, and estate. You'll see the trade-offs clearly before any decision is made.",
    duration: "Weeks 2–3",
  },
  {
    n: "03",
    title: "Implement",
    summary: "We put it to work.",
    detail:
      "We handle the paperwork, transfers, and portfolio construction — coordinating with your accountant and attorney so everything moves in the same direction.",
    duration: "Weeks 3–5",
  },
  {
    n: "04",
    title: "Review",
    summary: "We stay with you.",
    detail:
      "Life changes and so do plans. We meet regularly to rebalance, adjust for new goals, and keep you on course through every market and every chapter.",
    duration: "Ongoing",
  },
];

export const credentials = [
  "CFP® Certified",
  "Fee-Only Fiduciary",
  "NISM Certified",
  "Fiduciary Oath",
  "SEBI Registered (RIA)",
];

export type TeamMember = {
  name: string;
  role: string;
  credentials: string;
  bio: string;
};

/** TODO(client): Replace with real advisor(s) and team bios/photos. */
export const team: TeamMember[] = [
  {
    name: "Ratan Verma",
    role: "Founder & Principal Advisor",
    credentials: "CFP®, MBA",
    bio: "Ratan founded Meridian after two decades at large broking houses and banks, frustrated by sales targets that came before clients. He built the firm he wished he could have joined: independent, fee-only, and accountable to no one but the families it serves.",
  },
  {
    name: "Arjun Mehta",
    role: "Senior Financial Planner",
    credentials: "CFP®, CA",
    bio: "Arjun leads tax and retirement-income planning. A Chartered Accountant as well as a CFP®, he specializes in the withdrawal and tax-regime strategies that quietly make a decade of difference.",
  },
  {
    name: "Priya Nair",
    role: "Client Service & Operations",
    credentials: "FPQP™",
    bio: "Priya is the reason nothing falls through the cracks. She coordinates onboarding, paperwork, and the rhythm of review meetings so your plan keeps moving without you having to chase it.",
  },
];

export const philosophy = [
  {
    title: "Fiduciary, always",
    text: "We are legally and ethically bound to act in your best interest — full stop. No hidden commissions, no proprietary products, no incentive to sell you anything.",
  },
  {
    title: "Fee-only, not fee-based",
    text: "We're paid only by you, never by fund companies or insurers. That one distinction removes the conflicts that quietly shape most financial advice.",
  },
  {
    title: "Evidence over instinct",
    text: "We don't chase markets or predict them. We build disciplined, diversified plans grounded in decades of research — then help you stick with them.",
  },
  {
    title: "Plain language",
    text: "You should understand every recommendation we make. If we can't explain it simply, we haven't thought about it clearly enough.",
  },
];
