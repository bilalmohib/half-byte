import { Button } from "@/components/ui/button";
import Container from "@/components/common/Container";
import { Heading2 } from "@/components/common/Typography";

const CallToActionSection = () => {
    return (
        <Container className="pb-12.5 md:pb-18 lg:pb-22.75 h-auto">
            <div className="relative w-full overflow-hidden rounded-[10px] bg-primary">
                <div
                    className="pointer-events-none absolute inset-0 overflow-hidden rounded-[10px]"
                    aria-hidden
                >
                    {/* Top-left: large circle — mostly outside; arc along top & left edges */}
                    <div className="absolute -left-[22%] -top-[32%] size-[min(92vw,440px)] rounded-full border border-[#ADEBCA4D] sm:-left-24 sm:-top-36 sm:size-[340px]" />
                    {/* Bottom-center: circle sits low; top arc sweeps behind the buttons */}
                    <div className="absolute -bottom-[58%] left-90 size-[min(110vw,560px)] -translate-x-1/2 rounded-full border border-[#ADEBCA4D] sm:-bottom-[140px] sm:size-[340px]" />
                    {/* Top-right: large ring clipped by top & right (sits behind heading on the right) */}
                    <div className="absolute -right-[20%] -top-[38%] size-[min(88vw,480px)] rounded-full border border-[#ADEBCA4D] sm:right-31.25 sm:-top-25 sm:size-[340px]" />
                    {/* Bottom-right: arc from the corner */}
                    <div className="absolute -bottom-[28%] -right-[24%] size-[min(78vw,400px)] rounded-full border border-[#ADEBCA4D] sm:-bottom-40 sm:-right-15 sm:size-[340px]" />
                </div>
                <div className="relative z-10 flex flex-col gap-6.25 md:gap-11.5 lg:gap-15.75 pt-24.75 lg:pt-28.75 pb-24.75 md:pb-24.25 lg:pb-26.5 px-4">
                    <Heading2 className="text-[32px]! sm:text-4xl! md:text-4xl! lg:text-5xl! leading-tight! md:leading-15.5! text-white! text-center!">
                        Ready to Elevate Your Business with <br className="hidden md:block" /> Smart Technology?
                    </Heading2>
                    <div className="flex flex-col ssm:flex-row gap-2.75 md:gap-5.5 lg:gap-5 justify-center items-center">
                        <Button variant="default" className="bg-white! w-full ssm:w-38.25! md:w-47.5! lg:w-55! h-11! md:h-13.5! lg:h-15! hover:bg-buttonHover! border border-white border-solid text-primary! rounded-[53px]! p-2.5! text-[15px] md:text-base lg:text-xl font-normal">
                            Get A Consultation
                        </Button>
                        <Button variant="default" className="bg-transparent! w-full ssm:w-38.25! md:w-47.5! lg:w-55! h-11! md:h-13.5! lg:h-15! hover:bg-transparent! text-white! border border-white border-solid rounded-[53px]! p-2.5! text-[15px] md:text-base lg:text-xl font-roboto font-normal">
                            Contact Us
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CallToActionSection;