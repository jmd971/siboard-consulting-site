"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
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

/* Le livrable rendu manipulable. Tout ce qui dépend de l'entreprise est
   saisi par le visiteur, taux de transformation compris : le diagnostic
   ne travaille jamais sur des moyennes de marché, le calculateur non plus.
   Seules deux constantes sont fixes, et elles sont sourcées sous la carte :
   le coût horaire (Insee, services marchands, 2025 : 44,2 €) et les
   47 semaines travaillées (52 moins les 5 semaines de congés payés). */
const REPERES = { coutHoraire: 44, semaines: 47 };

const SOURCES = {
  insee: "https://www.insee.fr/fr/statistiques/2381340",
  banqueDeFrance:
    "https://www.banque-france.fr/fr/publications-et-statistiques/publications/rapport-de-lobservatoire-des-delais-de-paiement-2025",
};

function euros(n: number) {
  return Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, "\u00a0");
}

function MotTournant({ reduced }: { reduced: boolean }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setI((v) => (v + 1) % MOTS.length), 3200);
    return () => clearInterval(id);
  }, [reduced]);

  if (reduced) return <span className="text-accent-strong">{MOTS[0]}</span>;

  return (
    <span className="relative inline-block overflow-hidden align-bottom" style={{ minWidth: "14ch" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block text-accent-strong"
        >
          {MOTS[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function Curseur({
  id,
  n,
  label,
  mesure,
  value,
  min,
  max,
  step,
  onChange,
  cout,
  unite = "€ / an",
}: {
  id: string;
  n?: string;
  label: string;
  mesure: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  cout?: number;
  unite?: string;
}) {
  return (
    <div className="border-t border-rule px-5 py-4 sm:px-6">
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="flex min-w-0 gap-3 text-[13px] leading-snug text-foreground">
          {n ? <span className="font-mono text-xs text-muted-foreground">{n}</span> : null}
          <span className="text-pretty">{label}</span>
        </label>
        <span className="shrink-0 whitespace-nowrap font-mono text-xs text-muted-foreground">
          {mesure}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-1 h-11 w-full cursor-pointer accent-foreground"
      />
      {cout !== undefined ? (
        <p className="figure text-right text-lg font-semibold text-accent-strong">
          {euros(cout)} <span className="text-sm font-normal">{unite}</span>
        </p>
      ) : null}
    </div>
  );
}

function Calculateur() {
  const [demandes, setDemandes] = useState(17);
  const [devis, setDevis] = useState(8);
  const [heures, setHeures] = useState(6);
  const [retards, setRetards] = useState(5);
  const [vente, setVente] = useState(700);
  const [tauxDemandes, setTauxDemandes] = useState(10);
  const [tauxDevis, setTauxDevis] = useState(15);
  const [joursRetard, setJoursRetard] = useState(15);

  const coutDemandes = demandes * 12 * (tauxDemandes / 100) * vente;
  const coutDevis = devis * 12 * (tauxDevis / 100) * vente;
  const coutHeures = heures * REPERES.semaines * REPERES.coutHoraire;
  const total = coutDemandes + coutDevis + coutHeures;
  /* De la trésorerie qui dort, pas une perte : elle ne s'additionne pas. */
  const immobilise = (retards * vente * joursRetard) / 30;

  return (
    <figure className="w-full max-w-md">
      <div className="border border-rule bg-surface shadow-[0_1px_0_var(--rule),0_18px_40px_-32px_rgba(25,18,14,0.5)]">
        <div className="flex items-baseline justify-between gap-4 px-5 py-4 sm:px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
            Votre état des lieux express
          </p>
          <p className="shrink-0 whitespace-nowrap text-[11px] text-muted-foreground">30 secondes</p>
        </div>

        <Curseur
          id="calc-demandes"
          n="01"
          label="Demandes restées sans réponse"
          mesure={`${demandes} par mois`}
          value={demandes}
          min={0}
          max={60}
          step={1}
          onChange={setDemandes}
          cout={coutDemandes}
        />
        <Curseur
          id="calc-devis"
          n="02"
          label="Devis envoyés puis jamais relancés"
          mesure={`${devis} par mois`}
          value={devis}
          min={0}
          max={40}
          step={1}
          onChange={setDevis}
          cout={coutDevis}
        />
        <Curseur
          id="calc-heures"
          n="03"
          label="Ressaisie manuelle des dossiers"
          mesure={`${heures} h par semaine`}
          value={heures}
          min={0}
          max={30}
          step={1}
          onChange={setHeures}
          cout={coutHeures}
        />
        <Curseur
          id="calc-retards"
          n="04"
          label="Factures payées en retard"
          mesure={`${retards} par mois`}
          value={retards}
          min={0}
          max={40}
          step={1}
          onChange={setRetards}
          cout={immobilise}
          unite="€ immobilisés"
        />

        <div className="bg-background/60">
          <Curseur
            id="calc-vente"
            label="Valeur moyenne d’une vente"
            mesure={`${euros(vente)} €`}
            value={vente}
            min={100}
            max={5000}
            step={50}
            onChange={setVente}
          />
          <details className="border-t border-rule">
            <summary className="flex min-h-11 cursor-pointer items-center px-5 text-[13px] font-medium text-foreground underline-offset-4 hover:underline sm:px-6">
              Régler vos taux et votre retard moyen
            </summary>
            <Curseur
              id="calc-taux-demandes"
              label="Demandes perdues qui auraient abouti"
              mesure={`${tauxDemandes} %`}
              value={tauxDemandes}
              min={0}
              max={50}
              step={1}
              onChange={setTauxDemandes}
            />
            <Curseur
              id="calc-taux-devis"
              label="Devis relancés qui finissent signés"
              mesure={`${tauxDevis} %`}
              value={tauxDevis}
              min={0}
              max={60}
              step={1}
              onChange={setTauxDevis}
            />
            <Curseur
              id="calc-jours-retard"
              label="Retard moyen de paiement"
              mesure={`${joursRetard} jours`}
              value={joursRetard}
              min={0}
              max={90}
              step={5}
              onChange={setJoursRetard}
            />
          </details>
        </div>

        <div className="border-t-2 border-rule-strong px-5 py-5 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
            <p className="text-sm font-medium text-foreground">Ce que cela vous coûte</p>
            <p
              aria-live="polite"
              className="figure -rotate-[1.5deg] whitespace-nowrap border-[2.5px] border-accent-strong px-4 pb-1 pt-1.5 text-2xl font-semibold text-accent-strong [border-radius:48%_52%_46%_54%/58%_44%_56%_42%]"
            >
              {euros(total)} <span className="text-base font-normal">€ / an</span>
            </p>
          </div>
          <p className="mt-3 text-pretty text-xs leading-relaxed text-muted-foreground">
            Et {euros(immobilise)} € de trésorerie immobilisée en permanence par les retards de
            paiement. Elle ne s’ajoute pas au total.
          </p>
        </div>
      </div>

      <figcaption className="mt-3 text-pretty text-xs leading-relaxed text-muted-foreground">
        Estimation indicative, calculée sur vos réponses. Deux repères sont fixes : 44 € de
        l’heure, d’après{" "}
        <a
          href={SOURCES.insee}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-foreground"
        >
          l’Insee
        </a>{" "}
        (services marchands, 2025), et 47 semaines travaillées par an. Selon{" "}
        <a
          href={SOURCES.banqueDeFrance}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-foreground"
        >
          la Banque de France
        </a>
        , les retards de paiement privent les PME de 13 milliards d’euros de trésorerie.
      </figcaption>
      <p className="stylo mt-3 -rotate-1 text-right text-[1.375rem]">
        Votre chiffre. Le vrai diagnostic part de vos données.
      </p>
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

            <motion.ul
              custom={4}
              variants={variants}
              initial="hidden"
              animate="visible"
              className="mt-6 flex flex-col gap-x-6 gap-y-2 text-sm text-muted-foreground sm:flex-row sm:flex-wrap"
            >
              {["Premier échange gratuit", "Réponse sous 24 h", "Le diagnostic vous appartient"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-2">
                    <Check aria-hidden className="h-4 w-4 shrink-0 text-foreground" />
                    {t}
                  </li>
                ),
              )}
            </motion.ul>
          </div>

          <motion.div
            custom={5}
            variants={variants}
            initial="hidden"
            animate="visible"
            className="flex justify-start lg:col-span-5 lg:justify-end"
          >
            <Calculateur />
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
