"use client";

import Link from "next/link";
import Image from "next/image";
import { Heading3 } from "@/components/common/Typography";
import { useWindowSize } from "@/utils/detect-dimensions";
import { } from "@/components/page-components/Home/ContactUsSection/ContactUsFollowUsSection/data";
import { followUsData, IFollowUsData } from "@/components/page-components/Home/ContactUsSection/ContactUsFollowUsSection/data";

const ContactUsFollowUsSection = () => {
    const { width } = useWindowSize();

    return (
        <div className="flex flex-col gap-5 md:gap-6.5 lg:gap-7.75">
            <Heading3 className="leading-7.75 lg:leading-10.25! font-normal!">
                Follow us on social media:
            </Heading3>

            <div className="flex flex-row gap-5.5 md:gap-9.5 lg:gap-11.75">
                {followUsData.map((item: IFollowUsData) => (
                    <Link href={item.link} target="_blank" rel="noopener noreferrer" key={item.id}>
                        <Image src={item.image.src} alt={item.image.alt} width={width && width > 768 ? item.image.width : item.image.mobileWidth} height={width && width > 768 ? item.image.height : item.image.mobileHeight} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ContactUsFollowUsSection;