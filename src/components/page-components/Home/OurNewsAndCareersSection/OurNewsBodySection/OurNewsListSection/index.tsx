import { ourNewsSectionData } from "@/components/page-components/Home/OurNewsAndCareersSection/OurNewsBodySection/OurNewsListSection/data";
import OurNewsListItem from "@/components/page-components/Home/OurNewsAndCareersSection/OurNewsBodySection/OurNewsListSection/OurNewsListItem";

const OurNewsListSection = () => {
    return (
        <div className="grid grid-cols-3 gap-9">
            {ourNewsSectionData.map((item) => (
                <OurNewsListItem key={item.id} data={item} />
            ))}
        </div>
    );
};

export default OurNewsListSection;