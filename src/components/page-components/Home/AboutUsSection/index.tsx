import Image from "next/image";
import Container from "@/components/common/Container";
import { Heading2, Paragraph } from "@/components/common/Typography";
import AboutUsReasons from "@/components/page-components/Home/AboutUsSection/AboutUsReasons";
import AboutUsRightSection from "@/components/page-components/Home/AboutUsSection/AboutUsRightSection";
import AboutUsHeaderSection from "@/components/page-components/Home/AboutUsSection/AboutUsHeaderSection";

const AboutUsSection = () => {
    return (
        <div className="bg-white">
            <Container className="grid grid-cols-2 py-35">
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

            <Container className="grid grid-cols-10 gap-9.5">
                <div className="col-span-4 flex flex-col gap-5 bg-background rounded-[10px] py-10.5 px-9.25">
                    <Heading2 className="lg:text-[48px]! leading-15.5!">
                        Our Mission
                    </Heading2>
                    <Paragraph>
                        To deliver reliable, scalable, and state-of-the-art technologies by building intuitive infrastructures designed for cutting-edge solutions that enhance automation, productivity, and intelligent decision-making—all powered by AI and secured through cohesive cybersecurity layers tailored to each client’s needs and maturity level.
                    </Paragraph>
                </div>
                <div className="col-span-4 flex flex-col gap-5 bg-background rounded-[10px] py-10.5 px-9.25">
                    <Heading2 className="lg:text-[48px]! leading-15.5!">
                        Our Vision
                    </Heading2>
                    <Paragraph className="leading-6.75! text-navlink-text!">
                        To seamlessly integrate technology into daily business activities and partner with clients to adopt reliable, scalable, and modern digital solutions that enhance productivity.
                    </Paragraph>
                </div>
                <div className="col-span-2 rounded-[10px] w-full h-full relative bg-image-about-us-bottom-right-image bg-cover bg-center bg-no-repeat">
                </div>
            </Container>
        </div>
    );
};

export default AboutUsSection;