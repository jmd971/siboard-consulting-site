"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import { cn } from "@/lib/utils";

/* Le mouvement de l'accueil, en trois gestes. Tous se déclenchent une seule
   fois, à l'entrée dans l'écran, et deviennent instantanés quand le visiteur
   a demandé de réduire les animations. */

/* Tracés volontairement imparfaits : la boucle se referme en dépassant un
   peu son point de départ, comme un trait de stylo. */
const TRACES = {
  ovale: {
    viewBox: "0 0 200 60",
    d: "M 24 11 C 62 2, 150 1, 184 15 C 205 27, 191 52, 131 56 C 70 60, 12 55, 6 35 C 1 17, 32 6, 84 5",
  },
  cadre: {
    viewBox: "0 0 200 100",
    d: "M 12 7 C 62 2, 150 3, 190 8 C 197 30, 197 70, 191 93 C 140 99, 60 98, 9 93 C 3 70, 4 30, 12 5",
  },
} as const;

/** Cerne au stylo rouge qui se trace autour de son parent (à mettre en `relative`). */
export function Cerne({
  forme = "ovale",
  delai = 0,
}: {
  forme?: keyof typeof TRACES;
  delai?: number;
}) {
  const reduit = useReducedMotion();
  const trace = TRACES[forme];
  return (
    <svg
      aria-hidden
      viewBox={trace.viewBox}
      preserveAspectRatio="none"
      fill="none"
      className="pointer-events-none absolute inset-0 h-full w-full overflow-visible text-accent-strong"
    >
      <motion.path
        d={trace.d}
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={
          reduit
            ? { duration: 0 }
            : {
                pathLength: { duration: 0.9, delay: delai, ease: "easeInOut" },
                opacity: { duration: 0.01, delay: delai },
              }
        }
      />
    </svg>
  );
}

/** Nombre qui s'incrémente à l'entrée dans l'écran. Le texte qui suit le
    nombre (« secteurs », « % ») est rendu tel quel. */
export function Compteur({ valeur }: { valeur: string }) {
  const m = valeur.match(/^(\d+)(.*)$/);
  const aNombre = m !== null;
  const cible = m ? Number(m[1]) : 0;
  const suite = m ? m[2] : valeur;

  const ref = useRef<HTMLSpanElement>(null);
  const vu = useInView(ref, { once: true, amount: 0.8 });
  const reduit = useReducedMotion();
  const [n, setN] = useState(cible);

  useEffect(() => {
    if (!vu || reduit || !aNombre) return;
    const controle = animate(0, cible, {
      duration: 1.1,
      ease: "easeOut",
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controle.stop();
  }, [vu, reduit, aNombre, cible]);

  return (
    <span ref={ref} className="tabular-nums">
      {aNombre ? n : null}
      {suite}
    </span>
  );
}

/** Bloc qui monte légèrement en apparaissant. */
export function Monte({
  children,
  delai = 0,
  className,
}: {
  children: ReactNode;
  delai?: number;
  className?: string;
}) {
  const reduit = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={
        reduit ? { duration: 0 } : { duration: 0.6, delay: delai, ease: [0.22, 1, 0.36, 1] }
      }
    >
      {children}
    </motion.div>
  );
}

/* Les effets liés au défilement ne jouent que sur grand écran. */
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

/** Bandeau d'en-tête de section : le filet se tire de gauche à droite. */
export function EnTete({ children }: { children: ReactNode }) {
  const reduit = useReducedMotion();
  return (
    <div className="relative flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 pb-3">
      {children}
      <motion.span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-rule"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 1 }}
        transition={reduit ? { duration: 0 } : { duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

/** Bloc qui se déplie de gauche à droite : la transition vers le bandeau sombre.
    L'entrée dans l'écran est observée sur une enveloppe non rognée : un
    élément entièrement masqué par son propre rognage n'est jamais « vu ». */
export function Deplie({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const vu = useInView(ref, { once: true, amount: 0.35 });
  const reduit = useReducedMotion();
  return (
    <div ref={ref}>
      <motion.div
        className={className}
        initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
        animate={{ clipPath: vu ? "inset(0% 0% 0% 0%)" : "inset(0% 100% 0% 0%)" }}
        transition={reduit ? { duration: 0 } : { duration: 1, ease: [0.65, 0, 0.35, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/** Trait qui avance avec le défilement, le long d'une rangée d'étapes. */
export function Fil({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduit = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "start 0.45"] });
  return (
    <div ref={ref} aria-hidden className={cn("h-px w-full bg-rule", className)}>
      <motion.div
        className="h-px origin-left bg-foreground"
        style={reduit ? undefined : { scaleX: scrollYProgress }}
      />
    </div>
  );
}

/** Case qui passe de « à faire » à « installé » quand elle entre dans l'écran.
    Sans script, elle reste lisible dans son premier état. */
export function Installe({
  children,
  delai = 0,
  className,
}: {
  children: ReactNode;
  delai?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const vu = useInView(ref, { once: true, amount: 0.7 });
  const reduit = useReducedMotion();
  const fait = vu || reduit === true;
  return (
    <div
      ref={ref}
      style={reduit ? undefined : { transitionDelay: `${delai}s` }}
      className={cn(
        "rounded-sm border transition-colors duration-700",
        fait
          ? "border-foreground bg-foreground text-background"
          : "border-rule-strong bg-transparent text-foreground",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Léger décalage vertical lié au défilement, pour donner de la profondeur. */
export function Profondeur({ children, amplitude = 24 }: { children: ReactNode; amplitude?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduit = useReducedMotion();
  const grand = useGrandEcran();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [amplitude, -amplitude]);
  return (
    <motion.div ref={ref} style={grand && !reduit ? { y } : undefined}>
      {children}
    </motion.div>
  );
}

/** Bloc qui avance vers le lecteur en entrant dans l'écran. */
export function Avance({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduit = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.55"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.93, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0.55, 1]);
  return (
    <motion.div ref={ref} className={className} style={reduit ? undefined : { scale, opacity }}>
      {children}
    </motion.div>
  );
}
