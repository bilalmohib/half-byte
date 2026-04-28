import Container from "@/components/common/Container";
import OurNewsBodySection from "@/components/page-components/Home/OurNewsAndCareersSection/OurNewsBodySection";
import OurCareersBodySection from "@/components/page-components/Home/OurNewsAndCareersSection/OurCareersBodySection";
import OurNewsAndCareersHeaderSection from "@/components/page-components/Home/OurNewsAndCareersSection/OurNewsAndCareersHeaderSection";

const OurNewsAndCareersSection = () => {
    return (
        <section id="news-careers" className="scroll-mt-32">
        <Container className="bg-background rounded-[5px] md:rounded-[10px] py-10.5 md:py-17.25 lg:py-17.5">
            <Container className="max-w-[1250px] mx-auto flex flex-col gap-8.5 md:gap-8.25 lg:gap-10.5">
                <div className="flex flex-col gap-10 md:gap-13.25 lg:gap-17.5">
                    <OurNewsAndCareersHeaderSection />
                    <OurNewsBodySection />
                </div>
                <OurCareersBodySection />
            </Container>
        </Container>
        </section>
    );
};

export default OurNewsAndCareersSection;