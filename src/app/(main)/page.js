import HeroSection from "@/components/HeroSection";
import JobDiscoverySection from "@/components/JobDiscoverySection";
import PricingSection from "@/components/Pricing";
import Stats from "@/components/Stats";
import SuccessSection from "@/components/SuccessSection";
import WorldSection from "@/components/WorldSection";


export default function Home() {
  return (
    <div className="container mx-auto bg-zinc-50 font-sans dark:bg-black">
      <HeroSection></HeroSection>
      <Stats></Stats>
      <JobDiscoverySection></JobDiscoverySection>
      <SuccessSection></SuccessSection>
      <PricingSection></PricingSection>
      <WorldSection></WorldSection>
    </div>
  );
}


