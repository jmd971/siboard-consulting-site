import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Siboard Consulting",
  description: "Politique de confidentialité de Siboard Consulting : données collectées, finalités, droits des personnes et durées de conservation.",
  alternates: { canonical: "/politique-confidentialite" },
  robots: { index: false, follow: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="container-page py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Politique de confidentialité
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Dernière mise à jour : mai 2026
        </p>

        <div className="mt-12 space-y-12 text-sm leading-relaxed text-foreground/90">

          <section>
            <h2 className="text-base font-semibold text-foreground mb-4">
              1. Responsable du traitement
            </h2>
            <p>
              Le responsable du traitement des données à caractère personnel collectées
              sur ce site est :
            </p>
            <p className="mt-3">
              <strong>Siboard Consulting</strong><br />
              Jean-Marc Dolmare<br />
              73 rue Vatable, 97110 Pointe-à-Pitre, Guadeloupe<br />
              SIRET : 89080598900013<br />
              Email :{" "}
              <a
                href="mailto:contact@siboard-consulting.fr"
                className="text-primary hover:underline"
              >
                contact@siboard-consulting.fr
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-4">
              2. Données collectées
            </h2>
            <p>
              Lors de la soumission du formulaire d&apos;audit gratuit, les données
              suivantes sont collectées :
            </p>
            <ul className="mt-3 list-disc list-inside space-y-1 text-muted-foreground">
              <li>Prénom et nom</li>
              <li>Nom de la société</li>
              <li>Secteur d&apos;activité</li>
              <li>Localisation</li>
              <li>Problème principal décrit</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone / WhatsApp</li>
            </ul>
            <p className="mt-3">
              Ces données sont transmises à notre outil de gestion de la relation client
              (GoHighLevel) pour le traitement de votre demande. Aucun paiement ni donnée
              bancaire n&apos;est collecté sur ce site.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-4">
              3. Finalités du traitement
            </h2>
            <p>Les données collectées sont utilisées exclusivement pour :</p>
            <ul className="mt-3 list-disc list-inside space-y-1 text-muted-foreground">
              <li>Répondre à votre demande d&apos;audit dans un délai de 24 heures</li>
              <li>
                Vous envoyer une confirmation par WhatsApp ou email suite à votre demande
              </li>
              <li>
                Assurer le suivi de votre accompagnement si vous devenez client
              </li>
            </ul>
            <p className="mt-3">
              Vos données ne sont jamais revendues, louées ni partagées avec des tiers à
              des fins publicitaires ou commerciales.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-4">
              4. Base légale
            </h2>
            <p>
              Le traitement repose sur votre consentement exprimé lors de la soumission
              du formulaire (article 6.1.a du RGPD), ainsi que sur l&apos;intérêt légitime
              de Siboard Consulting à répondre aux demandes entrantes (article 6.1.f).
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-4">
              5. Durée de conservation
            </h2>
            <p>
              Les données des personnes n&apos;ayant pas donné suite à leur demande sont
              conservées 12 mois maximum. Les données des clients actifs sont conservées
              pendant toute la durée de la relation commerciale, puis 5 ans à des fins
              comptables et légales.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-4">
              6. Vos droits
            </h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants sur vos données :
            </p>
            <ul className="mt-3 list-disc list-inside space-y-1 text-muted-foreground">
              <li>Droit d&apos;accès</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement (&laquo; droit à l&apos;oubli &raquo;)</li>
              <li>Droit à la portabilité</li>
              <li>Droit d&apos;opposition au traitement</li>
              <li>Droit de retrait du consentement à tout moment</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous par email à{" "}
              <a
                href="mailto:contact@siboard-consulting.fr"
                className="text-primary hover:underline"
              >
                contact@siboard-consulting.fr
              </a>
              . Nous répondrons dans un délai de 30 jours. En cas de réclamation, vous
              pouvez saisir la{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                CNIL
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-4">
              7. Cookies et traceurs
            </h2>
            <p>
              Ce site n&apos;utilise pas de cookies publicitaires ou de tracking tiers.
              Des cookies fonctionnels strictement nécessaires au bon fonctionnement du
              site peuvent être déposés. Aucune donnée de navigation n&apos;est transmise
              à des régies publicitaires.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-4">
              8. Sécurité
            </h2>
            <p>
              Le formulaire est transmis via HTTPS. Les données sont stockées sur les
              serveurs de GoHighLevel (conforme SOC 2) et de Vercel (hébergement
              certifié ISO 27001). Siboard Consulting prend toutes les mesures
              techniques raisonnables pour protéger vos données.
            </p>
          </section>

          <div className="pt-4 border-t border-border/60">
            <Link
              href="/mentions-legales"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Mentions légales
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
