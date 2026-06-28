"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { HeroIllustration } from "@/components/home/Illustrations";
import { cn } from "@/lib/utils";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.12 + i * 0.12,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const noMotionVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const variants = prefersReducedMotion ? noMotionVariants : fadeUpVariants;

  return (
    <section className="relative w-full overflow-hidden bg-background py-16 sm:py-24">
      <div aria-hidden className="absolute inset-0 bg-grid-fade" />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      />

      <div className="container-page relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ── Colonne texte ── */}
          <div className="flex flex-col items-start">
            <motion.div
              custom={0}
              variants={variants}
              initial="hidden"
              animate="visible"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.07] px-3.5 py-1.5 text-xs font-medium text-primary"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Cabinet digital · Guadeloupe &amp; Île-de-France
            </motion.div>

            <motion.h1
              custom={1}
              variants={variants}
              initial="hidden"
              animate="visible"
              className="text-balance mb-6 text-4xl font-black leading-[1.0] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl"
            >
              Votre activité mérite un digital{" "}
              <span className="relative inline-block text-primary">
                <span
                  aria-hidden
                  className="absolute inset-x-[-0.05em] bottom-[0.06em] -z-10 h-[0.35em] rounded-sm bg-primary/12"
                />
                qui travaille.
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={variants}
              initial="hidden"
              animate="visible"
              className="mb-10 max-w-lg text-pretty text-base font-normal leading-relaxed text-muted-foreground sm:text-lg"
            >
              Audit, automatisation, missions de croissance. On comprend votre
              process avant de construire votre solution, pas l&apos;inverse.
            </motion.p>

            <motion.div
              custom={3}
              variants={variants}
              initial="hidden"
              animate="visible"
              className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4"
            >
              <Link
                href="/solutions"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 w-full px-7 text-base font-bold tracking-[-0.01em] hover:bg-primary/90 sm:w-auto",
                )}
              >
                Automatiser mon activité
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
              <Link
                href="/mission-90j"
                className="group inline-flex h-12 items-center justify-center gap-1.5 rounded-full border border-border px-7 text-base font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                Mission 90J
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>

            <motion.p
              custom={4}
              variants={variants}
              initial="hidden"
              animate="visible"
              className="mt-6 text-xs text-muted-foreground"
            >
              Audit digital offert · Réponse sous 24h · Sans engagement
            </motion.p>
          </div>

          {/* ── Colonne illustration ── */}
          <motion.div
            custom={5}
            variants={variants}
            initial="hidden"
            animate="visible"
            className="hidden lg:block"
          >
            <HeroIllustration className="w-full drop-shadow-sm" />
          </motion.div>

        </div>

        {/* ── Preuve sociale ── */}
        <motion.p
          custom={6}
          variants={variants}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-16 max-w-md border-t border-border/50 pt-8 text-center text-sm text-muted-foreground"
        >
          Des clients passés à la{" "}
          <span className="font-bold text-primary">1ère page Google</span>, en
          Guadeloupe et en Île-de-France.
        </motion.p>
      </div>
    </section>
  );
}
