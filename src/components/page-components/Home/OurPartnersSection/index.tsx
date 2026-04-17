"use client";

import Image from "next/image";
import Container from "@/components/common/Container";
import { ourPartnersData } from "@/components/page-components/Home/OurPartnersSection/data";
import { Heading5 } from "@/components/common/Typography";
import { useWindowSize } from "@/utils/detect-dimensions";

const OurPartnersSection = () => {
    const { width } = useWindowSize();

    return (
        <div className="bg-white pt-14 md:pt-18 lg:pt-21.5 pb-16 md:pb-24 lg:pb-35">
            <Container className="mx-auto w-fit">
                <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                    <Heading5 className="text-[#434343]! leading-7.75! text-center">
                        Our Partners
                    </Heading5>
                    <div className="overflow-x-auto inline-flex items-center gap-12 sm:gap-16 md:gap-20 lg:gap-28">
                        {ourPartnersData.map((partner, key) => {
                            return (
                                <Image
                                    key={key}
                                    src={partner.image.src}
                                    alt={partner.image.alt}
                                    width={partner.image.width}
                                    height={partner.image.height}
                                    className="block"
                                    loading="eager"
                                    style={{
                                        width: width && width > 768 ? partner.image.width : partner.image.mobileWidth,
                                        height: width && width > 768 ? partner.image.height : partner.image.mobileHeight,
                                    }}
                                />
                            )
                        })}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default OurPartnersSection;