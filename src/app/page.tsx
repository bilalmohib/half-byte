import HeroSection from "@/components/page-components/Home/HeroSection";
import OurPartnersSection from "@/components/page-components/Home/OurPartnersSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <OurPartnersSection />
    </div>
  );
}
