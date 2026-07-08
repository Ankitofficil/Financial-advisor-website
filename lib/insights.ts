/**
 * Sample insight articles. Realistic placeholder copy (~400–600 words each).
 * TODO(client): Replace with real, compliance-reviewed articles. No specific
 * return promises anywhere.
 */

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  date: string; // ISO
  dateLabel: string;
  author: string;
  /** Simple paragraph/heading content model to avoid an MDX toolchain. */
  body: Array<
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "ul"; items: string[] }
    | { type: "callout"; text: string }
  >;
};

export const articles: Article[] = [
  {
    slug: "pay-off-home-loan-before-retiring",
    title: "Should you pay off your home loan before retiring?",
    excerpt:
      "It feels good to retire debt-free — but the math and the emotions don't always point the same way. Here's a calmer way to decide.",
    category: "Retirement",
    readingTime: "4 min read",
    date: "2026-05-18",
    dateLabel: "May 18, 2026",
    author: "The Meridian Team",
    body: [
      {
        type: "p",
        text: "Few questions come up more often as retirement approaches than this one: should we pay off the house first? The appeal is obvious. A paid-off home means one less EMI, one less worry, and a quiet sense of having arrived. But the right answer depends on more than how good it feels — and for many households, the emotional win and the financial win pull in slightly different directions.",
      },
      {
        type: "h2",
        text: "The case for paying it off",
      },
      {
        type: "p",
        text: "Eliminating a home loan lowers your required monthly income in retirement, which can meaningfully reduce how much you need to withdraw from your portfolio each year. Smaller withdrawals can mean less exposure to a bad market early in retirement — the so-called sequence-of-returns risk. And for many people, the peace of mind of owning their home outright is worth something real, even if it doesn't show up on a spreadsheet.",
      },
      {
        type: "h2",
        text: "The case for keeping it",
      },
      {
        type: "p",
        text: "On the other hand, a large lump-sum payoff pulls money out of investments — and possibly out of tax-advantaged accounts, triggering taxes in the process. If your home loan carries a low interest rate, the guaranteed 'return' from paying it off may be lower than what a diversified portfolio could reasonably be expected to earn over time. Just as important, home equity is illiquid: once the money is in the walls, it's hard to get back out without borrowing or selling.",
      },
      {
        type: "callout",
        text: "A useful reframe: paying off a home loan is a guaranteed, after-tax return equal to your interest rate — no more, no less. Compare that honestly against your other options.",
      },
      {
        type: "h2",
        text: "Questions that usually settle it",
      },
      {
        type: "ul",
        items: [
          "Would paying it off leave you with a comfortable cash cushion, or drain your reserves?",
          "Where would the money come from — taxable savings, or a retirement account that triggers taxes?",
          "How does the loan rate compare to a conservative expected return on your investments?",
          "How much do you personally value being debt-free, separate from the math?",
        ],
      },
      {
        type: "p",
        text: "There's rarely a single correct answer — only the answer that fits your numbers and your temperament. Some clients split the difference: they keep the loan but earmark enough in safe assets to pay it off at any time, buying flexibility and peace of mind at once.",
      },
      {
        type: "p",
        text: "If you're weighing this decision, it's worth modeling both paths side by side before you act. Seeing the trade-offs in plain numbers usually makes the choice feel a lot less daunting.",
      },
    ],
  },
  {
    slug: "three-tax-buckets-every-retiree-should-understand",
    title: "The three tax buckets every retiree should understand",
    excerpt:
      "Where your money lives matters as much as how much you have. Understanding your three tax buckets is the first step to keeping more of it.",
    category: "Taxes",
    readingTime: "5 min read",
    date: "2026-04-02",
    dateLabel: "April 2, 2026",
    author: "The Meridian Team",
    body: [
      {
        type: "p",
        text: "Most people spend decades focused on how much they're saving. Fewer stop to ask where those savings live — and yet that question quietly shapes how much of your money you actually get to keep in retirement. Nearly every rupee you've saved sits in one of three 'tax buckets,' and each is taxed differently when you use it.",
      },
      {
        type: "h2",
        text: "Bucket 1: Tax-deferred",
      },
      {
        type: "p",
        text: "This is the big one for most salaried savers: NPS and similar retirement schemes. You claimed a tax deduction going in and the money grew without annual taxes — but a portion of the corpus is taxable at exit, and the rules require part of it to be converted into an annuity whose income is taxed at your slab rate, whether you need it structured that way or not.",
      },
      {
        type: "h2",
        text: "Bucket 2: Tax-free",
      },
      {
        type: "p",
        text: "PPF, EPF and other exempt instruments live here. Within the rules, withdrawals come out completely tax-free — growth included. This bucket is enormously valuable in retirement because it gives you a source of income that doesn't raise your taxable income, which can help manage everything from your tax slab to the surcharge on higher incomes.",
      },
      {
        type: "h2",
        text: "Bucket 3: Taxable",
      },
      {
        type: "p",
        text: "This is your regular demat account, mutual funds, and savings. There's no special tax treatment going in or out, but long-term gains are often taxed at lower capital-gains rates, and this money is fully flexible — no lock-ins, no forced annuities. It's the bucket that gives you the most control.",
      },
      {
        type: "callout",
        text: "The goal isn't to fill one bucket — it's to have meaningful balances in all three, so you can choose where each year's income comes from.",
      },
      {
        type: "h2",
        text: "Why the mix matters",
      },
      {
        type: "p",
        text: "When you have money across all three buckets, you gain something powerful: choice. In a low-income year, you might realize long-term gains cheaply or rebalance without much tax cost. In a high-income year, you might lean on tax-free PPF or EPF rupees to avoid jumping a slab. This flexibility — sometimes called 'tax diversification' — can be worth a surprising amount over a multi-decade retirement.",
      },
      {
        type: "ul",
        items: [
          "Review roughly how your savings split across the three buckets today.",
          "Consider whether PPF, EPF or other tax-free contributions make sense in your situation.",
          "Coordinate withdrawals in retirement to smooth out your tax bill over time.",
        ],
      },
      {
        type: "p",
        text: "You don't need to overhaul everything at once. But knowing which bucket each rupee sits in — and planning withdrawals with intention — is one of the highest-value, lowest-risk moves available to most retirees.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
