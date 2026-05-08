import { DeuxOffres } from "@/components/home/DeuxOffres";
import { Ecosysteme } from "@/components/home/Ecosysteme";
import { Hero } from "@/components/home/Hero";
import { Preuves } from "@/components/home/Preuves";
import { RealisationsApercu } from "@/components/home/RealisationsApercu";
import { CTABanner } from "@/components/shared/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Preuves />
      <DeuxOffres />
      <RealisationsApercu />
      <Ecosysteme />
      <CTABanner />
    </>
  );
}
