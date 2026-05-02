"use client";

import Container from "@/components/common/Container";
import { Heading2, Paragraph } from "@/components/common/Typography";
import AboutUsReasons from "@/components/page-components/Home/AboutUsSection/AboutUsReasons";
import AboutUsRightSection from "@/components/page-components/Home/AboutUsSection/AboutUsRightSection";
import AboutUsHeaderSection from "@/components/page-components/Home/AboutUsSection/AboutUsHeaderSection";
import { useT } from "@/i18n/DictionaryProvider";

const AboutUsSection = () => {
  const dict = useT();
  return (
    <section id="about-us" className="scroll-mt-32 bg-white">
      <Container className="grid grid-cols-1 gap-7.5 md:gap-10.75 lg:gap-0 lg:grid-cols-2 py-22.5 md:py-27.5 lg:py-35">
        <div>
          <div className="flex flex-col gap-7 md:gap-8.75 lg:gap-11.5">
            <AboutUsHeaderSection />
            <AboutUsReasons />
          </div>
        </div>
        <div>
          <AboutUsRightSection />
        </div>
      </Container>

      <Container className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-10 gap-3.5 lg:gap-9.5">
        <div className="col-span-1 md:col-span-4 lg:col-span-4 flex flex-col gap-3.75 lg:gap-5 bg-background rounded-[10px] py-7 md:py-8 lg:py-10.5 px-5.5 md:px-5 lg:px-9.25">
          <Heading2 className="text-[30px]! md:text-[34px]! lg:text-[46px]! leading-11.5 lg:leading-15.5!">
            {dict.aboutUs.mission.heading}
          </Heading2>
          <Paragraph className="leading-5! lg:leading-6.75! text-navlink-text!">
            {dict.aboutUs.mission.description}
          </Paragraph>
        </div>
        <div className="col-span-1 md:col-span-4 lg:col-span-4 flex flex-col gap-3.75 lg:gap-5 bg-background rounded-[10px] py-7 md:py-8 lg:py-10.5 px-5.5 md:px-5 lg:px-9.25">
          <Heading2 className="text-[30px]! md:text-[34px]! lg:text-[46px]! leading-11.5 lg:leading-15.5!">
            {dict.aboutUs.vision.heading}
          </Heading2>
          <Paragraph className="leading-5! lg:leading-6.75! text-navlink-text!">
            {dict.aboutUs.vision.description}
          </Paragraph>
        </div>
        <div className="col-span-1 md:col-span-4 lg:col-span-2 rounded-[10px] w-full h-[241px] md:h-full relative bg-image-about-us-bottom-right-image bg-cover bg-center bg-no-repeat" />
      </Container>
    </section>
  );
};

export default AboutUsSection;
