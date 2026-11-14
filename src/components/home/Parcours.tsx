import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Cerne, EnTete, Fil, Installe, Monte } from "@/components/home/Mouvement";
import { cn } from "@/lib/utils";

/* Le parcours d'une demande client, avant et après. Exemple illustratif,
   signalé comme tel : les trois fuites reprennent celles de la carte du
   hero, et les trois réponses renvoient aux systèmes de /solutions. */
type Etape = {
  titre: string;
  note?: string;
  fuite?: boolean;
  systeme?: boolean;
};

const AVANT: Etape[] = [
  { titre: "Demande reçue", note: "Formulaire, téléphone, messagerie" },
  { titre: "Réponse", note: "plus de 48 h, ou jamais", fuite: true },
  { titre: "Devis envoyé", note: "1 sur 3 jamais relancé", fuite: true },
  { titre: "Commande" },
  { titre: "Saisie du dossier", note: "retapé à la main, 6 h par semaine", fuite: true },
  { titre: "Facture encaissée" },
];

const APRES: Etape[] = [
  { titre: "Demande reçue", note: "Tous les canaux au même endroit" },
  { titre: "Réponse", note: "L’Accueil : réponse en une minute", systeme: true },
  { titre: "Devis envoyé", note: "Le Fil : le lien gardé jusqu’à la signature", systeme: true },
  { titre: "Commande" },
  { titre: "Saisie du dossier", note: "Le Bureau : le dossier créé sans ressaisie", systeme: true },
  { titre: "Facture encaissée" },
];

/* Les fuites sont cernées au stylo rouge, l'une après l'autre, et chaque
   case penche un peu différemment. */
const PENCHES = ["-rotate-[0.8deg]", "rotate-[0.6deg]", "-rotate-[0.5deg]"];

function Ligne({ etapes }: { etapes: Etape[] }) {
  let fuites = 0;
  let systemes = 0;
  return (
    <ol className="grid grid-cols-2 gap-x-3 gap-y-4 sm:gap-x-5 lg:grid-cols-6">
      {etapes.map((e, i) => {
        const rang = e.fuite ? fuites++ : 0;
        return (
          <li key={e.titre} className="relative">
            {e.systeme ? (
              <Installe
                delai={systemes++ * 0.3}
                className="flex min-h-[5.25rem] flex-col gap-1.5 p-3.5"
              >
                <span className="font-mono text-[11px] opacity-70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] font-semibold leading-tight">{e.titre}</span>
              </Installe>
            ) : (
              <div
                className={cn(
                  "flex min-h-[5.25rem] flex-col gap-1.5 p-3.5",
                  e.fuite
                    ? cn("relative border-[2.5px] border-transparent", PENCHES[rang % PENCHES.length])
                    : "rounded-sm border border-rule-strong",
                )}
              >
                {e.fuite ? <Cerne forme="cadre" delai={rang * 0.35} /> : null}
                <span className="font-mono text-[11px] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] font-semibold leading-tight">{e.titre}</span>
              </div>
            )}
            {e.note ? (
              <p
                className={cn(
                  "mt-2.5",
                  e.fuite
                    ? "stylo text-xl sm:text-[1.375rem]"
                    : "text-xs leading-snug text-muted-foreground",
                )}
              >
                {e.note}
              </p>
            ) : null}
            {i < etapes.length - 1 ? (
              <span
                aria-hidden
                className="absolute -right-[0.95rem] top-8 hidden text-sm text-muted-foreground lg:block"
              >
                →
              </span>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}

export function Parcours() {
  return (
    <section className="border-b border-rule bg-surface">
      <div className="container-page py-16 sm:py-20">
        <EnTete>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
            01 — Ce qu’on regarde
          </p>
          <p className="text-[11px] text-muted-foreground">Exemple illustratif</p>
        </EnTete>

        <Monte className="mt-12 max-w-2xl">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Le parcours d’une demande, tel qu’il se passe vraiment.
          </h2>
          <p className="prose-report mt-5 text-pretty text-muted-foreground">
            On suit une demande client de bout en bout, de la première prise de contact jusqu’à
            la facture encaissée. Chaque fuite est repérée, puis chiffrée.
          </p>
        </Monte>

        <div className="mt-12">
          <div className="mb-5 flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Avant
            </p>
            <p className="stylo -rotate-[1.5deg] text-2xl">3 fuites sur 6 étapes</p>
          </div>
          <Fil className="mb-5 hidden lg:block" />
          <Ligne etapes={AVANT} />
        </div>

        <div className="mt-12 border-t border-rule pt-8">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Après
          </p>
          <Ligne etapes={APRES} />
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t-2 border-rule-strong pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="prose-report max-w-xl text-pretty text-muted-foreground">
            Les cases noires sont les systèmes qu’on installe. Seulement là où le constat l’a
            désigné.
          </p>
          <Link
            href="/etat-des-lieux"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 w-full shrink-0 rounded-sm px-6 text-base font-semibold hover:bg-primary/90 sm:w-auto",
            )}
          >
            Demander un état des lieux
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
