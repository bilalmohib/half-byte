import OurValuesBodySection from "@/components/page-components/Home/OurValuesSection/OurValuesBodySection";
import OurValuesHeaderSection from "@/components/page-components/Home/OurValuesSection/OurValuesHeaderSection";

const OurValuesSection = () => {
    return (
        <div className="bg-white pt-16 md:pt-25 lg:pt-35 flex flex-col gap-6.25 md:gap-8.75 lg:gap-11.25">
            <OurValuesHeaderSection />
            <OurValuesBodySection />
        </div>
    );
};

export default OurValuesSection;