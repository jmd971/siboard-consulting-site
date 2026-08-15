import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { CTABanner } from "@/components/shared/CTABanner";
import { buttonVariants } from "@/components/ui/button";
import { ECOSYSTEME, LOGICIEL_METIER } from "@/lib/constants";
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
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-fade" />
      <div className="container-page relative py-20 sm:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          {"Nos plateformes"}
        </p>
        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-[3.25rem] md:leading-[1.05]">
          {"Nous n’installons pas seulement des outils. Nous en éditons."}
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {"Trois logiciels métier en production, chacun co-édité avec un professionnel de son secteur. Ce ne sont pas des démonstrations. Ce sont des produits vendus, utilisés et maintenus."}
        </p>
      </div>
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
    <section className="border-y border-border/60 bg-surface/30">
      <div className="container-page py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {"Comment naît une plateforme Siboard"}
          </h2>
          <p className="mt-4 text-pretty text-base text-muted-foreground">
            {"Toujours de la même façon, et jamais d’une idée."}
          </p>
        </div>
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {etapes.map((e) => (
            <li key={e.n} className="rounded-2xl border border-border/60 bg-background/60 p-7">
              <span className="font-mono text-[10px] font-medium tracking-[0.2em] text-primary/50">
                {e.n}
              </span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">{e.title}</h3>
              <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
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
    <section className="container-page py-20 sm:py-24">
      <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        {"Les trois plateformes"}
      </h2>

      <div className="mt-12 space-y-5">
        {ECOSYSTEME.map((v, i) => (
          <article
            key={v.name}
            className="overflow-hidden rounded-2xl border border-border/60 bg-surface/50"
          >
            <div className="grid gap-8 p-7 sm:p-9 md:grid-cols-12">
              <header className="md:col-span-4">
                <span className="font-mono text-[10px] font-medium tracking-[0.2em] text-primary/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-2xl font-bold tracking-tight">{v.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.partenaire}</p>
                <a
                  href={v.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-5 inline-flex items-center gap-1.5 font-mono text-sm text-primary transition-colors hover:text-primary/80"
                >
                  {v.domain}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </header>

              <div className="space-y-6 md:col-span-8">
                <p className="text-pretty text-lg leading-relaxed text-foreground/90">
                  {v.description}
                </p>
                <div>
                  <p className="text-sm font-medium text-foreground">{"Ce que le logiciel fait"}</p>
                  <p className="mt-2 text-pretty text-base leading-relaxed text-muted-foreground">
                    {v.role}
                  </p>
                </div>
                <div className="rounded-xl border border-border/60 bg-background/60 p-4">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground/70">
                    {"Ce que ça prouve"}
                  </p>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-foreground/80">
                    {v.prouve}
                  </p>
                  <p className="mt-3 border-t border-border/50 pt-3 text-sm text-muted-foreground">
                    {"Technologie réutilisée dans le système "}
                    <Link
                      href={`/solutions#${v.nourrit === "Le Bureau" ? "bureau" : "point"}`}
                      className="font-medium text-primary hover:underline"
                    >
                      {v.nourrit}
                    </Link>
                    {"."}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
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
    <section className="border-t border-border/60 bg-surface/30">
      <div className="container-page py-16 sm:py-20">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {"Ce que ça change pour vous"}
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
              {"Vous n’achetez pas ces plateformes. Mais vous bénéficiez de ce qu’elles nous ont appris."}
            </p>
            <Link
              href="/solutions"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "mt-8 h-12 w-full px-6 text-base sm:w-auto",
              )}
            >
              {LOGICIEL_METIER.name}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <ul className="grid gap-5 md:col-span-8">
            {points.map((p) => (
              <li key={p.title} className="rounded-2xl border border-border/60 bg-background/60 p-6">
                <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-pretty text-base leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
