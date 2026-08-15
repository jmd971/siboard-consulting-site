import { PORTEFEUILLE } from "@/lib/constants";
import { DeuxOffres } from "@/components/home/DeuxOffres";
import { Ecosysteme } from "@/components/home/Ecosysteme";
import { Hero } from "@/components/home/Hero";
import { CommentCaMarche } from "@/components/home/CommentCaMarche";
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
    <div className="border-y border-rule bg-surface">
      <div className="container-page">
        <dl className="grid sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.value}
              className={
                "border-rule py-7 sm:py-8 " +
                (i > 0 ? "border-t sm:border-t-0 lg:border-l " : "") +
                (i === 2 ? "sm:border-t " : "") +
                (i === 3 ? "sm:border-t sm:border-l lg:border-t-0 " : "") +
                (i === 1 ? "sm:border-l lg:border-l " : "") +
                "sm:px-7 lg:px-8 first:lg:pl-0"
              }
            >
              <dt className="figure text-3xl font-semibold leading-none text-accent-strong sm:text-4xl">
                {s.value}
              </dt>
              <dd className="mt-3 max-w-[22ch] text-pretty text-sm leading-snug text-muted-foreground">
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
      <div id="section-offres" data-section="01">
        <DeuxOffres />
      </div>
      <div id="section-methode" data-section="02">
        <CommentCaMarche />
      </div>
      <div id="section-realisations" data-section="03">
        <RealisationsApercu />
      </div>
      <div id="section-ecosysteme" data-section="04">
        <Ecosysteme />
      </div>
      <CTABanner />
    </>
  );
}
