import { Suspense } from "react";
import Container from "@/components/common/Container";
import TechnologiesBodySection from "@/components/page-components/Home/TechnologiesSection/TechnologiesBodySection";
import TechnologiesHeaderSection from "@/components/page-components/Home/TechnologiesSection/TechnologiesHeaderSection";

const TechnologiesSection = () => {
  return (
    <section
      id="technologies"
      className="scroll-mt-32 bg-background w-full pt-6 md:pt-8 lg:pt-12 pb-8 md:pb-9.5 lg:pb-13"
    >
      <Container>
        <div className="flex flex-col gap-6.25 md:gap-8.75 lg:gap-11.25">
          <TechnologiesHeaderSection />
          <Suspense fallback={null}>
            <TechnologiesBodySection />
          </Suspense>
        </div>
      </Container>
    </section>
  );
};

export default TechnologiesSection;