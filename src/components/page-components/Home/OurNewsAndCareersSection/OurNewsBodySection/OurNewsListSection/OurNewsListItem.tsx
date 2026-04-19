import Image from "next/image";
import { Heading6, Paragraph } from "@/components/common/Typography";
import { IOurNewsSectionData } from "@/components/page-components/Home/OurNewsAndCareersSection/OurNewsBodySection/OurNewsListSection/data";

interface IOurNewsListItemProps {
    data: IOurNewsSectionData;
}

const OurNewsListItem = ({ data }: IOurNewsListItemProps) => {
    const isRemoteImage = data.image.src.startsWith("http");

    const inner = (
        <>
            <div className="flex flex-col gap-2">
                {isRemoteImage ? (
                    // eslint-disable-next-line @next/next/no-img-element -- dynamic publisher URLs from NewsData.io
                    <img
                        src={data.image.src}
                        alt={data.image.alt}
                        width={data.image.width}
                        height={data.image.height}
                        className="w-full h-42.5 object-cover rounded-[2px]"
                        loading="lazy"
                    />
                ) : (
                    <Image
                        src={data.image.src}
                        alt={data.image.alt}
                        width={data.image.width}
                        height={data.image.height}
                        className="w-full h-42.5"
                    />
                )}
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
        </>
    );

    return (
        <div className="px-2.25 py-1.75 bg-background border border-[#BABABA] border-solid rounded-[5px] flex flex-col gap-2.75">
            {data.link ? (
                <a
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer flex flex-col gap-2.75 no-underline text-inherit"
                >
                    {inner}
                </a>
            ) : (
                <div className="cursor-pointer flex flex-col gap-2.75">{inner}</div>
            )}
        </div>
    );
};

export default OurNewsListItem;