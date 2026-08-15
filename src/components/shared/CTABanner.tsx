import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { CTA_PRIMARY } from "@/lib/constants";
import { cn } from "@/lib/utils";

type CTABannerProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  note?: string;
  className?: string;
};

export function CTABanner({
  eyebrow = "L’État des lieux",
  title = "On regarde comment vous travaillez vraiment. Ensuite on répare.",
  description = "Le premier échange est gratuit et sans engagement. Il sert à cadrer le périmètre et à vérifier que le diagnostic vous sera utile.",
  ctaLabel = CTA_PRIMARY.label,
  ctaHref = CTA_PRIMARY.href,
  note = "TPE, PME et collectivités en Guadeloupe, Martinique, Guyane et Île-de-France.",
  className,
}: CTABannerProps) {
  return (
    <section className={cn("container-page py-12 sm:py-16", className)}>
      <div className="relative overflow-hidden rounded-sm bg-foreground p-8 text-background sm:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-28 h-72 w-72 rounded-full border border-background/10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 -bottom-40 h-80 w-80 rounded-full border border-background/10"
        />
        <div className="relative grid gap-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-background/70">
              {eyebrow}
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-[2.25rem]">
              {title}
            </h2>
            <p className="prose-report mt-4 text-pretty text-background/80">{description}</p>
          </div>
          <div className="flex flex-col gap-3 md:col-span-4 md:items-end">
            <Link
              href={ctaHref}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 w-full rounded-sm bg-background px-6 text-base font-semibold text-foreground hover:bg-background/90 md:w-auto",
              )}
            >
              {ctaLabel}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
            <p className="text-xs text-background/70 md:text-right">{note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
