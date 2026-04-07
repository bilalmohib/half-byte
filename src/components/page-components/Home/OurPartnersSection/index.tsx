import Image from "next/image";
import Container from "@/components/common/Container";
import { ourPartnersData } from "@/components/page-components/Home/OurPartnersSection/data";
import { Heading5 } from "@/components/common/Typography";

const OurPartnersSection = () => {
    return (
        <div className="bg-white pt-21.5 pb-35">
            <Container className="mx-auto w-fit">
                <div className="flex flex-col gap-10">
                    <Heading5 className="text-[#434343]! leading-7.75! text-center">
                        Our Partners
                    </Heading5>
                    <div className="inline-flex items-center gap-28">
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