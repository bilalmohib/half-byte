import Image from "next/image";
import { Heading6, Paragraph } from "@/components/common/Typography";
import { IOurNewsSectionData } from "@/components/page-components/Home/OurNewsAndCareersSection/OurNewsBodySection/OurNewsListSection/data";

interface IOurNewsListItemProps {
    data: IOurNewsSectionData;
}

const OurNewsListItem = ({ data }: IOurNewsListItemProps) => {
    return (
        <div className="px-2.25 py-1.75 bg-background border border-[#BABABA] border-solid rounded-[5px] cursor-pointer flex flex-col gap-2.75">
            <div className="flex flex-col gap-2">
                <Image src={data.image.src} alt={data.image.alt} width={data.image.width} height={data.image.height} className="w-full h-42.5" />
                <Paragraph className="text-[#575757]! text-sm! leading-4.5!">
                    {data.date}
                </Paragraph>
            </div>
            <div className="flex flex-col gap-2">
                <Heading6 className="leading-6.25!">
                    {data.title}
                </Heading6>
                <Paragraph className="text-navlink-text! text-base! leading-5.25!">
                    {data.description}
                </Paragraph>
            </div>
        </div>
    );
};

export default OurNewsListItem;