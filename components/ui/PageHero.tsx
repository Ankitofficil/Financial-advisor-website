"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const ease = [0.22, 1, 0.36, 1] as const;

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease, delay },
        };

  return (
    <section className="relative overflow-hidden border-b hairline">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="anim-float absolute -left-40 -top-40 h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(79,174,135,0.05),transparent_70%)]" />
      </div>
      <Container className="relative pb-14 pt-14 sm:pt-20 lg:pb-20 lg:pt-24">
        <motion.p className="eyebrow" {...rise(0.02)}>
          {eyebrow}
        </motion.p>
        <motion.hr className="horizon mt-4" {...rise(0.05)} />
        <motion.h1
          className="mt-5 max-w-4xl text-h1"
          {...rise(0.1)}
        >
          {title}
        </motion.h1>
        {intro && (
          <motion.p
            className="mt-6 max-w-2xl text-lead text-muted"
            {...rise(0.16)}
          >
            {intro}
          </motion.p>
        )}
      </Container>
    </section>
  );
}
