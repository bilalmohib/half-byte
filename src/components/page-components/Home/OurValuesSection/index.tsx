import OurValuesBodySection from "@/components/page-components/Home/OurValuesSection/OurValuesBodySection"; 
import OurValuesHeaderSection from "@/components/page-components/Home/OurValuesSection/OurValuesHeaderSection";

const OurValuesSection = () => {
    return (
        <div className="bg-white pt-35 flex flex-col gap-11.25">
            <OurValuesHeaderSection />
            <OurValuesBodySection />
        </div>
    );
};

export default OurValuesSection;