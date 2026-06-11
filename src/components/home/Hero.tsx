"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.12 + i * 0.12,
      // ease-out-expo : décélération nette, sans rebond
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
    <section className="relative flex min-h-[640px] w-full items-center justify-center overflow-hidden bg-background sm:min-h-[720px]">
      {/* Structure : grille fine masquée. Pas de glass, pas de glow. */}
      <div aria-hidden className="absolute inset-0 bg-grid-fade" />

      {/* Bloc amber committed : aplat solide ancré en haut à droite, bords nets. */}
      <div
        aria-hidden
        className="absolute -right-24 -top-24 hidden h-[28rem] w-[28rem] rounded-full bg-primary/10 md:block"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
      />

      <div className="container-page relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            custom={0}
            variants={variants}
            initial="hidden"
            animate="visible"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.07] px-3.5 py-1.5 text-xs font-medium text-primary md:mb-10"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Cabinet digital · Guadeloupe &amp; Île-de-France
          </motion.div>

          <motion.h1
            custom={1}
            variants={variants}
            initial="hidden"
            animate="visible"
            className="text-balance mb-6 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:mb-8 md:text-6xl lg:text-7xl"
          >
            Votre activité mérite un digital{" "}
            <span className="relative inline-block whitespace-nowrap text-primary">
              <span
                aria-hidden
                className="absolute inset-x-[-0.1em] bottom-[0.08em] -z-10 h-[0.42em] rounded-sm bg-primary/15"
              />
              qui travaille pour vous.
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={variants}
            initial="hidden"
            animate="visible"
            className="mx-auto mb-10 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Audit, automatisation, missions de croissance. On comprend votre
            process avant de construire votre solution, pas l&apos;inverse.
          </motion.p>

          <motion.div
            custom={3}
            variants={variants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              href="/solutions"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 w-full px-6 text-base font-medium hover:bg-primary/90 sm:w-auto",
              )}
            >
              Automatiser mon activité
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
            <Link
              href="/mission-90j"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 w-full border-border bg-surface/40 px-6 text-base font-medium hover:bg-surface sm:w-auto",
              )}
            >
              Développer mon offre B2B
              <ArrowRight className="ml-1 h-4 w-4" />
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
      </div>
    </section>
  );
}
