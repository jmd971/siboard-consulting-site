"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

/*
 * Formulaire de contact hébergé par GoHighLevel (« Formulaire contact »).
 * GHL crée le contact et envoie la notification à contact@siboard-consulting.fr.
 * form_embed.js ajuste la hauteur de l'iframe au contenu.
 *
 * Certains bloqueurs masquent les iframes tierces : si le cadre est masqué
 * ou réduit à rien après quelques secondes, on affiche un repli.
 */
const FORM_ID = "21UmApQvUBfTS5iWIE0v";
const FORM_HOST = "https://my.siboard-consulting.fr";
const FORM_URL = `${FORM_HOST}/widget/form/${FORM_ID}`;

export function GhlForm() {
  const frame = useRef<HTMLIFrameElement>(null);
  const [bloque, setBloque] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => {
      const el = frame.current;
      if (!el) {
        setBloque(true);
        return;
      }
      const r = el.getBoundingClientRect();
      const masque = window.getComputedStyle(el).display === "none";
      if (masque || r.height < 100) setBloque(true);
    }, 6000);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div>
      <div className="border border-rule bg-background">
        <iframe
          ref={frame}
          src={FORM_URL}
          id={`inline-${FORM_ID}`}
          title="Formulaire de contact Siboard Consulting"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Formulaire contact"
          data-height="auto"
          data-layout-iframe-id={`inline-${FORM_ID}`}
          data-form-id={FORM_ID}
          className="block min-h-[640px] w-full border-0"
        />
        <Script src={`${FORM_HOST}/js/form_embed.js`} strategy="lazyOnload" />
      </div>

      <div
        className={
          bloque
            ? "mt-4 border border-accent-strong bg-surface p-4"
            : "mt-4"
        }
      >
        <p className="text-sm text-muted-foreground">
          {bloque
            ? "Le formulaire est masqué par votre navigateur ou un bloqueur. Vous pouvez l’ouvrir dans une page à part, ou nous écrire."
            : "Le formulaire ne s’affiche pas ? Ouvrez-le dans une page à part, ou écrivez-nous."}
        </p>
        <div className="mt-2 flex flex-col gap-1 sm:flex-row sm:gap-6">
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center text-sm font-semibold text-accent-strong underline underline-offset-4"
          >
            {"Ouvrir le formulaire"}
          </a>
          <a
            href="mailto:contact@siboard-consulting.fr"
            className="inline-flex min-h-11 items-center text-sm font-semibold text-accent-strong underline underline-offset-4"
          >
            {"contact@siboard-consulting.fr"}
          </a>
        </div>
      </div>
    </div>
  );
}
