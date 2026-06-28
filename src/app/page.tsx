import { DeuxOffres } from "@/components/home/DeuxOffres";
import { Ecosysteme } from "@/components/home/Ecosysteme";
import { Hero } from "@/components/home/Hero";
import { CommentCaMarche } from "@/components/home/CommentCaMarche";
import { RealisationsApercu } from "@/components/home/RealisationsApercu";
import { CTABanner } from "@/components/shared/CTABanner";

function ProofBand() {
  const stats = [
    { value: "5 ans", label: "d'expérience terrain" },
    { value: "2 territoires", label: "Guadeloupe & Île-de-France" },
    { value: "6 secteurs", label: "accompagnés" },
    { value: "100%", label: "des sites en 1ère page Google" },
  ];

  return (
    <div className="bg-primary/[0.06] border-y border-primary/10">
      <div className="container-page py-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.value} className="text-center">
              <p className="text-2xl font-black tracking-tight text-primary sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofBand />
      <DeuxOffres />
      <CommentCaMarche />
      <RealisationsApercu />
      <Ecosysteme />
      <CTABanner />
    </>
  );
}
