"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { AUDIT_WEBHOOK_URL, PROBLEMES, SECTEURS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-border/60 bg-background/60 px-3.5 py-3 text-base text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20";

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
    return <SuccessState />;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border/60 bg-surface/40 p-6 sm:p-8"
      noValidate
    >
      {/* Prénom */}
      <Field label="Prénom" htmlFor="firstName">
        <input
          id="firstName"
          name="firstName"
          type="text"
          autoComplete="given-name"
          required
          placeholder="Jean-Marc"
          className={inputClass}
        />
      </Field>

      {/* Email */}
      <div className="mt-4">
        <Field label="Email professionnel" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            placeholder="vous@societe.fr"
            className={inputClass}
          />
        </Field>
      </div>

      {/* Secteur */}
      <div className="mt-4">
        <Field label="Secteur d'activité" htmlFor="sector">
          <select
            id="sector"
            name="sector"
            required
            className={inputClass}
            defaultValue=""
          >
            <option value="" disabled>
              Votre secteur…
            </option>
            {SECTEURS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
      </div>

      {/* Problème principal */}
      <div className="mt-4">
        <Field label="Votre problème principal" htmlFor="probleme">
          <select
            id="probleme"
            name="probleme"
            required
            className={inputClass}
            defaultValue=""
          >
            <option value="" disabled>
              Ce qui bloque votre activité…
            </option>
            {PROBLEMES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </Field>
      </div>

      {errorMsg ? (
        <p
          role="alert"
          className="mt-6 rounded-lg border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm text-red-300"
        >
          {errorMsg}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-foreground px-6 text-base font-medium text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60",
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

      <p className="mt-4 text-center text-xs text-muted-foreground">
        Réponse sous 24h. Le premier échange est gratuit et sans engagement, et on vous dit franchement si on est le bon partenaire.
      </p>
    </form>
  );
}

function Field({
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
        className="mb-1.5 block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function SuccessState() {
  return (
    <div
      role="status"
      className="rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center"
    >
      <CheckCircle2
        className="mx-auto h-10 w-10 text-primary"
        aria-hidden
      />
      <h2 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
        Demande reçue.
      </h2>
      <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
        On revient vers vous sous 24h pour caler le premier échange et cadrer le périmètre. Pas une offre commerciale.
      </p>
      <p className="mt-6 text-xs text-muted-foreground">
        Un message WhatsApp de confirmation va arriver sous peu.
      </p>
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          "mt-8 h-11",
        )}
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
