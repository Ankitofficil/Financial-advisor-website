"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { processSteps } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div ref={ref} className="relative">
      {/* Rail (mobile: left; desktop: center) */}
      <div
        aria-hidden
        className="absolute bottom-0 top-2 left-[22px] w-px bg-[color-mix(in_srgb,var(--color-ink)_12%,transparent)] md:left-1/2 md:-translate-x-1/2"
      />
      {/* Animated gold progress line */}
      <motion.div
        aria-hidden
        className="absolute top-2 left-[22px] w-px origin-top bg-gold md:left-1/2 md:-translate-x-1/2"
        style={{
          bottom: 0,
          scaleY: reduce ? 1 : progress,
        }}
      />

      <ol className="space-y-14 md:space-y-24">
        {processSteps.map((step, i) => {
          const rightSide = i % 2 === 1;
          return (
            <li key={step.n} className="relative">
              {/* Node */}
              <motion.span
                aria-hidden
                initial={reduce ? false : { scale: 0.4, opacity: 0 }}
                whileInView={reduce ? undefined : { scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "0px 0px -30% 0px" }}
                transition={{ duration: 0.5, ease }}
                className="absolute top-1 left-[13px] z-10 flex h-[19px] w-[19px] items-center justify-center rounded-full border-2 border-gold bg-surface md:left-1/2 md:-translate-x-1/2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              </motion.span>

              {/* Card */}
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 26 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -20% 0px" }}
                transition={{ duration: 0.6, ease }}
                className={[
                  "pl-14 md:w-1/2 md:pl-0",
                  rightSide
                    ? "md:ml-auto md:pl-16 md:text-left"
                    : "md:pr-16 md:text-right",
                ].join(" ")}
              >
                <div className="rounded-[var(--radius-lg)] border hairline bg-card p-7 shadow-[0_20px_44px_-30px_rgba(11,31,58,0.4)]">
                  <div
                    className={[
                      "flex items-center gap-3",
                      rightSide ? "" : "md:flex-row-reverse",
                    ].join(" ")}
                  >
                    <span className="font-serif text-3xl text-gold-ink">
                      {step.n}
                    </span>
                    <span className="rounded-full bg-[color-mix(in_srgb,var(--color-ink)_6%,transparent)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="mt-4 text-h3">{step.title}</h3>
                  <p className="mt-1 font-serif text-lg text-slate">
                    {step.summary}
                  </p>
                  <p className="mt-3 text-muted">{step.detail}</p>
                </div>
              </motion.div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
