"use client";

import { Badge } from "@/components/ui/badge";
import { Heading2, Paragraph } from "@/components/common/Typography";
import { useT } from "@/i18n/DictionaryProvider";

const TechnologiesHeaderSection = () => {
  const dict = useT();
  return (
    <div className="flex flex-col gap-2.5 md:gap-3.75 lg:gap-5.5">
      <Badge
        variant="outline"
        className="bg-background! border border-input-border-default! rounded-[21px]! px-4! md:px-4.5! lg:px-7! py-3.5! md:py-3.75! lg:py-4!"
      >
        <Paragraph className="text-[#2D2D2D]! text-sm! md:text-base! lg:text-lg! leading-none! text-center!">
          {dict.technologies.badge}
        </Paragraph>
      </Badge>
      <Heading2 className="lg:text-[46px]! leading-normal lg:leading-15.5!">
        {dict.technologies.heading}
      </Heading2>
    </div>
  );
};

export default TechnologiesHeaderSection;
