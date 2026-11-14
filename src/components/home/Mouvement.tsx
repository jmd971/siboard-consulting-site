"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";

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
