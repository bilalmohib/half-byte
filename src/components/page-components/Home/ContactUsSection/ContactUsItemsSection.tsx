import { LuPhone } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { Heading5, Paragraph } from "@/components/common/Typography";

const ContactUsItemsSection = () => {
    return (
        <div className="grid grid-cols-3 gap-26.5 w-full">
            <div className="rounded-[5px] border border-[#DBDBDB] border-solid bg-white py-6.5 px-7.5">
                <div className="flex flex-row gap-5.75">
                    <div className="bg-[#F6F6F6] rounded-[3px] flex items-center justify-center w-fit h-fit px-3.5 py-3.25">
                        <GrLocation color="#175D31" className="w-6.75 h-6.75" />
                    </div>
                    <div className="flex flex-col gap-5 pt-2">
                        <Heading5 className="leading-7.75!">
                            Address
                        </Heading5>
                        <Paragraph className="lg:text-xl! leading-6.75!">
                            Riyadh, King Abdulaziz <br className="hidden md:block" /> Road, RRRB6143
                        </Paragraph>
                    </div>
                </div>
            </div>
            <div className="rounded-[5px] border border-[#DBDBDB] border-solid bg-white py-6.5 px-7.5">
                <div className="flex flex-row gap-5.75">
                    <div className="bg-[#F6F6F6] rounded-[3px] flex items-center justify-center w-fit h-fit px-3.5 py-3.25">
                        <AiOutlineMail color="#175D31" className="w-7.75 h-7.75" />
                    </div>
                    <div className="flex flex-col gap-5 pt-2">
                        <Heading5 className="leading-7.75!">
                            Email Address
                        </Heading5>
                        <div className="flex flex-col gap-3.25">
                            <Paragraph className="lg:text-xl! leading-6.75!">
                                khalid@halfbyte.com.sa
                            </Paragraph>
                            <Paragraph className="lg:text-xl! leading-6.75!">
                                info@halfbyte.com.sa
                            </Paragraph>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rounded-[5px] border border-[#DBDBDB] border-solid bg-white py-6.5 px-7.5">
                <div className="flex flex-row gap-5.75">
                    <div className="bg-[#F6F6F6] rounded-[3px] flex items-center justify-center w-fit h-fit px-3.5 py-3.25">
                        <LuPhone color="#175D31" className="w-7.25 h-7.25" />
                    </div>
                    <div className="flex flex-col gap-5 pt-2">
                        <Heading5 className="leading-7.75!">
                            Phone Number
                        </Heading5>
                        <Paragraph className="lg:text-xl! leading-6.75!">
                            +966 554607074
                        </Paragraph>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsItemsSection;