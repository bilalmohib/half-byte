import { Button } from "@/components/ui/button";
import Container from "@/components/common/Container";
import { Heading2 } from "@/components/common/Typography";

const CallToActionSection = () => {
    return (
        <div className="pb-22.75 h-auto">
            <Container className="relative w-full overflow-hidden rounded-[10px] bg-primary">
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
                <div className="relative z-10 flex flex-col gap-15.75 pt-28.75 pb-26.5">
                    <Heading2 className="lg:text-5xl! leading-tight! md:leading-15.5! text-white! text-center!">
                        Ready to Elevate Your Business with <br className="hidden md:block" /> Smart Technology?
                    </Heading2>
                    <div className="flex flex-row gap-5 justify-center items-center">
                        <Button variant="default" className="bg-white! w-55! h-15! hover:bg-buttonHover! border border-white border-solid text-primary! rounded-[53px]! p-2.5! text-xl font-normal">
                            Get A Consultation
                        </Button>
                        <Button variant="default" className="bg-transparent! w-55! h-15! hover:bg-transparent! text-white! border border-white border-solid rounded-[53px]! p-2.5! text-xl font-roboto font-normal">
                            Contact Us
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CallToActionSection;