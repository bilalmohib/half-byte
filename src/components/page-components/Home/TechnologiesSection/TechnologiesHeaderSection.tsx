"use client";

import { Heading2 } from "@/components/common/Typography";
import { useT } from "@/i18n/DictionaryProvider";

const TechnologiesHeaderSection = () => {
  const dict = useT();
  return (
    <div className="flex flex-col gap-2.5 md:gap-3.75 lg:gap-5.5">
      <Heading2 className="lg:text-[46px]! leading-normal lg:leading-15.5!">
        {dict.technologies.heading}
      </Heading2>
    </div>
  );
};

export default TechnologiesHeaderSection;
