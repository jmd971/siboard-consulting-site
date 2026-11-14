"use client";

import Link from "next/link";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import { buttonVariants } from "@/components/ui/button";
import { Cerne } from "@/components/home/Mouvement";
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
    <div className="border-t border-rule px-5 py-3 sm:px-6">
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="flex min-w-0 gap-3 text-[13px] leading-snug text-foreground">
          {n ? <span className="font-mono text-xs text-muted-foreground">{n}</span> : null}
          <span className="text-pretty">{label}</span>
        </label>
        {cout !== undefined ? (
          <p className="figure shrink-0 whitespace-nowrap text-base font-semibold text-accent-strong">
            {euros(cout)} <span className="text-xs font-normal">{unite}</span>
          </p>
        ) : null}
      </div>
      <div className="flex items-center gap-3">
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="h-11 min-w-0 flex-1 cursor-pointer accent-foreground"
        />
        <span className="w-[6.25rem] shrink-0 whitespace-nowrap text-right font-mono text-xs text-muted-foreground">
          {mesure}
        </span>
      </div>
    </div>
  );
}

function Champ({
  id,
  label,
  suffixe,
  value,
  min,
  max,
  onChange,
}: {
  id: string;
  label: string;
  suffixe: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="block min-h-[2.4em] text-[11px] leading-tight text-muted-foreground">
        {label}
      </label>
      <div className="mt-1 flex items-center gap-1.5">
        <input
          id={id}
          type="number"
          inputMode="numeric"
          min={min}
          max={max}
          value={value}
          onChange={(e) => {
            const v = Number(e.target.value);
            if (Number.isFinite(v)) onChange(Math.min(max, Math.max(min, v)));
          }}
          className="h-11 w-full min-w-0 rounded-sm border border-rule bg-surface px-2 font-mono text-base text-foreground"
        />
        <span className="font-mono text-xs text-muted-foreground">{suffixe}</span>
      </div>
    </div>
  );
}

