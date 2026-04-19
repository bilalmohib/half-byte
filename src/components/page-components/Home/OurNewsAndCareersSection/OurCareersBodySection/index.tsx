import Image from "next/image";
import { Heading2, Heading6 } from "@/components/common/Typography";
import OurCareersBodyForm from "@/components/page-components/Home/OurNewsAndCareersSection/OurCareersBodySection/OurCareersBodyForm";

const OurCareersBodySection = () => {
    return (
        <div className="border border-[#BABABA] border-solid rounded-[5px] grid grid-cols-1 sm:grid-cols-10">
            <div className="col-span-1 sm:col-span-5 lg:col-span-4">
                <Image
                    src="/assets/pages/Home/OurNewsAndCareers/OurCareersBodySection/leftSideImage.png"
                    alt="join half byte team"
                    width={565}
                    height={540}
                    className="w-full h-full object-cover rounded-tl-[5px] rounded-bl-[5px]"
                />
            </div>
            <div className="col-span-1 sm:col-span-5 lg:col-span-6 py-10.5 lg:py-11 pl-5 lg:pl-11 pr-5 lg:pr-13.5 flex flex-col gap-5 lg:gap-7.25">
                <div className="flex flex-col gap-2.5 lg:gap-3.75">
                    <Heading2 className="text-[32px]! lg:text-[40px]! leading-10.25! lg:leading-12.75!">
                        Join Half Byte Team
                    </Heading2>
                    <Heading6 className="leading-5.25! lg:leading-6.75!">
                        Register your interest to become part of the Half Byte team.
                    </Heading6>
                </div>
                <OurCareersBodyForm />
            </div>
        </div>
    );
};

export default OurCareersBodySection;