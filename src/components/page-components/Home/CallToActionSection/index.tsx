"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Container from "@/components/common/Container";
import { Heading2 } from "@/components/common/Typography";
import { goToHomeSection } from "@/lib/hash-nav";
import { useT } from "@/i18n/DictionaryProvider";

const CallToActionSection = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dict = useT();

  return (
    <Container className="pb-12.5 md:pb-18 lg:pb-22.75 h-auto">
      <div className="relative w-full overflow-hidden rounded-[10px] bg-primary">
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-[10px]"
          aria-hidden
        >
          <div className="absolute -left-[22%] -top-[32%] size-[min(92vw,440px)] rounded-full border border-[#ADEBCA4D] sm:-left-24 sm:-top-36 sm:size-[340px]" />
          <div className="absolute -bottom-[58%] left-90 size-[min(110vw,560px)] -translate-x-1/2 rounded-full border border-[#ADEBCA4D] sm:-bottom-[140px] sm:size-[340px]" />
          <div className="absolute -right-[20%] -top-[38%] size-[min(88vw,480px)] rounded-full border border-[#ADEBCA4D] sm:right-31.25 sm:-top-25 sm:size-[340px]" />
          <div className="absolute -bottom-[28%] -right-[24%] size-[min(78vw,400px)] rounded-full border border-[#ADEBCA4D] sm:-bottom-40 sm:-right-15 sm:size-[340px]" />
        </div>
        <div className="relative z-10 flex flex-col gap-6.25 md:gap-11.5 lg:gap-15.75 pt-24.75 lg:pt-28.75 pb-24.75 md:pb-24.25 lg:pb-26.5 px-4">
          <Heading2 className="text-[30px]! sm:text-4xl! md:text-4xl! lg:text-5xl! leading-tight! md:leading-15.5! text-white! text-center!">
            {dict.callToAction.heading}
          </Heading2>
          <div className="flex flex-col ssm:flex-row gap-2.75 md:gap-5.5 lg:gap-5 justify-center items-center">
            <Button
              type="button"
              variant="default"
              onClick={() => goToHomeSection("contact-us", pathname, router)}
              className="bg-white! hover:bg-white/90! w-full ssm:w-38.25! md:w-47.5! lg:w-55! h-11! md:h-13.5! lg:h-15! border border-white border-solid text-primary! rounded-[53px]! p-2.5! text-[13px] md:text-base lg:text-xl font-normal"
            >
              {dict.callToAction.consultation}
            </Button>
            <Button
              type="button"
              variant="default"
              onClick={() => goToHomeSection("contact-us", pathname, router)}
              className="bg-transparent! w-full ssm:w-38.25! md:w-47.5! lg:w-55! h-11! md:h-13.5! lg:h-15! hover:bg-transparent! text-white! border border-white border-solid rounded-[53px]! p-2.5! text-[13px] md:text-base lg:text-xl font-roboto font-normal"
            >
              {dict.callToAction.contactUs}
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CallToActionSection;
