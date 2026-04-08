import Image from "next/image";
import Container from "@/components/common/Container";
import { ourValuesBodySectionData } from "@/components/page-components/Home/OurValuesSection/OurValuesBodySection/data";
import { Heading5, Paragraph } from "@/components/common/Typography";

const OurValuesBodySection = () => {
    return (
        <Container>
            <div className="grid grid-cols-3 gap-19.25">
                {ourValuesBodySectionData.map((item) => (
                    <div key={item.title} className="flex flex-col gap-3.75 rounded-[5px] border border-[#DBDBDB] border-solid bg-white py-9 px-8">
                        <div className="flex flex-col gap-5">
                            <div>
                                <Image src={item.image.src} alt={item.image.alt} width={item.image.width} height={item.image.height} />
                            </div>
                            <Heading5 className="leading-7.75!">
                                {item.title}
                            </Heading5>
                        </div>
                        <Paragraph className="text-navlink-text! leading-6.75!">
                            {item.description}
                        </Paragraph>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default OurValuesBodySection;