"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";

import { AUDIT_WEBHOOK_URL, PROBLEMES, SECTEURS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

/* 16px minimum sur les champs : sous ce seuil, iOS Safari zoome
   automatiquement a la mise au point. */
const champ =
  "w-full rounded-sm border border-input bg-background px-3.5 py-3 text-base text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-foreground focus:outline-none focus:ring-2 focus:ring-ring/30";

export function AuditForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    const formEl = event.currentTarget;
    const formData = new FormData(formEl);

    const payload = {
      firstName: String(formData.get("firstName") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      sector: String(formData.get("sector") ?? "").trim(),
      probleme: String(formData.get("probleme") ?? "").trim(),
      source: "audit-gratuit",  // ne pas renommer sans verifier les filtres GoHighLevel
      submittedAt: new Date().toISOString(),
    };

    try {
      const res = await fetch(AUDIT_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        mode: "cors",
      });

      if (!res.ok) {
        throw new Error(`Webhook a répondu ${res.status}`);
      }

      setStatus("success");
      formEl.reset();
    } catch (err) {
      console.error("[audit] webhook error", err);
      setErrorMsg(
        "Envoi impossible pour le moment. Écrivez-nous directement à contact@siboard-consulting.fr.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return <Confirmation />;
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <p className="border-b-2 border-rule-strong pb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
        Demande d&apos;état des lieux
      </p>

      <div className="border-b border-rule py-5">
        <Champ label="Prénom" htmlFor="firstName">
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            placeholder="Jean-Marc"
            className={champ}
          />
        </Champ>
      </div>

      <div className="border-b border-rule py-5">
        <Champ label="Email professionnel" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            placeholder="vous@societe.fr"
            className={champ}
          />
        </Champ>
      </div>

      <div className="border-b border-rule py-5">
        <Champ label="Secteur d'activité" htmlFor="sector">
          <select id="sector" name="sector" required className={champ} defaultValue="">
            <option value="" disabled>
              Votre secteur…
            </option>
            {SECTEURS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Champ>
      </div>

      <div className="border-b border-rule py-5">
        <Champ label="Votre problème principal" htmlFor="probleme">
          <select id="probleme" name="probleme" required className={champ} defaultValue="">
            <option value="" disabled>
              Ce qui bloque votre activité…
            </option>
            {PROBLEMES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </Champ>
      </div>

      {errorMsg ? (
        <p
          role="alert"
          className="mt-6 border-l-2 border-destructive bg-destructive/5 px-4 py-3 text-sm text-destructive"
        >
          {errorMsg}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "mt-7 flex h-12 w-full items-center justify-center gap-2 rounded-sm bg-foreground px-6",
          "text-base font-semibold text-background transition-opacity hover:opacity-90",
          "disabled:cursor-not-allowed disabled:opacity-60",
        )}
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Envoi…
          </>
        ) : (
          <>
            Demander un état des lieux
            <ArrowRight className="h-4 w-4" aria-hidden />
          </>
        )}
      </button>

      <p className="mt-4 text-pretty text-xs text-muted-foreground">
        Réponse sous 24 h. Le premier échange est gratuit et sans engagement, et on vous dit
        franchement si on est le bon partenaire.
      </p>
    </form>
  );
}

function Champ({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function Confirmation() {
  return (
    <div role="status">
      <p className="border-b-2 border-rule-strong pb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
        Demande reçue
      </p>

      <p className="prose-report mt-6 text-pretty text-lg text-foreground">
        On revient vers vous sous 24 h pour caler le premier échange et cadrer le périmètre.
        Pas une offre commerciale.
      </p>

      <p className="prose-report mt-4 text-pretty text-muted-foreground">
        Un message WhatsApp de confirmation va arriver sous peu.
      </p>

      <div className="mt-8 border-t border-rule pt-6">
        <Link
          href="/"
          className="group inline-flex min-h-11 items-center gap-1.5 text-base font-semibold text-foreground underline-offset-4 transition-colors hover:text-accent-strong hover:underline"
        >
          Retour à l&apos;accueil
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
