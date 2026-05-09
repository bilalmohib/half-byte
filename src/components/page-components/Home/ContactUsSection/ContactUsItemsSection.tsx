"use client";

import { LuPhone } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { Heading5 } from "@/components/common/Typography";
import { MailtoLink, TelLink } from "@/components/common/contact-links";
import { useT } from "@/i18n/DictionaryProvider";

const PHONE_VALUE = "+966 554607074";
const PHONE_HREF = "tel:+966554607074";
const EMAILS = ["khalid@halfbyte.com.sa", "info@halfbyte.com.sa"] as const;
const ADDRESS_MAP_HREF =
  "https://maps.app.goo.gl/JRc6tTynKhkjPn4k9";

const ContactUsItemsSection = () => {
  const dict = useT();
  return (
    <div className="grid grid-cols-1 mllg:grid-cols-3 gap-5 lg:gap-26.5 w-full">
      <div className="rounded-[5px] border border-[#DBDBDB] border-solid bg-white py-3.5 md:py-6.75 lg:py-6.5 px-3.5 lg:px-7.5">
        <div className="flex flex-row gap-2.25 lg:gap-5.75">
          <div className="bg-[#F6F6F6] rounded-[3px] flex items-center justify-center w-fit h-fit px-3 lg:px-3.5 py-2.75 lg:py-3.25">
            <GrLocation
              color="#175D31"
              className="w-5.75 lg:w-6.75 h-5.75 lg:h-6.75"
            />
          </div>
          <div className="flex flex-col gap-2.5 md:gap-2.25 lg:gap-5 pt-1 md:pt-1.5 lg:pt-2">
            <Heading5 className="leading-5 md:leading-6.25 lg:leading-7.75!">
              {dict.contactUs.address.label}
            </Heading5>
            <a
              href={ADDRESS_MAP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="font-roboto font-normal lg:text-xl! leading-5 md:leading-5.25 lg:leading-6.75! text-heading no-underline hover:text-primary cursor-pointer wrap-break-word"
            >
              {dict.contactUs.address.value}
            </a>
          </div>
        </div>
      </div>
      <div className="rounded-[5px] border border-[#DBDBDB] border-solid bg-white py-3.5 md:py-6.75 lg:py-6.5 px-3.5 lg:px-7.5">
        <div className="flex flex-row gap-2.25 lg:gap-5.75">
          <div className="bg-[#F6F6F6] rounded-[3px] flex items-center justify-center w-fit h-fit px-2.5 lg:px-3.5 py-2.25 lg:py-3.25">
            <AiOutlineMail
              color="#175D31"
              className="w-6.75 lg:w-7.75 h-6.75 lg:h-7.75"
            />
          </div>
          <div className="flex flex-col gap-5 pt-2">
            <Heading5 className="leading-5 md:leading-6.25 lg:leading-7.75!">
              {dict.contactUs.email.label}
            </Heading5>
            <div className="flex min-w-0 flex-col gap-2.25 md:gap-1.75 lg:gap-3.25">
              {EMAILS.map((email) => (
                <MailtoLink
                  key={email}
                  email={email}
                  className="font-roboto font-normal lg:text-xl! leading-5 md:leading-5.25 lg:leading-6.75! text-heading no-underline hover:text-primary cursor-pointer break-all"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-[5px] border border-[#DBDBDB] border-solid bg-white py-3.5 md:py-6.75 lg:py-6.5 px-3.5 lg:px-7.5">
        <div className="flex flex-row gap-2.25 lg:gap-5.75">
          <div className="bg-[#F6F6F6] rounded-[3px] flex items-center justify-center w-fit h-fit px-2.5 lg:px-3.5 py-2.25 lg:py-3.25">
            <LuPhone
              color="#175D31"
              className="w-6.5 lg:w-7.25 h-6.5 lg:h-7.25"
            />
          </div>
          <div className="flex flex-col gap-5 pt-2">
            <Heading5 className="leading-5 md:leading-6.25 lg:leading-7.75!">
              {dict.contactUs.phone.label}
            </Heading5>
            <TelLink
              href={PHONE_HREF}
              className="font-roboto font-normal lg:text-xl! leading-5 md:leading-5.25 lg:leading-6.75! text-heading no-underline hover:text-primary cursor-pointer"
            >
              {PHONE_VALUE}
            </TelLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsItemsSection;
