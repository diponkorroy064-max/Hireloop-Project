import HeroSection from "@/components/home/HeroSection";
import JobDiscoverySection from "@/components/home/JobDiscoverySection";
import PricingSection from "@/components/home/PricingSection";
import Stats from "@/components/home/Stats";
import SuccessSection from "@/components/home/SuccessSection";
import WorldSection from "@/components/home/WorldSection";


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


