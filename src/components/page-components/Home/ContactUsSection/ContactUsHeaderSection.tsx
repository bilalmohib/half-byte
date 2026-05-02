"use client";

import { Heading2 } from "@/components/common/Typography";
import { useT } from "@/i18n/DictionaryProvider";

const ContactUsHeaderSection = () => {
  const dict = useT();
  return (
    <Heading2 className="lg:text-[46px]! leading-15.5! text-center">
      {dict.contactUs.heading}
    </Heading2>
  );
};

export default ContactUsHeaderSection;
