"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import {
  AUDIT_WEBHOOK_URL,
  LOCALISATIONS,
  PROBLEMES,
  SECTEURS,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-border/60 bg-background/60 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20";

export function AuditForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    const formEl = event.currentTarget;
    const formData = new FormData(formEl);

    const problemes = formData.getAll("problemes").map(String);
    const payload = {
      firstName: String(formData.get("firstName") ?? "").trim(),
      lastName: String(formData.get("lastName") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      sector: String(formData.get("sector") ?? "").trim(),
      location: String(formData.get("location") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      problemes,
      message: String(formData.get("message") ?? "").trim(),
      source: "audit-gratuit",
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
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Prénom" htmlFor="firstName">
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            className={inputClass}
          />
        </Field>
        <Field label="Nom" htmlFor="lastName">
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            className={inputClass}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Société" htmlFor="company">
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            required
            className={inputClass}
          />
        </Field>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field label="Secteur d'activité" htmlFor="sector">
          <select id="sector" name="sector" required className={inputClass} defaultValue="">
            <option value="" disabled>
              Sélectionner…
            </option>
            {SECTEURS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Localisation" htmlFor="location">
          <select id="location" name="location" required className={inputClass} defaultValue="">
            <option value="" disabled>
              Sélectionner…
            </option>
            {LOCALISATIONS.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <fieldset className="mt-7">
        <legend className="text-sm font-medium text-foreground">
          Quel est votre problème principal ?
        </legend>
        <p className="mt-1 text-xs text-muted-foreground">
          Plusieurs choix possibles.
        </p>
        <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
          {PROBLEMES.map((p) => (
            <label
              key={p}
              className="group flex cursor-pointer items-start gap-3 rounded-lg border border-border/60 bg-background/40 px-3.5 py-3 text-sm transition-colors hover:border-primary/40 has-[:checked]:border-primary/60 has-[:checked]:bg-primary/5"
            >
              <input
                type="checkbox"
                name="problemes"
                value={p}
                className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-primary"
              />
              <span className="text-foreground/90">{p}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            className={inputClass}
          />
        </Field>
        <Field label="Téléphone / WhatsApp" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            className={inputClass}
            placeholder="+590 690 …"
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field
          label="Quelque chose à ajouter ?"
          htmlFor="message"
          optional
        >
          <textarea
            id="message"
            name="message"
            rows={4}
            className={cn(inputClass, "resize-y")}
            placeholder="Contexte, urgence, question précise…"
          />
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

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          En soumettant, vous acceptez d&apos;être recontacté sous 24h par
          Siboard Consulting.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className={cn(
            buttonVariants({ size: "lg" }),
            "h-12 px-6 text-base font-medium disabled:cursor-not-allowed disabled:opacity-70",
          )}
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden />
              Envoi…
            </>
          ) : (
            <>
              Demander mon audit
              <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  optional = false,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-foreground"
      >
        {label}
        {optional ? (
          <span className="ml-1 text-xs font-normal text-muted-foreground">
            (optionnel)
          </span>
        ) : null}
      </label>
      {children}
    </div>
  );
}

function SuccessState() {
  return (
    <div
      role="status"
      className="rounded-2xl border border-primary/30 bg-primary/5 p-8 sm:p-10"
    >
      <div className="grid h-12 w-12 place-items-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/30">
        <CheckCircle2 className="h-6 w-6" aria-hidden />
      </div>
      <h2 className="mt-6 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
        Demande reçue. À vous d&apos;ici 24h.
      </h2>
      <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
        Vous allez recevoir un message WhatsApp ou un email pour fixer notre
        échange de 30 minutes. Préparez vos chiffres si vous les avez sous la
        main — pas obligatoire.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/realisations"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "h-11 px-6 text-sm font-medium",
          )}
        >
          Voir des cas clients
        </Link>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost", size: "lg" }),
            "h-11 px-6 text-sm font-medium",
          )}
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
