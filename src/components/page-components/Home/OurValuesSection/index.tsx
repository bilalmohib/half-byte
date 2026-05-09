import OurValuesBodySection from "@/components/page-components/Home/OurValuesSection/OurValuesBodySection";
import OurValuesHeaderSection from "@/components/page-components/Home/OurValuesSection/OurValuesHeaderSection";

const OurValuesSection = () => {
    return (
        <div className="bg-white pt-9 md:pt-14 lg:pt-18 flex flex-col gap-6.25 md:gap-8.75 lg:gap-11.25">
            <OurValuesHeaderSection />
            <OurValuesBodySection />
        </div>
    );
};

export default OurValuesSection;