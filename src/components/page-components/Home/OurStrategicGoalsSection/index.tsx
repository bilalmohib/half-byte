import OurStrategicGoalsBodySection from "@/components/page-components/Home/OurStrategicGoalsSection/OurStrategicGoalsBodySection";
import OurStrategicGoalsHeaderSection from "@/components/page-components/Home/OurStrategicGoalsSection/OurStrategicGoalsHeaderSection";

const OurStrategicGoalsSection = () => {
    return (
        <div className="bg-white py-13 md:py-16 lg:py-18 flex flex-col gap-6.25 md:gap-8 lg:gap-11.25">
            <OurStrategicGoalsHeaderSection />
            <OurStrategicGoalsBodySection />
        </div>
    );
};

export default OurStrategicGoalsSection;