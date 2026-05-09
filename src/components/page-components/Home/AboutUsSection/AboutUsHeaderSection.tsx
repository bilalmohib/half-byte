"use client";

import { Heading2, Paragraph } from "@/components/common/Typography";
import { useT } from "@/i18n/DictionaryProvider";

const AboutUsHeaderSection = () => {
  const dict = useT();
  return (
    <div className="flex flex-col gap-2 md:gap-3.75 lg:gap-5.25">
      <Heading2 className="text-[30px]! md:text-4xl! lg:text-[46px]! leading-10.25! md:leading-11.5! lg:leading-15.5!">
        {dict.aboutUs.heading}
      </Heading2>
      <Paragraph className="text-navlink-text! leading-5! md:leading-5.25! lg:leading-6.75!">
        {dict.aboutUs.description}
      </Paragraph>
    </div>
  );
};

export default AboutUsHeaderSection;
