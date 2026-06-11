import { DeuxOffres } from "@/components/home/DeuxOffres";
import { Ecosysteme } from "@/components/home/Ecosysteme";
import { Hero } from "@/components/home/Hero";
import { RealisationsApercu } from "@/components/home/RealisationsApercu";
import { CTABanner } from "@/components/shared/CTABanner";

function ProofLine() {
  return (
    <div className="border-y border-border/30 bg-surface/20 py-5">
      <p className="text-center text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground/55">
        5 ans · 2 territoires · 6 secteurs accompagnés
      </p>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <DeuxOffres />
      <RealisationsApercu />
      <ProofLine />
      <Ecosysteme />
      <CTABanner />
    </>
  );
}
