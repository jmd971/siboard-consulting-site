"use client";

import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

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
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const noMotionVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

const ROTATING_WORDS = ["des prospects.", "des devis.", "des heures.", "des clients."];

const CLIENT_LOGOS = [
  { name: "Odyssée by Béa",        initials: "OB",  color: "#5C4EFF" },
  { name: "Sacodif",               initials: "SC",  color: "#FF5C35" },
  { name: "Evolutia Formation",    initials: "EF",  color: "#5C4EFF" },
  { name: "DFP France",            initials: "DF",  color: "#12122A" },
  { name: "Magik33 Studio",        initials: "M33", color: "#FF5C35" },
  { name: "Pôle Santé Sud",        initials: "PSS", color: "#5C4EFF" },
  { name: "Axiora Consulting",     initials: "AC",  color: "#12122A" },
  { name: "Fast Computer Company", initials: "FCC", color: "#FF5C35" },
];

const LOGOS_DOUBLED = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

function RotatingWord({ reduced }: { reduced: boolean }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % ROTATING_WORDS.length), 2800);
    return () => clearInterval(id);
  }, [reduced]);

  if (reduced) {
    return <span className="text-primary">{ROTATING_WORDS[0]}</span>;
  }

  return (
    <span className="relative inline-block overflow-hidden align-bottom" style={{ minWidth: "14ch" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block text-primary"
        >
          <span
            aria-hidden
            className="absolute inset-x-[-0.05em] bottom-[0.06em] -z-10 h-[0.35em] rounded-sm bg-primary/12"
          />
          {ROTATING_WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-lg">
      {/* Glow */}
      <div className="absolute -inset-4 rounded-3xl bg-primary/8 blur-2xl" />

      {/* Browser chrome */}
      <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-background shadow-2xl shadow-primary/10">
        {/* Top bar */}
        <div className="flex items-center gap-2 border-b border-border/40 bg-surface/80 px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          </div>
          <div className="mx-auto flex items-center gap-2 rounded-md border border-border/40 bg-background/60 px-3 py-1">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-[10px] text-muted-foreground">siboard-consulting.fr/dashboard</span>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-5">
          {/* Header row */}
          <div className="mb-5 flex items-center justify-between">
            <div>
              <div className="h-3 w-28 rounded bg-foreground/80" />
              <div className="mt-1.5 h-2 w-20 rounded bg-muted-foreground/40" />
            </div>
            <div className="h-8 w-24 rounded-lg bg-primary/90 flex items-center justify-center">
              <div className="h-2 w-14 rounded bg-white/80" />
            </div>
          </div>

          {/* KPI cards */}
          <div className="mb-5 grid grid-cols-3 gap-3">
            {[
              { label: "Position Google", value: "#1", color: "text-primary", bg: "bg-primary/8" },
              { label: "Avis clients", value: "4.9★", color: "text-accent", bg: "bg-accent/8" },
              { label: "RDV ce mois", value: "+38%", color: "text-green-600", bg: "bg-green-500/8" },
            ].map((kpi) => (
              <div key={kpi.label} className={`rounded-xl ${kpi.bg} p-3`}>
                <div className="text-[10px] text-muted-foreground">{kpi.label}</div>
                <div className={`mt-1 text-sm font-black ${kpi.color}`}>{kpi.value}</div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="mb-4 rounded-xl border border-border/30 bg-surface/60 p-3">
            <div className="mb-2 flex items-center justify-between">
              <div className="h-2 w-20 rounded bg-foreground/50" />
              <div className="h-2 w-10 rounded bg-primary/40" />
            </div>
            <div className="flex items-end gap-1.5 h-16">
              {[30, 45, 35, 60, 50, 75, 65, 90, 80, 100, 88, 95].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t"
                  style={{
                    height: `${h}%`,
                    backgroundColor: i >= 9 ? "#5C4EFF" : `rgba(92,78,255,${0.15 + i * 0.04})`,
                  }}
                />
              ))}
            </div>
            <div className="mt-1.5 flex justify-between">
              {["Jan", "Avr", "Juil", "Oct"].map((m) => (
                <div key={m} className="text-[8px] text-muted-foreground">{m}</div>
              ))}
            </div>
          </div>

          {/* Activity list */}
          <div className="space-y-2">
            {[
              { text: "Nouveau RDV — Odyssée by Béa", dot: "bg-primary", time: "Il y a 2 min" },
              { text: "Avis Google 5★ reçu — Sacodif", dot: "bg-accent", time: "Il y a 15 min" },
              { text: "Relance client envoyée — DFP France", dot: "bg-green-500", time: "Il y a 1h" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2.5 rounded-lg bg-surface/40 px-3 py-2">
                <div className={`h-1.5 w-1.5 shrink-0 rounded-full ${item.dot}`} />
                <div className="min-w-0 flex-1 truncate text-[10px] text-foreground/70">{item.text}</div>
                <div className="shrink-0 text-[9px] text-muted-foreground">{item.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -bottom-3 -right-3 flex items-center gap-2 rounded-xl border border-primary/20 bg-background px-3 py-2 shadow-lg">
        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-primary" />
        </div>
        <div>
          <div className="text-[9px] text-muted-foreground">Position Google</div>
          <div className="text-xs font-bold text-primary">#1 · 6 clients</div>
        </div>
      </div>
    </div>
  );
}

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
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.07] px-3.5 py-1.5 text-xs font-medium text-primary"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Cabinet digital · Guadeloupe &amp; Île-de-France
            </motion.div>

            {/* GPS coordinates */}
            <motion.div
              custom={0}
              variants={variants}
              initial="hidden"
              animate="visible"
              className="mb-4 flex items-center gap-3 text-[10px] font-mono text-muted-foreground/60"
            >
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                16°14&apos;N Guadeloupe
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                48°51&apos;N Île-de-France
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={variants}
              initial="hidden"
              animate="visible"
              className="text-balance mb-6 text-4xl font-black leading-[1.1] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl"
            >
              Chaque semaine, votre activité perd{" "}
              <RotatingWord reduced={prefersReducedMotion ?? false} />
            </motion.h1>

            <motion.p
              custom={2}
              variants={variants}
              initial="hidden"
              animate="visible"
              className="mb-10 max-w-lg text-pretty text-base font-normal leading-relaxed text-muted-foreground sm:text-lg"
            >
              On regarde comment vous travaillez vraiment, on chiffre ce que ces
              pertes vous coûtent, puis on construit les systèmes qui les arrêtent.
            </motion.p>

            <motion.div
              custom={3}
              variants={variants}
              initial="hidden"
              animate="visible"
              className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4"
            >
              <Link
                href="/etat-des-lieux"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 w-full px-7 text-base font-bold tracking-[-0.01em] hover:bg-primary/90 sm:w-auto",
                )}
              >
                Demander un état des lieux
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
              Premier échange gratuit · Réponse sous 24h · Le diagnostic vous appartient
            </motion.p>
          </div>

          {/* ── Colonne mockup ── */}
          <motion.div
            custom={5}
            variants={variants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex lg:justify-end"
          >
            <DashboardMockup />
          </motion.div>

        </div>

        {/* ── Logo bar clients ── */}
        <motion.div
          custom={6}
          variants={variants}
          initial="hidden"
          animate="visible"
          className="mt-16 border-t border-border/50 pt-8"
        >
          <p className="mb-5 text-center text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/60">
            Ils nous font confiance
          </p>

          <div className="relative overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24"
            />

            <div
              className="flex animate-logo-scroll gap-8 sm:gap-12"
              style={prefersReducedMotion ? { animationPlayState: "paused" } : undefined}
            >
              {LOGOS_DOUBLED.map((client, i) => (
                <div
                  key={i}
                  className="flex shrink-0 items-center gap-2.5 rounded-xl border border-border/40 bg-surface/40 px-4 py-2.5 transition-colors hover:border-primary/20 hover:bg-surface/80"
                >
                  <div
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-md text-[10px] font-bold text-white"
                    style={{ backgroundColor: client.color }}
                  >
                    {client.initials}
                  </div>
                  <span className="whitespace-nowrap text-sm font-medium text-foreground/70">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
