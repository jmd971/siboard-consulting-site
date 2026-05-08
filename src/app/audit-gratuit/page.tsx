import type { Metadata } from "next";

import { AuditForm } from "./audit-form";

export const metadata: Metadata = {
  title: "Audit gratuit — Siboard Consulting",
  description:
    "Demandez votre audit digital offert. Diagnostic honnête sous 24h, sans engagement, par Jean-Marc Dolmare.",
  alternates: { canonical: "/audit-gratuit" },
  openGraph: {
    title: "Audit gratuit — Siboard Consulting",
    description:
      "Pas une offre commerciale — un diagnostic honnête de votre situation, sous 24h.",
    url: "/audit-gratuit",
    type: "website",
  },
};

export default function AuditGratuitPage() {
  return (
    <section className="container-page py-20 sm:py-24">
      <div className="grid gap-14 md:grid-cols-12 md:gap-12">
        <PageIntro />
        <div className="md:col-span-7">
          <AuditForm />
        </div>
      </div>
    </section>
  );
}

function PageIntro() {
  return (
    <aside className="md:col-span-5">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
        Audit gratuit
      </p>
      <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.75rem]">
        On vous répond sous 24h.
      </h1>
      <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
        Pas une offre commerciale — un diagnostic honnête de votre situation. Si
        Siboard n&apos;est pas le bon partenaire pour votre cas, on vous le dit.
      </p>

      <ul className="mt-10 space-y-5 text-sm text-foreground/90">
        {[
          {
            title: "Réponse sous 24h",
            description:
              "Un message WhatsApp ou email pour fixer le créneau d'échange.",
          },
          {
            title: "Échange de 30 minutes",
            description:
              "On regarde votre situation, vos chiffres, vos blocages. Sans script.",
          },
          {
            title: "Diagnostic écrit",
            description:
              "Vous repartez avec une priorisation claire — y compris si la suite ne se fait pas avec nous.",
          },
        ].map((step, i) => (
          <li key={step.title} className="flex gap-4">
            <span
              aria-hidden
              className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-primary/30 bg-primary/10 font-mono text-xs text-primary"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="font-medium text-foreground">{step.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-10 rounded-xl border border-border/60 bg-surface/40 p-4 text-xs text-muted-foreground">
        Vos informations sont utilisées uniquement pour préparer votre audit.
        Aucun partage commercial, aucune liste revendue. Conformité RGPD.
      </p>
    </aside>
  );
}
