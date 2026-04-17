import Image from "next/image";
import Container from "@/components/common/Container";
import { ourValuesBodySectionData } from "@/components/page-components/Home/OurValuesSection/OurValuesBodySection/data";
import { Heading5, Paragraph } from "@/components/common/Typography";

const OurValuesBodySection = () => {
    return (
        <Container>
            <div className="grid grid-cols-3 gap-5.5 lg:gap-19.25">
                {ourValuesBodySectionData.map((item) => (
                    <div key={item.title} className="flex flex-col gap-3.75 rounded-[5px] border border-[#DBDBDB] border-solid bg-white py-7.75 lg:py-9 px-4.75 lg:px-8">
                        <div className="flex flex-col gap-3.75 lg:gap-5">
                            <div className="bg-[#F6F6F6] w-[55px] h-[53px] rounded-[3px] flex items-center justify-center">
                                <Image src={item.image.src} alt={item.image.alt} width={item.image.width} height={item.image.height} />
                            </div>
                            <Heading5 className="leading-6.25! lg:leading-7.75!">
                                {item.title}
                            </Heading5>
                        </div>
                        <Paragraph className="text-navlink-text! leading-5! lg:leading-6.75!">
                            {item.description}
                        </Paragraph>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default OurValuesBodySection;