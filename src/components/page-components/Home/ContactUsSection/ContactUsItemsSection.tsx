"use client";

import Link from "next/link";
import { LuPhone } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { Heading5, Paragraph } from "@/components/common/Typography";
import { useT } from "@/i18n/DictionaryProvider";

const PHONE_VALUE = "+966 554607074";
const PHONE_HREF = "tel:+966554607074";
const EMAILS = ["khalid@halfbyte.com.sa", "info@halfbyte.com.sa"] as const;
const ADDRESS_MAP_HREF =
  "https://www.google.com/maps/search/?api=1&query=King+Abdulaziz+Road+RRRB6143+Riyadh";

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
            <Link
              href={ADDRESS_MAP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <Paragraph className="lg:text-xl! leading-5 md:leading-5.25 lg:leading-6.75! hover:text-primary">
                {dict.contactUs.address.value}
              </Paragraph>
            </Link>
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
            <div className="flex flex-col gap-2.25 md:gap-1.75 lg:gap-3.25">
              {EMAILS.map((email) => (
                <Link
                  key={email}
                  href={`mailto:${email}`}
                  className="no-underline"
                >
                  <Paragraph className="lg:text-xl! leading-5 md:leading-5.25 lg:leading-6.75! hover:text-primary">
                    {email}
                  </Paragraph>
                </Link>
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
            <Link href={PHONE_HREF} className="no-underline">
              <Paragraph className="lg:text-xl! leading-5 md:leading-5.25 lg:leading-6.75! hover:text-primary">
                {PHONE_VALUE}
              </Paragraph>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsItemsSection;
