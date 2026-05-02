"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Paragraph } from "@/components/common/Typography";
import { aboutUsReasonsData } from "@/components/page-components/Home/AboutUsSection/AboutUsReasons/data";
import { useT } from "@/i18n/DictionaryProvider";

const AboutUsReasons = () => {
  const dict = useT();

  return (
    <div className="grid grid-cols-1 ssmd:grid-cols-3">
      {aboutUsReasonsData.map((reason, key) => {
        const label = dict.aboutUs.reasons[reason.dictKey];
        return (
          <div
            key={reason.dictKey}
            className={cn(
              "flex flex-col justify-center items-center gap-2.5 md:gap-3.25 lg:gap-3.5",
              key === aboutUsReasonsData.length - 1 &&
                "border-b-0! ssmd:border-r-0!",
              key !== 0 && "border-t-0! ssmd:border-l-0!",
              "border-[#B3B3B3] border-solid border-b ssmd:border-y-0 py-4 ssmd:py-0",
            )}
          >
            <Image
              src={reason.image.src}
              alt={label}
              width={reason.image.width}
              height={reason.image.height}
            />
            <Paragraph className="text-center text-navlink-text! md:text-base! leading-5! md:leading-5.25! px-3 sm:px-0">
              {label}
            </Paragraph>
          </div>
        );
      })}
    </div>
  );
};

export default AboutUsReasons;