function Sources({ className }: { className?: string }) {
  return (
    <p className={cn("text-pretty text-xs leading-relaxed text-muted-foreground", className)}>
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
    </p>
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

  /* La feuille se remplit toute seule à l'arrivée : les volumes montent de
     zéro jusqu'à l'exemple, puis le total est cerné. Dès que le visiteur
     touche un réglage, ce sont ses valeurs qui comptent. */
  const ref = useRef<HTMLElement>(null);
  const vu = useInView(ref, { once: true, amount: 0.2 });
  const reduit = useReducedMotion();
  const [rempli, setRempli] = useState(0);
  const [touche, setTouche] = useState(false);
  useEffect(() => {
    if (!vu || reduit) return;
    const controle = animate(0, 1, {
      duration: 1.8,
      delay: 0.9,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: setRempli,
    });
    return () => controle.stop();
  }, [vu, reduit]);
  const f = reduit || touche ? 1 : rempli;
  const regler = (set: (v: number) => void) => (v: number) => {
    setTouche(true);
    set(v);
  };

  const d = Math.round(demandes * f);
  const q = Math.round(devis * f);
  const h = Math.round(heures * f);
  const r = Math.round(retards * f);

  const coutDemandes = d * 12 * (tauxDemandes / 100) * vente;
  const coutDevis = q * 12 * (tauxDevis / 100) * vente;
  const coutHeures = h * REPERES.semaines * REPERES.coutHoraire;
  const total = coutDemandes + coutDevis + coutHeures;
  /* De la trésorerie qui dort, pas une perte : elle ne s'additionne pas. */
  const immobilise = (r * vente * joursRetard) / 30;

  return (
    <figure ref={ref} className="w-full max-w-md">
      <div className="border border-rule bg-surface shadow-[0_1px_0_var(--rule),0_30px_60px_-34px_rgba(25,18,14,0.55)]">
        <div className="flex items-baseline justify-between gap-4 px-5 py-3.5 sm:px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
            Votre état des lieux express
          </p>
          <p className="shrink-0 whitespace-nowrap text-[11px] text-muted-foreground">30 secondes</p>
        </div>

        <Curseur
          id="calc-demandes"
          n="01"
          label="Demandes restées sans réponse"
          mesure={`${d} par mois`}
          value={d}
          min={0}
          max={60}
          step={1}
          onChange={regler(setDemandes)}
          cout={coutDemandes}
        />
        <Curseur
          id="calc-devis"
          n="02"
          label="Devis envoyés puis jamais relancés"
          mesure={`${q} par mois`}
          value={q}
          min={0}
          max={40}
          step={1}
          onChange={regler(setDevis)}
          cout={coutDevis}
        />
        <Curseur
          id="calc-heures"
          n="03"
          label="Ressaisie manuelle des dossiers"
          mesure={`${h} h par semaine`}
          value={h}
          min={0}
          max={30}
          step={1}
          onChange={regler(setHeures)}
          cout={coutHeures}
        />
        <Curseur
          id="calc-retards"
          n="04"
          label="Factures payées en retard"
          mesure={`${r} par mois`}
          value={r}
          min={0}
          max={40}
          step={1}
          onChange={regler(setRetards)}
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
            onChange={regler(setVente)}
          />
          <details className="border-t border-rule">
            <summary className="flex min-h-11 cursor-pointer items-center px-5 text-[13px] font-medium text-foreground underline-offset-4 hover:underline sm:px-6">
              Régler vos taux et votre retard moyen
            </summary>
            <div className="grid grid-cols-3 gap-3 px-5 pb-4 sm:px-6">
              <Champ
                id="calc-taux-demandes"
                label="Demandes perdues qui auraient abouti"
                suffixe="%"
                value={tauxDemandes}
                min={0}
                max={100}
                onChange={regler(setTauxDemandes)}
              />
              <Champ
                id="calc-taux-devis"
                label="Devis relancés qui finissent signés"
                suffixe="%"
                value={tauxDevis}
                min={0}
                max={100}
                onChange={regler(setTauxDevis)}
              />
              <Champ
                id="calc-jours-retard"
                label="Retard moyen de paiement"
                suffixe="j"
                value={joursRetard}
                min={0}
                max={180}
                onChange={regler(setJoursRetard)}
              />
            </div>
          </details>
        </div>

        <div className="border-t-2 border-rule-strong px-5 py-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
            <p className="text-sm font-medium text-foreground">Ce que cela vous coûte</p>
            <p
              aria-live="polite"
              className="figure relative -rotate-[1.5deg] whitespace-nowrap px-5 pb-1.5 pt-2 text-2xl font-semibold text-accent-strong"
            >
              <Cerne forme="ovale" delai={rempli >= 1 || touche ? 0.2 : 2.7} />
              {euros(total)} <span className="text-base font-normal">€ / an</span>
            </p>
          </div>
          <p className="mt-2 text-pretty text-xs leading-relaxed text-muted-foreground">
            Et {euros(immobilise)} € de trésorerie immobilisée en permanence par les retards de
            paiement. Elle ne s’ajoute pas au total.
          </p>
        </div>
      </div>

      {/* Sur grand écran animé, ces deux lignes passent dans la colonne de gauche. */}
      <figcaption className="mt-3 motion-safe:lg:hidden">
        <Sources />
      </figcaption>
      <p className="stylo mt-3 -rotate-1 text-right text-[1.375rem] motion-safe:lg:hidden">
        Votre chiffre. Le vrai diagnostic part de vos données.
      </p>
    </figure>
  );
}

/* Grand écran : la scène ne s'anime au défilement qu'à partir de 1024 px. */
const GRAND = "(min-width: 1024px)";
function abonner(rappel: () => void) {
  const mq = window.matchMedia(GRAND);
  mq.addEventListener("change", rappel);
  return () => mq.removeEventListener("change", rappel);
}
function useGrandEcran() {
  return useSyncExternalStore(
    abonner,
    () => window.matchMedia(GRAND).matches,
    () => false,
  );
}

/* Une ligne de titre qui se lève derrière un masque. */
function Ligne({ children, rang, anime }: { children: React.ReactNode; rang: number; anime: boolean }) {
  return (
    <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
      <motion.span
        className="block"
        initial={anime ? { y: "108%" } : false}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay: 0.15 + rang * 0.12, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const prefersReduced = useReducedMotion();
  const reduced = prefersReduced ?? false;
  const variants = reduced ? noMotion : fadeUp;
  const grand = useGrandEcran();
  /* La scène : plein écran épinglé, feuille en perspective qui se redresse
     au défilement pendant que le titre laisse la place à l'invitation. Elle
     n'existe que sur grand écran et sans réduction des animations. Sa mise
     en page est portée par les classes `motion-safe:lg:`, donc identique au
     rendu serveur : seuls les mouvements dépendent du script. */
  const scene = grand && !reduced;

  const epingle = useRef<HTMLDivElement>(null);
  const feuille = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: epingle, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });

  /* La feuille doit tenir dans l'écran, réglages ouverts compris. */
  const ajust = useMotionValue(1);
  useEffect(() => {
    const el = feuille.current;
    if (!el) return;
    const mesurer = () => {
      const dispo = window.innerHeight - 64 - 136;
      ajust.set(Math.min(1, dispo / el.offsetHeight));
    };
    mesurer();
    const ro = new ResizeObserver(mesurer);
    ro.observe(el);
    window.addEventListener("resize", mesurer);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", mesurer);
    };
  }, [ajust]);

  const titreOpacity = useTransform(p, [0.1, 0.42], [1, 0]);
  const titreY = useTransform(p, [0.1, 0.42], [0, -48]);
  const titrePE = useTransform(p, (v) => (v > 0.42 ? "none" : "auto"));
  const suiteOpacity = useTransform(p, [0.48, 0.78], [0, 1]);
  const suiteY = useTransform(p, [0.48, 0.78], [28, 0]);
  const suitePE = useTransform(p, (v) => (v < 0.6 ? "none" : "auto"));
  const rotateY = useTransform(p, [0, 0.62], [-15, 0]);
  const rotateX = useTransform(p, [0, 0.62], [5, 0]);
  const scale = useTransform([p, ajust], ([v, a]: number[]) => a * (0.88 + 0.12 * Math.min(1, v / 0.62)));
  const dosOpacity = useTransform(p, [0, 0.5], [1, 0]);
  const dosX = useTransform(p, [0, 0.62], [26, 0]);
  const fondY = useTransform(p, [0, 1], [0, -70]);
  const indiceOpacity = useTransform(p, [0, 0.08], [1, 0]);

  return (
    <section className="relative w-full bg-background">
      <div ref={epingle} className="relative motion-safe:lg:h-[190svh]">
        <div className="relative overflow-hidden motion-safe:lg:sticky motion-safe:lg:top-16 motion-safe:lg:flex motion-safe:lg:h-[calc(100svh-4rem)] motion-safe:lg:flex-col">
          <motion.div
            aria-hidden
            style={scene ? { y: fondY } : undefined}
            className="pointer-events-none absolute inset-x-0 -bottom-24 top-0 bg-grid-fade"
          />

          <div className="container-page relative z-10 flex w-full flex-1 flex-col pb-14 pt-10 motion-safe:lg:pb-8 motion-safe:lg:pt-8">
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

            <div className="grid flex-1 items-center gap-14 pt-10 lg:grid-cols-12 lg:gap-16 motion-safe:lg:pt-0">
              <div className="relative lg:col-span-7">
                <motion.div
                  style={scene ? { opacity: titreOpacity, y: titreY, pointerEvents: titrePE } : undefined}
                  className="flex min-h-[calc(100svh-13rem)] flex-col justify-center lg:min-h-0"
                >
                  <h1 className="text-[2.25rem] font-extrabold leading-[1.05] tracking-[-0.035em] text-foreground sm:text-5xl lg:text-[4.25rem]">
                    <Ligne rang={0} anime={!reduced}>
                      Chaque semaine,
                    </Ligne>
                    <Ligne rang={1} anime={!reduced}>
                      votre activité perd
                    </Ligne>
                    <Ligne rang={2} anime={!reduced}>
                      <MotTournant reduced={reduced} />
                    </Ligne>
                  </h1>

                  <motion.p
                    custom={5}
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    className="prose-report mt-7 max-w-xl text-pretty text-muted-foreground"
                  >
                    On regarde comment vous travaillez vraiment, on chiffre ce que ces pertes vous
                    coûtent, puis on construit les systèmes qui les arrêtent.
                  </motion.p>

                  <motion.div
                    custom={6}
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
                  >
                    <Link
                      href="/etat-des-lieux"
                      className={cn(
                        buttonVariants({ size: "lg" }),
                        "group h-12 w-full rounded-sm px-6 text-base font-semibold hover:bg-primary/90 sm:w-auto",
                      )}
                    >
                      Demander un état des lieux
                      <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                      href="/mission-90j"
                      className="group inline-flex h-12 min-h-11 items-center justify-center gap-1.5 rounded-sm border border-rule-strong px-6 text-base font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
                    >
                      Mission 90J
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </motion.div>

                  <motion.ul
                    custom={7}
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
                </motion.div>

                {/* L'invitation : remplace le titre pendant que la feuille avance. */}
                <motion.div
                  style={scene ? { opacity: suiteOpacity, y: suiteY, pointerEvents: suitePE } : undefined}
                  className="mt-4 motion-safe:lg:absolute motion-safe:lg:inset-0 motion-safe:lg:mt-0 motion-safe:lg:flex motion-safe:lg:flex-col motion-safe:lg:justify-center motion-safe:lg:opacity-0"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    À vous
                  </p>
                  <h2 className="mt-4 text-3xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-4xl lg:text-[3.25rem]">
                    Et chez vous, combien ?
                  </h2>
                  <p className="prose-report mt-5 max-w-lg text-pretty text-muted-foreground">
                    Déplacez les curseurs. Le calcul se fait avec vos volumes, vos taux et votre
                    panier moyen.
                  </p>
                  <p className="stylo mt-7 hidden -rotate-1 text-[1.625rem] motion-safe:lg:block">
                    Votre chiffre. Le vrai diagnostic part de vos données.
                  </p>
                  <Sources className="mt-7 hidden max-w-md motion-safe:lg:block" />
                </motion.div>
              </div>

              <motion.div
                custom={8}
                variants={variants}
                initial="hidden"
                animate="visible"
                className="flex justify-start lg:col-span-5 lg:justify-end motion-safe:lg:[perspective:1500px]"
              >
                <motion.div
                  ref={feuille}
                  style={scene ? { rotateY, rotateX, scale } : undefined}
                  className="relative w-full max-w-md will-change-transform motion-safe:lg:origin-center"
                >
                  {/* Une seconde feuille derrière, pour l'épaisseur du dossier */}
                  <motion.div
                    aria-hidden
                    style={scene ? { opacity: dosOpacity, x: dosX } : undefined}
                    className="pointer-events-none absolute inset-0 hidden translate-y-5 rotate-[2.2deg] border border-rule bg-surface-elevated shadow-[0_30px_60px_-36px_rgba(25,18,14,0.5)] motion-safe:lg:block"
                  />
                  <div className="relative">
                    <Calculateur />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <motion.div
            aria-hidden
            style={scene ? { opacity: indiceOpacity } : undefined}
            className="pointer-events-none absolute inset-x-0 bottom-4 z-10 hidden flex-col items-center gap-2 motion-safe:lg:flex"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Faites défiler
            </span>
            <span className="relative h-7 w-px overflow-hidden bg-rule">
              <span className="absolute inset-x-0 top-0 h-3 animate-[indice_1.8s_ease-in-out_infinite] bg-foreground" />
            </span>
          </motion.div>
        </div>
      </div>

      {/* Bandeau clients, en texte réglé plutôt qu'en pastilles */}
      <div className="container-page relative z-10 pb-14">
        <div className="border-t border-rule pt-5">
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
        </div>
      </div>
    </section>
  );
}
