"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Lightweight scroll reveal using IntersectionObserver + CSS (no animation
 * library on the critical path). Elements are rendered in the SSR HTML and only
 * their transform/opacity transitions in, so they never gate first paint / LCP.
 * Honors prefers-reduced-motion (CSS disables the transition, JS reveals immediately).
 */

function useInViewOnce<T extends HTMLElement>(rootMargin = "0px 0px -12% 0px") {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { rootMargin, threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return { ref, shown };
}

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "header" | "figure";
};

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  const { ref, shown } = useInViewOnce<HTMLElement>();
  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={cn("reveal", shown && "reveal-in", className)}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}

export function RevealGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, shown } = useInViewOnce<HTMLDivElement>("0px 0px -10% 0px");
  return (
    <div
      ref={ref}
      data-shown={shown}
      className={cn("reveal-group", className)}
    >
      {children}
    </div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("reveal-item", className)}>{children}</div>;
}
