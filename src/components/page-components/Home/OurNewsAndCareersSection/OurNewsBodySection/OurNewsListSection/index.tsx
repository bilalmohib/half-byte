import type { IOurNewsSectionData } from "@/components/page-components/Home/OurNewsAndCareersSection/OurNewsBodySection/OurNewsListSection/data";
import OurNewsListItem from "@/components/page-components/Home/OurNewsAndCareersSection/OurNewsBodySection/OurNewsListSection/OurNewsListItem";

interface OurNewsListSectionProps {
    items: IOurNewsSectionData[];
}

const OurNewsListSection = ({ items }: OurNewsListSectionProps) => {
    return (
        <div className="grid grid-cols-1 ssmd:grid-cols-2 lg:grid-cols-3 gap-3.75 md:gap-3.5 lg:gap-9">
            {items.map((item) => (
                <OurNewsListItem key={item.id} data={item} />
            ))}
        </div>
    );
};

export default OurNewsListSection;