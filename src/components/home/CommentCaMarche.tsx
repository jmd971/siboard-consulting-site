"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

function AuditIllustration() {
  return (
    <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="15" width="62" height="72" rx="8" fill="rgba(92,78,255,0.15)" stroke="#5C4EFF" strokeWidth="1.5" />
      <rect x="38" y="8" width="26" height="14" rx="4" fill="#12122A" stroke="#5C4EFF" strokeWidth="1.5" />
      <rect x="30" y="34" width="42" height="3" rx="1.5" fill="#5C4EFF" opacity="0.4" />
      <rect x="30" y="44" width="32" height="3" rx="1.5" fill="#5C4EFF" opacity="0.25" />
      <rect x="30" y="54" width="38" height="3" rx="1.5" fill="#5C4EFF" opacity="0.25" />
      <circle cx="30" cy="67" r="5" fill="rgba(255,92,53,0.2)" />
      <path d="M27.5 67 L29.5 69 L32.5 64.5" stroke="#FF5C35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="38" y="64" width="28" height="3" rx="1.5" fill="#FF5C35" opacity="0.4" />
      <circle cx="30" cy="79" r="5" fill="rgba(255,92,53,0.2)" />
      <path d="M27.5 79 L29.5 81 L32.5 76.5" stroke="#FF5C35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="38" y="76" width="22" height="3" rx="1.5" fill="#FF5C35" opacity="0.4" />
      <circle cx="88" cy="30" r="16" fill="rgba(92,78,255,0.08)" stroke="#5C4EFF" strokeWidth="1.5" />
      <circle cx="88" cy="30" r="9" fill="rgba(92,78,255,0.15)" />
      <circle cx="88" cy="30" r="3" fill="#FF5C35" />
      <line x1="99" y1="42" x2="108" y2="54" stroke="#5C4EFF" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function DeploiementIllustration() {
  return (
    <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="50" r="10" fill="rgba(255,92,53,0.15)" stroke="#FF5C35" strokeWidth="1.5" />
      <text x="20" y="55" fontSize="10" fill="#FF5C35" textAnchor="middle" fontFamily="sans-serif" fontWeight="700">A</text>
      <circle cx="60" cy="25" r="10" fill="rgba(92,78,255,0.15)" stroke="#5C4EFF" strokeWidth="1.5" />
      <circle cx="60" cy="75" r="10" fill="rgba(92,78,255,0.15)" stroke="#5C4EFF" strokeWidth="1.5" />
      <circle cx="100" cy="50" r="10" fill="rgba(92,78,255,0.3)" stroke="#5C4EFF" strokeWidth="1.5" />
      <text x="100" y="55" fontSize="10" fill="#5C4EFF" textAnchor="middle" fontFamily="sans-serif" fontWeight="700">B</text>
      <line x1="30" y1="50" x2="50" y2="30" stroke="#FF5C35" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
      <line x1="30" y1="50" x2="50" y2="70" stroke="#FF5C35" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
      <line x1="70" y1="25" x2="90" y2="45" stroke="#5C4EFF" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
      <line x1="70" y1="75" x2="90" y2="55" stroke="#5C4EFF" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
      <circle cx="100" cy="50" r="18" stroke="#5C4EFF" strokeWidth="1" opacity="0.15" />
      <circle cx="108" cy="24" r="8" fill="#5C4EFF" />
      <path d="M105 24 L107 26.5 L111 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="60" y="29" fontSize="12" fill="#5C4EFF" textAnchor="middle">⚡</text>
      <text x="60" y="79" fontSize="12" fill="#5C4EFF" textAnchor="middle">📅</text>
    </svg>
  );
}

function ResultatsIllustration() {
  return (
    <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="15" width="100" height="70" rx="10" fill="rgba(92,78,255,0.08)" stroke="#5C4EFF" strokeWidth="1" opacity="0.6" />
      <rect x="10" y="15" width="100" height="4" rx="2" fill="#5C4EFF" opacity="0.5" />
      <polyline points="18,72 30,62 42,65 55,45 68,50 80,30 92,22 104,18" fill="none" stroke="#5C4EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
      <circle cx="55" cy="45" r="3.5" fill="#5C4EFF" />
      <circle cx="80" cy="30" r="3.5" fill="#5C4EFF" />
      <circle cx="104" cy="18" r="4.5" fill="#FF5C35" />
      <rect x="70" y="32" width="44" height="22" rx="6" fill="#12122A" stroke="#FF5C35" strokeWidth="1" />
      <text x="92" y="42" fontSize="8" fill="#FF5C35" textAnchor="middle" fontFamily="sans-serif" opacity="0.7">CE MOIS</text>
      <text x="92" y="52" fontSize="11" fill="#FF5C35" textAnchor="middle" fontFamily="sans-serif" fontWeight="700">+47%</text>
      <rect x="18" y="74" width="86" height="1.5" rx="0.75" fill="white" opacity="0.1" />
    </svg>
  );
}

type Step = {
  num: string;
  color: string;
  bg: string;
  title: string;
  subtitle: string;
  description: string;
  Illustration: () => React.JSX.Element;
};

const STEPS: Step[] = [
  {
    num: "01",
    color: "var(--primary-on-dark)",
    bg: "rgba(92,78,255,0.12)",
    title: "L’État des lieux",
    subtitle: "On lit votre activité, pas votre site.",
    description:
      "On suit le parcours réel de votre activité, de la première demande jusqu’à la facture encaissée, et on chiffre chaque fuite en euros et en heures avec vos chiffres. Vous repartez avec un document qui vous appartient, pas avec un pitch.",
    Illustration: AuditIllustration,
  },
  {
    num: "02",
    color: "#FF8A63",
    bg: "rgba(255,92,53,0.10)",
    title: "Déploiement",
    subtitle: "2 à 4 semaines. Sans perturber votre quotidien.",
    description:
      "On connecte vos outils existants, on programme les automatisations, on teste chaque flux. Vous validez chaque étape. Résultat : un système qui tourne sans vous demander de changer vos habitudes.",
    Illustration: DeploiementIllustration,
  },
  {
    num: "03",
    color: "var(--primary-on-dark)",
    bg: "rgba(92,78,255,0.12)",
    title: "Résultats mesurés",
    subtitle: "Vous voyez exactement ce que le système vous rapporte.",
    description:
      "Chaque mois, un rapport clair : leads traités, RDV pris, temps économisé. Pas de tableau de bord inutilisé — juste les 3 chiffres qui comptent pour votre activité.",
    Illustration: ResultatsIllustration,
  },
];

export function CommentCaMarche() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reduced = useReducedMotion();

  return (
    <section ref={ref} className="bg-[#12122A] py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-on-dark">
            Comment ça marche
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            De votre process actuel à un système qui tourne.
          </h2>
          <p className="mt-4 text-base text-white/50">
            Pas de tunnel de vente. Pas de formation imposée. On s&apos;intègre dans votre activité et on livre.
          </p>
        </div>

        <div className="relative mt-16 grid gap-0 md:grid-cols-3">
          <div
            aria-hidden
            className="absolute left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] top-[3.25rem] hidden h-px bg-white/10 md:block"
          />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={reduced ? false : { opacity: 0, y: 24 }}
              animate={inView || reduced ? { opacity: 1, y: 0 } : {}}
              transition={
                reduced
                  ? { duration: 0 }
                  : { duration: 0.5, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }
              }
              className="relative flex flex-col items-center px-6 py-8 text-center"
            >
              <div className="relative z-10 mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#12122A]">
                <span className="text-sm font-bold" style={{ color: step.color }}>
                  {step.num}
                </span>
              </div>

              <div
                className="mb-6 flex h-28 w-full max-w-[200px] items-center justify-center rounded-2xl"
                style={{ background: step.bg }}
              >
                <step.Illustration />
              </div>

              <h3 className="text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-1 text-sm font-medium" style={{ color: step.color }}>
                {step.subtitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="/etat-des-lieux"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-[#5C4EFF] px-7 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Demander un état des lieux
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
