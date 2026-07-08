import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/ui/TrustBar";
import { Stats } from "@/components/home/Stats";
import { HowWeWork } from "@/components/home/HowWeWork";
import { ServicesTeaser } from "@/components/home/ServicesTeaser";
import { Testimonials } from "@/components/home/Testimonials";
import { InsightsTeaser } from "@/components/home/InsightsTeaser";
import { CtaBand } from "@/components/ui/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Stats />
      <HowWeWork />
      <ServicesTeaser />
      <Testimonials />
      <InsightsTeaser />
      <CtaBand />
    </>
  );
}
