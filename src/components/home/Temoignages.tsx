import { Star } from "lucide-react";

import { GOOGLE_PROFILE, TEMOIGNAGES } from "@/lib/constants";

function Etoiles() {
  return (
    <div className="flex gap-0.5" aria-label="5 étoiles sur 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-accent text-accent" aria-hidden />
      ))}
    </div>
  );
}

export function Temoignages() {
  return (
    <section className="border-t border-border/60 bg-surface/30">
      <div className="container-page py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            04 — Ce qu&apos;ils en disent
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Des avis que vous pouvez aller vérifier vous-même.
          </h2>
          <p className="mt-4 text-pretty text-base text-muted-foreground">
            Ils sont publiés sur notre fiche Google, sous le nom de leur auteur. Nous ne les
            avons ni réécrits ni sélectionnés parmi d&apos;autres.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {TEMOIGNAGES.map((t) => (
            <li key={t.author} className="flex">
              <figure className="flex h-full flex-col rounded-2xl border border-border/60 bg-background/60 p-6 sm:p-7">
                <Etoiles />
                <blockquote className="mt-5 flex-1 text-pretty text-base leading-relaxed text-foreground/90">
                  {"« "}
                  {t.quote}
                  {t.truncated ? " […]" : ""}
                  {" »"}
                </blockquote>
                <figcaption className="mt-6 border-t border-border/50 pt-4">
                  <p className="text-sm font-semibold text-foreground">{t.author}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {t.role ? `${t.role} · ` : ""}Avis Google
                  </p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-center gap-3">
          <a
            href={GOOGLE_PROFILE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border/60 bg-background/60 px-5 text-sm text-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Etoiles />
            <span className="font-semibold">{GOOGLE_PROFILE.rating}</span>
            <span className="text-muted-foreground">
              sur {GOOGLE_PROFILE.count} avis Google · lire la fiche
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
