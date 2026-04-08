import { Badge } from "@/components/ui/badge";
import { Heading2 } from "@/components/common/Typography";
import { Paragraph } from "@/components/common/Typography";

const AboutUsHeaderSection = () => {
    return (
        <div className="flex flex-col gap-5.25">
            <Badge variant="outline" className="bg-white! border border-input-border-default! rounded-[21px]! px-7! py-4!">
                <Paragraph className="text-[#2D2D2D]! leading-none! text-center!">
                    About us
                </Paragraph>
            </Badge>
            <Heading2 className="text-[48px]! leading-15.5!">
                Why Choose Half Byte?
            </Heading2>
            <Paragraph className="text-navlink-text! leading-6.75!">
                Half Byte is a Saudi company that bridges the gap between business needs and complex technology—delivering practical, secure, and scalable solutions for organizations at any stage of digital maturity.
            </Paragraph>
        </div>
    );
};

export default AboutUsHeaderSection;