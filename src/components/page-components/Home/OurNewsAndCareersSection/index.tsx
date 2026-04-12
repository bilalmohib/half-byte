import Container from "@/components/common/Container";
import OurNewsBodySection from "@/components/page-components/Home/OurNewsAndCareersSection/OurNewsBodySection";
import OurCareersBodySection from "@/components/page-components/Home/OurNewsAndCareersSection/OurCareersBodySection";
import OurNewsAndCareersHeaderSection from "@/components/page-components/Home/OurNewsAndCareersSection/OurNewsAndCareersHeaderSection";

const OurNewsAndCareersSection = () => {
    return (
        <Container className="bg-background rounded-[10px] py-17.5">
            <Container className="max-w-[1250px] mx-auto flex flex-col gap-10.5">
                <div className="flex flex-col gap-17.5">
                    <OurNewsAndCareersHeaderSection />
                    <OurNewsBodySection />
                </div>
                <OurCareersBodySection />
            </Container>
        </Container>
    );
};

export default OurNewsAndCareersSection;