import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "gold";
type Size = "sm" | "md" | "lg";

const base =
  "btn-lift inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight " +
  "cursor-pointer disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "btn-sheen bg-ink text-white hover:bg-slate shadow-[0_10px_30px_-12px_rgba(59,18,32,0.55)] hover:shadow-[0_16px_36px_-12px_rgba(59,18,32,0.6)]",
  secondary:
    "bg-transparent text-ink border border-[color-mix(in_srgb,var(--color-ink)_22%,transparent)] hover:border-[var(--color-gold)] hover:bg-white",
  ghost: "bg-transparent text-ink hover:text-gold-ink",
  // For dark bands: champagne CTA. A dedicated variant because cn() doesn't
  // resolve utility conflicts, so overriding primary's bg-ink via className
  // is unreliable.
  gold: "btn-sheen bg-gold text-ink hover:bg-[color-mix(in_srgb,var(--color-gold)_85%,white)] shadow-[0_10px_30px_-12px_rgba(59,18,32,0.45)] hover:shadow-[0_16px_36px_-12px_rgba(59,18,32,0.5)]",
};

// min-height lives here (not in base) so sizes can set it without a
// same-property cascade conflict.
const sizes: Record<Size, string> = {
  sm: "min-h-[40px] px-4 py-2 text-[0.875rem]",
  md: "min-h-[44px] px-5 py-2.5 text-[0.95rem]",
  lg: "min-h-[44px] px-7 py-3.5 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: CommonProps &
  ({ href: string } & React.ComponentProps<typeof Link>) & {
    href: string;
  }) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function ButtonEl({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </button>
  );
}
