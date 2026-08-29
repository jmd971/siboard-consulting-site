import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { SiboardLogo } from "@/components/ui/logo";
import { Separator } from "@/components/ui/separator";
import { NAV_LINKS, PORTEFEUILLE, SITE } from "@/lib/constants";

const LEGAL_LINKS = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-confidentialite", label: "Confidentialité" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/40">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" aria-label="Siboard Consulting — Accueil">
              <SiboardLogo className="text-foreground transition-opacity hover:opacity-80" />
            </Link>
            <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/55">
              Cabinet digital Guadeloupe &amp; Île-de-France
            </p>
            <p className="mt-1 text-xs text-muted-foreground/40">
              {PORTEFEUILLE.anciennete} · {PORTEFEUILLE.etablissements} établissements ·{" "}
              {PORTEFEUILLE.secteurs} secteurs
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              On analyse comment vous travaillez vraiment, on chiffre ce que vous perdez, puis on
              construit les systèmes qui le corrigent.
            </p>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-primary" />
                {SITE.email}
              </a>
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4 text-primary" />
                {SITE.phoneDisplay}
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{SITE.address}</span>
              </p>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-foreground">Naviguer</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/mission-90j"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Mission 90J
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold text-foreground">Zones d&apos;intervention</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>Guadeloupe · Martinique · Guyane</li>
              <li>Île-de-France</li>
            </ul>
            <h3 className="mt-6 text-sm font-semibold text-foreground">Légal</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-border/60" />

        <div className="flex flex-col-reverse gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name} · SIRET {SITE.siret} · TVA {SITE.vat}
          </p>
          <p>Pointe-à-Pitre · Paris</p>
        </div>
      </div>
    </footer>
  );
}
