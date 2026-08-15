import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { CTABanner } from "@/components/shared/CTABanner";
import { buttonVariants } from "@/components/ui/button";
import { ECOSYSTEME, LOGICIEL_METIER } from "@/lib/constants";

/* Ancres des systemes sur /solutions, pour relier une plateforme aux
   briques qu'elle a fait naitre. */
const SYSTEME_ANCRES: Record<string, string> = {
  "L’Accueil": "accueil",
  "Le Bureau": "bureau",
  "Le Fil": "fil",
  "Le Retour": "retour",
  "Le Point": "point",
};
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Nos plateformes — les logiciels que Siboard édite | Siboard Consulting",
  description:
    "AdamBoards, TransmiExpert, SecureXia : trois logiciels métier construits et édités par Siboard avec un expert de chaque secteur. La preuve que nous ne faisons pas qu’installer des outils.",
  alternates: { canonical: "/ventures" },
  openGraph: {
    title: "Nos plateformes — les logiciels que Siboard édite",
    description:
      "Trois produits en production, co-édités avec un professionnel de chaque métier.",
    url: "/ventures",
    type: "website",
  },
};

export default function VenturesPage() {
  return (
    <>
      <Hero />
      <CommentNait />
      <Plateformes />
      <CeQueCaVousApporte />
      <CTABanner
        eyebrow="Votre process n’entre dans aucun outil ?"
        title="C’est exactement le point de départ de nos trois plateformes."
        description="On commence par regarder comment vous travaillez. Si aucun logiciel du marché ne convient, on construit le vôtre."
      />
    </>
  );
}

function Hero() {
  return (
    <section className="container-page pb-14 pt-12 sm:pb-16 sm:pt-16">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule pb-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
          {"Nos plateformes"}
        </p>
        <p className="text-[11px] text-muted-foreground">{"Trois produits en production"}</p>
      </div>

      <h1 className="mt-12 max-w-3xl text-balance text-[2.25rem] font-extrabold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-[3.25rem]">
        {"Nous n’installons pas seulement des outils. Nous en éditons."}
      </h1>
      <p className="prose-report mt-7 max-w-2xl text-pretty text-muted-foreground">
        {"Trois logiciels métier en production, chacun co-édité avec un professionnel de son secteur. Ce ne sont pas des démonstrations. Ce sont des produits vendus, utilisés et maintenus."}
      </p>
    </section>
  );
}

