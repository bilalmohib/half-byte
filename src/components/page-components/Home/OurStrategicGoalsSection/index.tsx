import OurStrategicGoalsBodySection from "@/components/page-components/Home/OurStrategicGoalsSection/OurStrategicGoalsBodySection";
import OurStrategicGoalsHeaderSection from "@/components/page-components/Home/OurStrategicGoalsSection/OurStrategicGoalsHeaderSection";

const OurStrategicGoalsSection = () => {
    return (
        <div className="bg-white py-35 flex flex-col gap-11.25">
            <OurStrategicGoalsHeaderSection />
            <OurStrategicGoalsBodySection />
        </div>
    );
};

export default OurStrategicGoalsSection;