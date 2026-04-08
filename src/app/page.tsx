import HeroSection from "@/components/page-components/Home/HeroSection";
import AboutUsSection from "@/components/page-components/Home/AboutUsSection";
import OurPartnersSection from "@/components/page-components/Home/OurPartnersSection";
import TechnologiesSection from "@/components/page-components/Home/TechnologiesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <OurPartnersSection />
      <TechnologiesSection />
      <AboutUsSection />
    </div>
  );
}
