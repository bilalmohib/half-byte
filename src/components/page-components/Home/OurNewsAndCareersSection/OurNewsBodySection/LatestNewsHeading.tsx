"use client";

import { Heading2 } from "@/components/common/Typography";
import { useT } from "@/i18n/DictionaryProvider";

const LatestNewsHeading = () => {
  const dict = useT();
  return (
    <Heading2 className="text-[30px]! lg:text-[38px]! leading-7.75! md:leading-10.25! lg:leading-12.75!">
      {dict.newsAndCareers.latestNews}
    </Heading2>
  );
};

export default LatestNewsHeading;
