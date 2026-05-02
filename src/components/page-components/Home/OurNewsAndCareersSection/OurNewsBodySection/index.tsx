import OurNewsListSection from "@/components/page-components/Home/OurNewsAndCareersSection/OurNewsBodySection/OurNewsListSection";
import LatestNewsHeading from "@/components/page-components/Home/OurNewsAndCareersSection/OurNewsBodySection/LatestNewsHeading";
import { fetchTechnologyNewsList } from "@/lib/newsdata";

const OurNewsBodySection = async () => {
  const newsItems = await fetchTechnologyNewsList();

  return (
    <div className="flex flex-col gap-3.75 md:gap-3.5 lg:gap-4.5">
      <LatestNewsHeading />
      <OurNewsListSection items={newsItems} />
    </div>
  );
};

export default OurNewsBodySection;
