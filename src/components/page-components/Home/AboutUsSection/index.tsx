import Container from "@/components/common/Container";
import AboutUsReasons from "@/components/page-components/Home/AboutUsSection/AboutUsReasons";
import AboutUsRightSection from "@/components/page-components/Home/AboutUsSection/AboutUsRightSection";
import AboutUsHeaderSection from "@/components/page-components/Home/AboutUsSection/AboutUsHeaderSection";

const AboutUsSection = () => {
    return (
        <div className="bg-white py-35">
            <Container className="grid grid-cols-2">
                <div>
                    <div className="flex flex-col gap-11.5">
                        <AboutUsHeaderSection />
                        <AboutUsReasons />
                    </div>
                </div>
                <div>
                    <AboutUsRightSection />
                </div>
            </Container>
        </div>
    );
};

export default AboutUsSection;