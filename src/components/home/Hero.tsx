"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.08 + i * 0.09, ease: [0.16, 1, 0.3, 1] },
  }),
};
const noMotion: Variants = { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } };

const MOTS = ["des prospects.", "des devis.", "des heures.", "des clients."];

const CLIENTS = [
  "Odyssée by Béa",
  "Sacodif",
  "Évolutia Formation",
  "DFP France",
  "Magik33 Studio",
  "Pôle Santé Sud",
  "Axiora Consulting",
  "Fast Computer Company",
];

/* Extrait du livrable réel. Données d'exemple, signalées comme telles :
   le site vend un document, il doit montrer ce document. */
const CONSTATS = [
  { n: "01", titre: "Demandes restées sans réponse au-delà de 48 h", mesure: "17 par mois", cout: "14 200" },
  { n: "02", titre: "Devis envoyés puis jamais relancés", mesure: "1 sur 3", cout: "9 600" },
  { n: "03", titre: "Ressaisie manuelle des dossiers clients", mesure: "6 h par semaine", cout: "11 400" },
];

function MotTournant({ reduced }: { reduced: boolean }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setI((v) => (v + 1) % MOTS.length), 3200);
    return () => clearInterval(id);
  }, [reduced]);

  if (reduced) return <span className="text-primary">{MOTS[0]}</span>;

  return (
    <span className="relative inline-block overflow-hidden align-bottom" style={{ minWidth: "14ch" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block text-primary"
        >
          {MOTS[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function Livrable() {
  return (
    <figure className="w-full max-w-md">
      <div className="border border-rule bg-surface shadow-[0_1px_0_var(--rule),0_18px_40px_-32px_rgba(25,18,14,0.5)]">
        {/* En-tête du document */}
        <div className="flex items-baseline justify-between gap-4 border-b border-rule px-6 py-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
            État des lieux
          </p>
          <p className="text-[11px] text-muted-foreground">Extrait</p>
        </div>

        <div className="flex items-baseline justify-between gap-4 px-6 pb-4 pt-4">
          <p className="text-sm text-muted-foreground">Entreprise de services, 8 personnes</p>
          <p className="text-sm text-muted-foreground">Août 2026</p>
        </div>

        {/* Constats chiffrés */}
        <ol>
          {CONSTATS.map((c) => (
            <li key={c.n} className="border-t border-rule px-6 py-4">
              <div className="flex gap-4">
                <span className="figure pt-0.5 text-xs text-muted-foreground">{c.n}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-pretty text-[13px] leading-snug text-foreground">{c.titre}</p>
                  <div className="mt-2 flex items-baseline justify-between gap-3">
                    <span className="text-xs text-muted-foreground">{c.mesure}</span>
                    <span className="figure whitespace-nowrap text-lg font-semibold text-accent-strong">
                      {c.cout} <span className="text-sm font-normal">€ / an</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>

        {/* Total */}
        <div className="flex items-baseline justify-between gap-4 border-t-2 border-rule-strong px-6 py-5">
          <p className="text-sm font-medium text-foreground">Ce que cela vous coûte</p>
          <p className="figure whitespace-nowrap text-2xl font-semibold text-accent-strong">
            35 200 <span className="text-base font-normal">€ / an</span>
          </p>
        </div>
      </div>

      <figcaption className="mt-3 text-xs text-muted-foreground">
        Données d&apos;exemple. Le vôtre est calculé à partir de vos chiffres.
      </figcaption>
    </figure>
  );
}

export function Hero() {
  const prefersReduced = useReducedMotion();
  const reduced = prefersReduced ?? false;
  const variants = reduced ? noMotion : fadeUp;

  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-fade" />

      <div className="container-page relative z-10 pb-16 pt-12 sm:pb-20 sm:pt-16">
        {/* Ligne d'en-tête, comme le bandeau d'un rapport */}
        <motion.div
          custom={0}
          variants={variants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule pb-3"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
            Cabinet Siboard
          </p>
          <p className="text-[11px] text-muted-foreground">
            Guadeloupe, Martinique, Guyane, Île-de-France
          </p>
        </motion.div>

        <div className="grid items-start gap-12 pt-12 lg:grid-cols-12 lg:gap-16 lg:pt-16">
          <div className="lg:col-span-7">
            <motion.h1
              custom={1}
              variants={variants}
              initial="hidden"
              animate="visible"
              className="text-balance text-[2.25rem] font-extrabold leading-[1.05] tracking-[-0.035em] text-foreground sm:text-5xl lg:text-[3.75rem]"
            >
              Chaque semaine, votre activité perd{" "}
              <MotTournant reduced={reduced} />
            </motion.h1>

            <motion.p
              custom={2}
              variants={variants}
              initial="hidden"
              animate="visible"
              className="prose-report mt-7 max-w-xl text-pretty text-muted-foreground"
            >
              On regarde comment vous travaillez vraiment, on chiffre ce que ces pertes vous
              coûtent, puis on construit les systèmes qui les arrêtent.
            </motion.p>

            <motion.div
              custom={3}
              variants={variants}
              initial="hidden"
              animate="visible"
              className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            >
              <Link
                href="/etat-des-lieux"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 w-full rounded-sm px-6 text-base font-semibold hover:bg-primary/90 sm:w-auto",
                )}
              >
                Demander un état des lieux
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
              <Link
                href="/mission-90j"
                className="group inline-flex h-12 min-h-11 items-center justify-center gap-1.5 rounded-sm border border-rule-strong px-6 text-base font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
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
              className="mt-5 text-sm text-muted-foreground"
            >
              Premier échange gratuit. Réponse sous 24 h. Le diagnostic vous appartient.
            </motion.p>
          </div>

          <motion.div
            custom={5}
            variants={variants}
            initial="hidden"
            animate="visible"
            className="flex justify-start lg:col-span-5 lg:justify-end"
          >
            <Livrable />
          </motion.div>
        </div>

        {/* Bandeau clients, en texte réglé plutôt qu'en pastilles */}
        <motion.div
          custom={6}
          variants={variants}
          initial="hidden"
          animate="visible"
          className="mt-16 border-t border-rule pt-5"
        >
          <p className="mb-4 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Ils nous font confiance
          </p>
          <div className="relative overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent"
            />
            <div
              className="flex animate-logo-scroll gap-10 whitespace-nowrap sm:gap-14"
              style={reduced ? { animationPlayState: "paused" } : undefined}
            >
              {[...CLIENTS, ...CLIENTS].map((nom, i) => (
                <span key={i} className="shrink-0 text-sm font-medium text-foreground/70">
                  {nom}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
