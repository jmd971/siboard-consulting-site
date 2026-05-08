"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-primary/[0.15]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96] as [number, number, number, number],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border border-white/[0.08]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.05)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  );
}

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5 + i * 0.18,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  }),
};

export function Hero() {
  return (
    <section className="relative flex min-h-[680px] w-full items-center justify-center overflow-hidden bg-background sm:min-h-[760px]">
      {/* Wash chaud subtil en diagonale */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-primary/[0.07] via-transparent to-primary/[0.04] blur-3xl"
      />

      {/* Formes flottantes — palette Siboard (amber dominante + un orange chaud + un cyan/bleu très subtil) */}
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-primary/[0.18]"
          className="left-[-10%] top-[15%] md:left-[-5%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-orange-500/[0.12]"
          className="right-[-5%] top-[68%] md:right-[0%] md:top-[72%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-amber-300/[0.10]"
          className="bottom-[5%] left-[5%] md:bottom-[10%] md:left-[10%]"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-primary/[0.15]"
          className="right-[15%] top-[10%] md:right-[20%] md:top-[15%]"
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-blue-400/[0.05]"
          className="left-[20%] top-[5%] md:left-[25%] md:top-[10%]"
        />
      </div>

      <div className="container-page relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/40 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur md:mb-10"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Cabinet digital · Guadeloupe & Île-de-France
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-balance mb-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:mb-8 md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-b from-foreground to-foreground/85 bg-clip-text text-transparent">
                Votre activité mérite un digital
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-amber-200 to-primary bg-clip-text text-transparent">
                qui travaille pour vous.
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="mx-auto mb-10 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Audit, automatisation, missions de croissance. On comprend votre
              process avant de construire votre solution — pas l&apos;inverse.
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              href="/automatisation"
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
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-6 text-xs text-muted-foreground"
          >
            Audit digital offert · Réponse sous 24h · Sans engagement
          </motion.p>
        </div>
      </div>

      {/* Fondu vers le bas (transition vers la section Preuves) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40"
      />
    </section>
  );
}
