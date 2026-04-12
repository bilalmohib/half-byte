import Container from "@/components/common/Container";
import ContactUsItemsSection from "@/components/page-components/Home/ContactUsSection/ContactUsItemsSection";
import ContactUsHeaderSection from "@/components/page-components/Home/ContactUsSection/ContactUsHeaderSection";
import ContactUsFollowUsSection from "@/components/page-components/Home/ContactUsSection/ContactUsFollowUsSection";

const ContactUsSection = () => {
    return (
        <Container className="py-35 flex flex-col gap-11.25">
            <ContactUsHeaderSection />
            <div className="flex flex-col gap-15">
                <ContactUsItemsSection />
                <ContactUsFollowUsSection />
            </div>
        </Container>
    )
}

export default ContactUsSection;