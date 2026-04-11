import Container from "@/components/common/Container";
import OurNewsAndCareersHeaderSection from "@/components/page-components/Home/OurNewsAndCareersSection/OurNewsAndCareersHeaderSection";

const OurNewsAndCareersSection = () => {
    return (
        <Container className="bg-background rounded-[10px] py-17.5">
            <Container>
                <OurNewsAndCareersHeaderSection />
                <OurNewsAndCareersBodySection />
            </Container>
        </Container>
    );
};

export default OurNewsAndCareersSection;