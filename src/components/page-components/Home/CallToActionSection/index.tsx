import { Button } from "@/components/ui/button";
import Container from "@/components/common/Container";
import { Heading2 } from "@/components/common/Typography";

const CallToActionSection = () => {
    return (
        <div>
            <Container className="bg-primary w-full">
                <div className="w-full h-full absolute inset-0">
                    <div className="w-[340px] h-[340px] border border-[#ADEBCA4D] rounded-full -left-4 -top-4">

                    </div>
                    <div className="w-[340px] h-[340px] border border-[#ADEBCA4D] rounded-full">

                    </div>
                    <div className="w-[340px] h-[340px] border border-[#ADEBCA4D] rounded-full">

                    </div>
                    <div className="w-[340px] h-[340px] border border-[#ADEBCA4D] rounded-full">

                    </div>
                </div>
                <div className="flex flex-col gap-15.75 pt-28.75 pb-26.5">
                    <Heading2 className="lg:text-5xl! leading-tight! md:leading-15.5! text-white! text-center!">
                        Ready to Elevate Your Business with <br className="hidden md:block" /> Smart Technology?
                    </Heading2>
                    <div>
                        <Button variant="default" className="bg-white! w-55! h-15! hover:bg-buttonHover! rounded-[53px]! p-2.5! text-xl font-normal">
                            Get A Consultation
                        </Button>
                        <Button variant="default" className="bg-transparent! w-55! h-15! hover:bg-transparent! rounded-[53px]! p-2.5! text-xl font-roboto font-normal">
                            Contact Us
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CallToActionSection;