import { Heading2, Paragraph } from "@/components/common/Typography";

const AboutUsRightSection = () => {
    return (
        <div>
            <div className="bg-image-about-us-right-section bg-cover bg-center bg-no-repeat rounded-[10px] h-[507px]">
                <div className="bg-white rounded-[10px] pr-4 pb-4 pl-0 pt-0 relative top-0 left-0 w-fit">
                    <div className="w-[197px] h-[170px] rounded-[10px] bg-primary p-6.5">
                        <Heading2 className="text-[#FAFFFC]! leading-13.5!">
                            30+
                        </Heading2>
                        <Paragraph className="text-[#F5F4F4]! leading-5.25! md:text-base!">
                            Years Combined <br /> Industry Experience
                        </Paragraph>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsRightSection;