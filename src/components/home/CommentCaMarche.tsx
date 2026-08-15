"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

const ETAPES = [
  {
    num: "01",
    title: "L’État des lieux",
    subtitle: "On lit votre activité, pas votre site.",
    description:
      "On suit le parcours réel de votre activité, de la première demande jusqu’à la facture encaissée, et on chiffre chaque fuite en euros et en heures avec vos chiffres. Vous repartez avec un document qui vous appartient, pas avec un pitch.",
  },
  {
    num: "02",
    title: "Déploiement",
    subtitle: "Deux à quatre semaines, sans perturber votre quotidien.",
    description:
      "On connecte vos outils existants, on programme les automatisations, on teste chaque flux. Vous validez chaque étape. Un système qui tourne sans vous demander de changer vos habitudes.",
  },
  {
    num: "03",
    title: "Résultats mesurés",
    subtitle: "Vous voyez ce que le système vous rapporte.",
    description:
      "Chaque mois, un rapport clair : demandes traitées, rendez-vous pris, temps économisé. Pas un tableau de bord de plus, juste les chiffres qui comptent pour votre activité.",
  },
] as const;

export function CommentCaMarche() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reduced = useReducedMotion();

  return (
    <section ref={ref} className="bg-foreground py-16 text-background sm:py-20">
      <div className="container-page">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-background/20 pb-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-background">
            02 — Comment ça marche
          </p>
          <p className="text-[11px] text-background/60">Trois étapes, rien de plus</p>
        </div>

        <div className="mt-12 max-w-2xl">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            De votre process actuel à un système qui tourne.
          </h2>
          <p className="prose-report mt-5 text-pretty text-background/70">
            Pas de tunnel de vente, pas de formation imposée. On s&apos;intègre dans votre
            activité et on livre.
          </p>
        </div>

        <ol className="mt-14 grid md:grid-cols-3">
          {ETAPES.map((etape, i) => (
            <motion.li
              key={etape.num}
              initial={reduced ? false : { opacity: 0, y: 20 }}
              animate={inView || reduced ? { opacity: 1, y: 0 } : {}}
              transition={
                reduced ? { duration: 0 } : { duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }
              }
              className={cn(
                "border-t border-background/25 py-7 md:pr-8",
                i > 0 && "md:border-l md:border-l-background/15 md:pl-8",
              )}
            >
              <span className="figure text-sm text-background/60">{etape.num}</span>
              <h3 className="mt-3 text-xl font-bold tracking-tight">{etape.title}</h3>
              <p className="mt-2 text-pretty text-[15px] leading-snug text-primary-on-dark">
                {etape.subtitle}
              </p>
              <p className="prose-report mt-4 text-pretty text-[15px] text-background/70">
                {etape.description}
              </p>
            </motion.li>
          ))}
        </ol>

        <div className="mt-12 border-t border-background/20 pt-8">
          <Link
            href="/etat-des-lieux"
            className="group inline-flex h-12 min-h-11 items-center gap-2 rounded-sm bg-background px-6 text-base font-semibold text-foreground transition-opacity hover:opacity-90"
          >
            Demander un état des lieux
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
