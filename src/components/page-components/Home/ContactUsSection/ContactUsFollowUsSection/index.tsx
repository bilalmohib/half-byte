import Link from "next/link";
import Image from "next/image";
import { Heading3 } from "@/components/common/Typography";
import { } from "@/components/page-components/Home/ContactUsSection/ContactUsFollowUsSection/data";
import { followUsData, IFollowUsData } from "@/components/page-components/Home/ContactUsSection/ContactUsFollowUsSection/data";

const ContactUsFollowUsSection = () => {
    return (
        <div className="flex flex-col gap-7.75">
            <Heading3 className="leading-10.25! font-normal!">
                Follow us on social media:
            </Heading3>

            <div className="flex flex-row gap-11.75">
                {followUsData.map((item: IFollowUsData) => (
                    <Link href={item.link} target="_blank" rel="noopener noreferrer" key={item.id}>
                        <Image src={item.image.src} alt={item.image.alt} width={item.image.width} height={item.image.height} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ContactUsFollowUsSection;