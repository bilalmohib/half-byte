"use client";

import { Heading2 } from "@/components/common/Typography";
import { useT } from "@/i18n/DictionaryProvider";

const OurStrategicGoalsHeaderSection = () => {
  const dict = useT();
  return (
    <Heading2 className="text-[30px]! md:text-4xl! lg:text-[46px]! leading-10.25! md:leading-11.5! lg:leading-15.5! text-center">
      {dict.strategicGoals.heading}
    </Heading2>
  );
};

export default OurStrategicGoalsHeaderSection;
