import type { Metadata } from "next";

import { PORTEFEUILLE } from "@/lib/constants";

/* L'accueil n'avait aucune canonical, alors que l'apex et le www
   servaient tous deux la page. */
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};
import { DeuxOffres } from "@/components/home/DeuxOffres";
import { Ecosysteme } from "@/components/home/Ecosysteme";
import { Hero } from "@/components/home/Hero";
import { Compteur } from "@/components/home/Mouvement";
import { Parcours } from "@/components/home/Parcours";
import { RealisationsApercu } from "@/components/home/RealisationsApercu";
import { CTABanner } from "@/components/shared/CTABanner";

function ProofBand() {
  const stats = [
    {
      value: String(PORTEFEUILLE.etablissements),
      label: "établissements dont nous pilotons la visibilité locale",
    },
    { value: `${PORTEFEUILLE.secteurs} secteurs`, label: "de la santé au bâtiment" },
    { value: `${PORTEFEUILLE.territoires} territoires`, label: PORTEFEUILLE.territoiresDetail },
    { value: "100%", label: "des sites en 1ère page Google" },
  ];

  return (
    <div className="bg-foreground text-background">
      <div className="container-page">
        <dl className="grid sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.value}
              className={
                "border-background/15 py-7 sm:py-8 " +
                (i > 0 ? "border-t sm:border-t-0 lg:border-l " : "") +
                (i === 2 ? "sm:border-t " : "") +
                (i === 3 ? "sm:border-t sm:border-l lg:border-t-0 " : "") +
                (i === 1 ? "sm:border-l lg:border-l " : "") +
                "sm:px-7 lg:px-8 first:lg:pl-0"
              }
            >
              <dt className="figure text-3xl font-semibold leading-none text-background sm:text-4xl">
                <Compteur valeur={s.value} />
              </dt>
              <dd className="mt-3 max-w-[22ch] text-pretty text-sm leading-snug text-background/70">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

function SectionNumber({ n }: { n: string }) {
  return (
    <span className="font-mono text-[10px] font-medium tracking-[0.2em] text-primary/50">
      {n}
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofBand />
      <div id="section-parcours" data-section="01">
        <Parcours />
      </div>
      <div id="section-offres" data-section="02">
        <DeuxOffres />
      </div>
      <div id="section-ecosysteme" data-section="03">
        <Ecosysteme />
      </div>
      <div id="section-realisations" data-section="04">
        <RealisationsApercu />
      </div>
      <CTABanner />
    </>
  );
}
