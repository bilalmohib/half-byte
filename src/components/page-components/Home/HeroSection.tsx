import { Button } from "@/components/ui/button";
import { Heading2, Paragraph } from "@/components/common/Typography";

const HeroSection = () => {
    return (
        <div className="bg-image-home-hero relative h-[97.5vh] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-[#0000008C]" />
            <div className="z-10 absolute bottom-9 -translate-y-1/2 w-full px-4 md:px-0">
                <div className="flex flex-col gap-9.5">
                    <div className="flex flex-col gap-3 justify-center items-center">
                        <Heading2 className="text-white! md:text-[48px]! leading-[130%]! uppercase">
                            Half Byte هاف بايت
                        </Heading2>
                        <Paragraph className="text-white! md:text-xl! leading-[136%]! text-center">
                            Amplifying Digital Power
                        </Paragraph>
                    </div>
                    <div className="border border-transparent ssm:border-[#C3C3C3] rounded-none ssm:rounded-[62px] ssm:p-2 flex flex-col gap-4 ssm:gap-0 ssm:flex-row ssm:max-w-full mllg:w-[484px]! bg-transparent ssm:bg-white mx-auto">
                        <Button variant="default" className="bg-primary! w-full ssm:w-36.5! mllg:w-55! h-13! mllg:h-15! hover:bg-buttonHover! rounded-lg ssm:rounded-[53px]! p-2.5! text-base! mllg:text-xl! font-roboto font-normal">
                            Contact Us
                        </Button>
                        <Button variant="default" className="bg-white! ssm:bg-transparent! hover:bg-transparent! rounded-lg ssm:rounded-[53px]! px-8 py-2.5! ssm:px-2.5! ssm:py-2.5! flex justify-center mx-auto items-center max-w-full ssm:max-w-fit! mllg:w-55! h-13! mllg:h-15! text-base! mllg:text-xl! text-heading font-roboto font-normal">
                            Explore Technologies
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;