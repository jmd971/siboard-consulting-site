import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { CTA_PRIMARY, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

/* Page 404 maison. Sans ce fichier, Next sert sa page par defaut, en
   anglais et sans navigation : mauvaise porte d'entree pour un visiteur
   qui arrive par un vieux lien, et cul-de-sac pour un crawler. */

export const metadata: Metadata = {
  title: "Page introuvable",
  description:
    "Cette adresse n’existe pas sur le site de Siboard Consulting. Voici les pages du cabinet.",
  robots: { index: false, follow: true },
};

const AUTRES_PAGES = [
  ...NAV_LINKS,
  { href: "/mission-90j", label: "Mission Croissance 90J" },
];

export default function NotFound() {
  return (
    <div className="container-page py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Erreur 404
        </p>

        <h1 className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {"Cette page n’existe pas."}
        </h1>

        <p className="prose-report mt-4 text-pretty text-muted-foreground">
          {"L’adresse est peut-être mal recopiée, ou la page a changé de nom lors de la refonte du site. Voici par où reprendre."}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href={CTA_PRIMARY.href}
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 w-full rounded-sm px-6 text-base font-semibold sm:w-auto",
            )}
          >
            {CTA_PRIMARY.label}
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-12 w-full rounded-sm px-6 text-base font-medium sm:w-auto",
            )}
          >
            {"Revenir à l’accueil"}
          </Link>
        </div>

        <nav aria-label="Pages du site" className="mt-14 border-t border-border pt-8">
          <h2 className="text-base font-semibold">Toutes les pages</h2>
          <ul className="mt-4 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
            {AUTRES_PAGES.map((page) => (
              <li key={page.href} className="bg-background">
                <Link
                  href={page.href}
                  className="flex min-h-11 items-center justify-between gap-4 px-4 py-3 text-sm transition-colors hover:bg-muted"
                >
                  <span>{page.label}</span>
                  <ArrowRight
                    aria-hidden
                    className="h-4 w-4 shrink-0 text-muted-foreground"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-8 text-sm text-muted-foreground">
          {"Vous êtes arrivé ici depuis un lien ? Signalez-le à "}
          <a
            href="mailto:contact@siboard-consulting.fr"
            className="font-medium text-foreground underline underline-offset-4"
          >
            contact@siboard-consulting.fr
          </a>
          {", je le corrige."}
        </p>
      </div>
    </div>
  );
}
