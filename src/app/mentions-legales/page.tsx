import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de Siboard Consulting : éditeur, hébergeur, propriété intellectuelle et responsabilité.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <div className="container-page py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Mentions légales
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Dernière mise à jour : mai 2026
        </p>

        <div className="mt-12 space-y-12 text-sm leading-relaxed text-foreground/90">

          <section>
            <h2 className="text-base font-semibold text-foreground mb-4">
              1. Éditeur du site
            </h2>
            <dl className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="w-40 shrink-0 text-muted-foreground">Société</dt>
                <dd>Siboard Consulting</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="w-40 shrink-0 text-muted-foreground">Forme juridique</dt>
                <dd>Entreprise individuelle</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="w-40 shrink-0 text-muted-foreground">SIRET</dt>
                <dd>89080598900013</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="w-40 shrink-0 text-muted-foreground">N° TVA</dt>
                <dd>FR79890805989</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="w-40 shrink-0 text-muted-foreground">Siège social</dt>
                <dd>73 rue Vatable, 97110 Pointe-à-Pitre, Guadeloupe</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="w-40 shrink-0 text-muted-foreground">Email</dt>
                <dd>
                  <a
                    href="mailto:contact@siboard-consulting.fr"
                    className="text-primary hover:underline"
                  >
                    contact@siboard-consulting.fr
                  </a>
                </dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="w-40 shrink-0 text-muted-foreground">Directeur de publication</dt>
                <dd>Jean-Marc Dolmare</dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-4">
              2. Hébergeur
            </h2>
            <dl className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="w-40 shrink-0 text-muted-foreground">Société</dt>
                <dd>Vercel Inc.</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="w-40 shrink-0 text-muted-foreground">Adresse</dt>
                <dd>340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="w-40 shrink-0 text-muted-foreground">Site</dt>
                <dd>
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    vercel.com
                  </a>
                </dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-4">
              3. Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, visuels, logo, structure) est la
              propriété exclusive de Siboard Consulting, sauf mention contraire. Toute
              reproduction, représentation ou diffusion, totale ou partielle, sans
              autorisation écrite préalable est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-4">
              4. Responsabilité
            </h2>
            <p>
              Siboard Consulting s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour
              des informations publiées sur ce site. Siboard Consulting ne peut être tenu
              responsable des erreurs ou omissions, ni des dommages résultant de
              l&apos;utilisation des informations présentées.
            </p>
            <p className="mt-3">
              Ce site peut contenir des liens vers des sites tiers. Siboard Consulting
              n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité
              quant à leur contenu.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-4">
              5. Données personnelles
            </h2>
            <p>
              Les informations collectées via le formulaire d&apos;audit sont utilisées
              exclusivement pour répondre à votre demande. Elles ne sont jamais revendues
              ni transmises à des tiers à des fins commerciales. Pour en savoir plus,
              consultez notre{" "}
              <Link
                href="/politique-confidentialite"
                className="text-primary hover:underline"
              >
                politique de confidentialité
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-4">
              6. Droit applicable
            </h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas de
              litige, et à défaut de résolution amiable, les tribunaux compétents seront
              ceux du ressort de Pointe-à-Pitre (Guadeloupe).
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
