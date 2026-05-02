"use client";

import Image from "next/image";
import { useState } from "react";
import { Heading3, Paragraph } from "@/components/common/Typography";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useT } from "@/i18n/DictionaryProvider";

const ABOUT_IMAGE_SRC = "/assets/pages/Home/AboutUsSection/rightsideimage.jpg";

const AboutUsRightSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const dict = useT();

  return (
    <div>
      <div
        className={cn(
          "relative overflow-hidden rounded-[10px]",
          "h-[360px] md:h-[434px] lg:h-[507px]",
        )}
        aria-busy={!imageLoaded}
      >
        {!imageLoaded && (
          <Skeleton
            className="absolute inset-0 z-0 size-full rounded-[10px]"
            aria-hidden
          />
        )}
        <Image
          src={ABOUT_IMAGE_SRC}
          alt={dict.aboutUs.imageAlt}
          fill
          className={cn(
            "object-cover object-center transition-opacity duration-300",
            imageLoaded ? "opacity-100" : "opacity-0",
          )}
          sizes="(max-width: 1024px) 100vw, 50vw"
          onLoadingComplete={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
        />
        <div className="about-us-badge-wrapper relative z-10">
          <div className="w-[125px] ssmd:w-[165px] md:w-[228px] lg:w-[197px] min-h-[85px] ssmd:min-h-[129px] md:min-h-[146px] lg:h-[170px] rounded-[10px] bg-primary px-3.75 ssmd:px-4.75 py-3 ssmd:py-5.5 md:px-8.75 md:py-6.5 lg:p-6.5">
            <Heading3 className="text-[#FAFFFC]! leading-10.75! lg:leading-13.5! lg:text-[44px]!">
              {dict.aboutUs.experienceBadge.number}
            </Heading3>
            <Paragraph className="text-[#F5F4F4]! text-sm! md:text-base! leading-5! lg:leading-5.25!">
              {dict.aboutUs.experienceBadge.title}
              <br />
              {dict.aboutUs.experienceBadge.subtitle}
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsRightSection;
