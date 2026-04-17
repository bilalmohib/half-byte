import HeroSection from "@/components/page-components/Home/HeroSection";
import AboutUsSection from "@/components/page-components/Home/AboutUsSection";
import OurValuesSection from "@/components/page-components/Home/OurValuesSection";
import ContactUsSection from "@/components/page-components/Home/ContactUsSection";
import OurPartnersSection from "@/components/page-components/Home/OurPartnersSection";
import TechnologiesSection from "@/components/page-components/Home/TechnologiesSection";
import CallToActionSection from "@/components/page-components/Home/CallToActionSection";
import OurStrategicGoalsSection from "@/components/page-components/Home/OurStrategicGoalsSection";
import OurNewsAndCareersSection from "@/components/page-components/Home/OurNewsAndCareersSection";
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <OurPartnersSection />
      <TechnologiesSection />
      <AboutUsSection />
      {/* <OurValuesSection /> */}
      {/* <OurStrategicGoalsSection />
      <OurNewsAndCareersSection />
      <ContactUsSection />
      <CallToActionSection /> */}
    </div>
  );
}
