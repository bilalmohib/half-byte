import { Badge } from "@/components/ui/badge";
import { Heading2 } from "@/components/common/Typography";
import { Paragraph } from "@/components/common/Typography";

const TechnologiesHeaderSection = () => {
    return (
        <div className="flex flex-col gap-5.5">
            <Badge variant="outline" className="bg-background! border border-input-border-default! rounded-[21px]! px-7! py-4!">
                <Paragraph className="text-[#2D2D2D]! leading-none! text-center!">
                    Technologies
                </Paragraph>
            </Badge>
            <Heading2 className="text-[48px]! leading-15.5!">
                Technologies
            </Heading2>
        </div>
    );
};

export default TechnologiesHeaderSection;