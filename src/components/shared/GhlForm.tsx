"use client";

import Script from "next/script";

/*
 * Formulaire de contact hébergé par GoHighLevel (« Formulaire contact »).
 * GHL crée le contact et envoie la notification à contact@siboard-consulting.fr.
 * form_embed.js ajuste la hauteur de l'iframe au contenu.
 */
const FORM_ID = "21UmApQvUBfTS5iWIE0v";
const FORM_HOST = "https://my.siboard-consulting.fr";

export function GhlForm() {
  return (
    <div className="border border-rule bg-background">
      <iframe
        src={`${FORM_HOST}/widget/form/${FORM_ID}`}
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
        loading="lazy"
        className="block min-h-[640px] w-full border-0"
      />
      <Script src={`${FORM_HOST}/js/form_embed.js`} strategy="lazyOnload" />
    </div>
  );
}
