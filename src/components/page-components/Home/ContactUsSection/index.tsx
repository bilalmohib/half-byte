import Container from "@/components/common/Container";
import ContactUsItemsSection from "@/components/page-components/Home/ContactUsSection/ContactUsItemsSection";
import ContactUsHeaderSection from "@/components/page-components/Home/ContactUsSection/ContactUsHeaderSection";
import ContactUsFollowUsSection from "@/components/page-components/Home/ContactUsSection/ContactUsFollowUsSection";

const ContactUsSection = () => {
    return (
        <section id="contact-us" className="scroll-mt-32">
        <Container className="py-22.5 md:py-27.5 lg:py-35 flex flex-col gap-6.25 md:gap-8.75 lg:gap-11.25">
            <ContactUsHeaderSection />
            <div className="flex flex-col gap-6.25 md:gap-12.5 lg:gap-15">
                <ContactUsItemsSection />
                <ContactUsFollowUsSection />
            </div>
        </Container>
        </section>
    )
}

export default ContactUsSection;