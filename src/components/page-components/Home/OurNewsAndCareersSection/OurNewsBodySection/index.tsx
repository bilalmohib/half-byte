import { Heading2 } from "@/components/common/Typography";
import OurNewsListSection from "@/components/page-components/Home/OurNewsAndCareersSection/OurNewsBodySection/OurNewsListSection";
import { fetchTechnologyNewsList } from "@/lib/newsdata";

const OurNewsBodySection = async () => {
    const newsItems = await fetchTechnologyNewsList();

    return (
        <div className="flex flex-col gap-3.75 md:gap-3.5 lg:gap-4.5">
            <Heading2 className="text-[32px]! lg:text-[40px]! leading-7.75! md:leading-10.25! lg:leading-12.75!">
                Latest News
            </Heading2>
            <OurNewsListSection items={newsItems} />
        </div>
    );
};

export default OurNewsBodySection;