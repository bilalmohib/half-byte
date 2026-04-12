import { Heading2 } from "@/components/common/Typography";
import OurNewsListSection from "@/components/page-components/Home/OurNewsAndCareersSection/OurNewsBodySection/OurNewsListSection";

const OurNewsBodySection = () => {
    return (
        <div className="flex flex-col gap-4.5">
            <Heading2 className="text-[40px]! leading-12.75!">
                Latest News
            </Heading2>
            <OurNewsListSection />
        </div>
    );
};

export default OurNewsBodySection;