import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "gold";
type Size = "sm" | "md" | "lg";

const base =
  "btn-lift inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight " +
  "cursor-pointer disabled:opacity-60 disabled:pointer-events-none";

// Dark theme: filled buttons are gold with near-black text (`text-ink` would
// be light-on-gold here — ink is the light text color in this theme).
const variants: Record<Variant, string> = {
  primary:
    "btn-sheen bg-gold text-[#0c1712] hover:bg-[color-mix(in_srgb,var(--color-gold)_85%,white)] shadow-[0_10px_30px_-12px_rgba(0,10,6,0.55)] hover:shadow-[0_16px_36px_-12px_rgba(0,10,6,0.6)]",
  secondary:
    "bg-transparent text-ink border border-[color-mix(in_srgb,var(--color-ink)_28%,transparent)] hover:border-[var(--color-gold)] hover:bg-white/10",
  ghost: "bg-transparent text-ink hover:text-gold-ink",
  // Kept as an alias of primary: callers on dark bands use variant="gold",
  // and a dedicated variant avoids cn() utility conflicts.
  gold: "btn-sheen bg-gold text-[#0c1712] hover:bg-[color-mix(in_srgb,var(--color-gold)_85%,white)] shadow-[0_10px_30px_-12px_rgba(0,10,6,0.45)] hover:shadow-[0_16px_36px_-12px_rgba(0,10,6,0.5)]",
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
