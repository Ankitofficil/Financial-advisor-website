"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, CalendarClock } from "lucide-react";
import { nav, CTA_HREF, CTA_LABEL } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

// Code-split: framer-motion only loads when the drawer is first opened.
const MobileDrawer = dynamic(() => import("@/components/MobileDrawer"), {
  ssr: false,
});

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on route change + lock body scroll while open
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      style={{ viewTransitionName: "site-header" }}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b hairline bg-[color-mix(in_srgb,var(--color-surface)_96%,white)] supports-[backdrop-filter]:bg-[color-mix(in_srgb,var(--color-surface)_82%,transparent)] supports-[backdrop-filter]:backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div
        className={cn(
          "container-x flex items-center justify-between transition-all duration-300",
          scrolled ? "h-16" : "h-20"
        )}
      >
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-active={isActive(item.href)}
              className={cn(
                "link-underline inline-flex min-h-[44px] items-center text-[0.95rem] font-medium text-ink/85 transition-colors hover:text-ink",
                isActive(item.href) && "text-ink"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Desktop-only (matches the lg nav breakpoint): on mobile/tablet
              the CTA lives in the drawer and the bottom bar instead.
              Wrapper div, not className on Button: the base `inline-flex`
              utility would win over `hidden` in the cascade (cn() doesn't
              resolve conflicts). */}
          <div className="hidden lg:block">
            <Button href={CTA_HREF} size="sm">
              <CalendarClock className="h-4 w-4" aria-hidden />
              {CTA_LABEL}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-drawer"
          >
            <Menu className="h-6 w-6" aria-hidden />
          </button>
        </div>
      </div>

      <MobileDrawer open={open} onClose={() => setOpen(false)} isActive={isActive} />
    </header>
  );
}
