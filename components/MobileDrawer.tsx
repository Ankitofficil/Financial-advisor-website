"use client";

import Link from "next/link";
import { X, CalendarClock } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { nav, CTA_HREF, CTA_LABEL } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

/**
 * Framer-motion mobile drawer, code-split out of the header so the animation
 * library is not on the home page's initial JS / critical path.
 */
export default function MobileDrawer({
  open,
  onClose,
  isActive,
}: {
  open: boolean;
  onClose: () => void;
  isActive: (href: string) => boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            id="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed right-0 top-0 z-50 flex h-full w-[min(86vw,360px)] flex-col bg-surface shadow-2xl lg:hidden"
            initial={reduce ? { opacity: 0 } : { x: "100%" }}
            animate={reduce ? { opacity: 1 } : { x: 0 }}
            exit={reduce ? { opacity: 0 } : { x: "100%" }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex h-20 items-center justify-between border-b hairline px-6">
              <Logo />
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" aria-hidden />
              </button>
            </div>
            <nav className="flex flex-col gap-1 px-4 py-6" aria-label="Mobile">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-4 py-3 text-lg font-medium text-ink/85 transition-colors hover:bg-white hover:text-ink",
                    isActive(item.href) && "bg-white text-ink"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto border-t hairline p-6">
              <Button href={CTA_HREF} size="lg" className="w-full">
                <CalendarClock className="h-5 w-5" aria-hidden />
                {CTA_LABEL}
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