function CommentNait() {
  const etapes = [
    {
      n: "01",
      title: "On analyse un process",
      body: "Chez un client, on regarde comment son métier fonctionne réellement, jusqu’au détail que personne ne remarque plus.",
    },
    {
      n: "02",
      title: "On le construit en logiciel",
      body: "Quand aucun outil du marché ne couvre ce process, on écrit celui qui le fait, sur notre socle.",
    },
    {
      n: "03",
      title: "On le généralise au secteur",
      body: "Si le même process existe chez tous les confrères, le logiciel devient un produit, porté avec un expert du métier qui en assure la diffusion.",
    },
  ];

  return (
    <section className="border-y border-rule bg-surface">
      <div className="container-page py-14 sm:py-16">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
            {"Toujours de la même façon"}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            {"Comment naît une plateforme Siboard"}
          </h2>
          <p className="prose-report mt-5 text-pretty text-muted-foreground">
            {"Jamais d’une idée. Toujours d’un client dont on a regardé le travail de près."}
          </p>
        </div>

        <ol className="mt-12 grid md:grid-cols-3">
          {etapes.map((e, i) => (
            <li
              key={e.n}
              className={cn(
                "border-t border-rule py-7 md:py-0 md:pr-8",
                i > 0 && "md:border-l md:border-t-0 md:pl-8",
                i === 0 && "md:border-t-0",
              )}
            >
              <span className="figure text-sm text-muted-foreground">{e.n}</span>
              <h3 className="mt-3 text-lg font-bold tracking-tight">{e.title}</h3>
              <p className="prose-report mt-3 text-pretty text-[15px] text-muted-foreground">
                {e.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Plateformes() {
  return (
    <section className="container-page py-16 sm:py-20">
      <h2 className="max-w-2xl text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
        {"Les trois plateformes"}
      </h2>

      <ol className="mt-12">
        {ECOSYSTEME.map((v, i) => (
          <li key={v.name} className="border-t border-rule">
            <article className="grid gap-x-10 gap-y-6 py-10 sm:py-12 md:grid-cols-12">
              <header className="md:col-span-4">
                <div className="flex items-baseline gap-4">
                  <span className="figure text-sm text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-2xl font-extrabold tracking-tight">{v.name}</h3>
                    <p className="mt-1.5 text-base leading-snug text-muted-foreground">
                      {v.partenaire}
                    </p>
                  </div>
                </div>
                <a
                  href={v.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-5 inline-flex min-h-11 items-center gap-1.5 text-sm text-foreground underline-offset-4 transition-colors hover:text-accent-strong hover:underline md:ml-[calc(1rem+2ch)]"
                >
                  {v.domain}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </header>

              <div className="md:col-span-8">
                <p className="prose-report text-pretty text-foreground/90">{v.description}</p>

                <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
                  {"Ce que le logiciel fait"}
                </p>
                <p className="prose-report mt-3 text-pretty text-muted-foreground">{v.role}</p>

                <div className="mt-7 border-l border-rule-strong pl-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {"Ce que ça prouve"}
                  </p>
                  <p className="prose-report mt-2 text-pretty text-sm text-foreground/80">
                    {v.prouve}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {v.nourrit.length > 1
                      ? "Technologies réutilisées dans les systèmes "
                      : "Technologie réutilisée dans le système "}
                    {v.nourrit.map((n, k) => (
                      <span key={n}>
                        {k > 0 ? (k === v.nourrit.length - 1 ? " et " : ", ") : ""}
                        <Link
                          href={`/solutions#${SYSTEME_ANCRES[n]}`}
                          className="font-medium text-foreground underline underline-offset-4 hover:text-accent-strong"
                        >
                          {n}
                        </Link>
                      </span>
                    ))}
                    {"."}
                  </p>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ol>
      <div className="border-t-2 border-rule-strong" />
    </section>
  );
}

function CeQueCaVousApporte() {
  const points = [
    {
      title: "Rien n’est testé chez vous en premier",
      body: "La génération de documents, les relances automatiques ou l’analyse d’un historique de ventes tournent déjà en production sur nos propres produits, chez de vrais utilisateurs.",
    },
    {
      title: "Nous ne dépendons pas d’un éditeur",
      body: "Quand un outil du marché s’arrête, change de prix ou refuse une intégration, nous avons la main sur la fondation. Votre système ne meurt pas avec un abonnement.",
    },
    {
      title: "Le sur-mesure reste accessible",
      body: "Construire un logiciel métier coûte cher quand tout est à écrire. Sur un socle déjà éprouvé, il ne reste que ce qui vous est propre.",
    },
  ];

  return (
    <section className="border-t border-rule bg-surface">
      <div className="container-page py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
              {"Vous n’achetez pas ces plateformes"}
            </p>
            <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
              {"Ce que ça change pour vous"}
            </h2>
            <p className="prose-report mt-5 text-pretty text-muted-foreground">
              {"Mais vous bénéficiez de ce qu’elles nous ont appris."}
            </p>
            <Link
              href="/solutions"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "mt-8 h-12 w-full rounded-sm border-rule-strong px-6 text-base sm:w-auto",
              )}
            >
              {LOGICIEL_METIER.name}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <ol className="md:col-span-8">
            {points.map((p, i) => (
              <li key={p.title} className="border-t border-rule py-7 last:border-b">
                <div className="flex items-baseline gap-4">
                  <span className="figure text-sm text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight">{p.title}</h3>
                    <p className="prose-report mt-2 text-pretty text-muted-foreground">{p.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
