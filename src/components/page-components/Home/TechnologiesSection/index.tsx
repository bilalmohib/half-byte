import Container from "@/components/common/Container";
import TechnologiesBodySection from "@/components/page-components/Home/TechnologiesSection/TechnologiesBodySection";
import TechnologiesHeaderSection from "@/components/page-components/Home/TechnologiesSection/TechnologiesHeaderSection";

const TechnologiesSection = () => {
    return (
        <div className="bg-background w-full pt-15.75 pb-22.5">
            <Container>
                <div className="flex flex-col gap-11.25">
                    <TechnologiesHeaderSection />
                    <TechnologiesBodySection />
                </div>
            </Container>
        </div>
    );
};

export default TechnologiesSection;