import { Heading3, Paragraph } from "@/components/common/Typography";

const AboutUsRightSection = () => {
    return (
        <div>
            <div className="bg-image-about-us-right-section bg-cover bg-center bg-no-repeat rounded-[10px] h-[360px] md:h-[434px] lg:h-[507px] overflow-hidden">
                <div className="about-us-badge-wrapper">
                    <div className="w-[125px] ssmd:w-[165px] md:w-[228px] lg:w-[197px] min-h-[85px] ssmd:min-h-[129px] md:min-h-[146px] lg:h-[170px] rounded-[10px] bg-primary px-3.75 ssmd:px-4.75 py-3 ssmd:py-5.5 md:px-8.75 md:py-6.5 lg:p-6.5">
                        <Heading3 className="text-[#FAFFFC]! leading-10.75! lg:leading-13.5! lg:text-[46px]!">
                            30+
                        </Heading3>
                        <Paragraph className="text-[#F5F4F4]! text-sm! md:text-base! leading-5! lg:leading-5.25!">
                            Years Combined <br /> Industry Experience
                        </Paragraph>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsRightSection;