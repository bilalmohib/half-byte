import Image from "next/image";
import { cn } from "@/lib/utils";
import { Paragraph } from "@/components/common/Typography";
import { aboutUsReasonsData } from "@/components/page-components/Home/AboutUsSection/AboutUsReasons/data";

const AboutUsReasons = () => {
    return (
        <div className="grid grid-cols-3">
            {aboutUsReasonsData.map((reason, key) => {
                return (
                    <div key={key} className={cn("flex flex-col justify-center items-center gap-3.5",
                        key === aboutUsReasonsData.length - 1 && "border-r-0!",
                        key !== 0 && "border-l-0",
                        "border-r border-[#B3B3B3] border-solid border-y-0"
                    )}>
                        <Image src={reason.image.src} alt={reason.image.alt} width={reason.image.width} height={reason.image.height} />
                        <Paragraph
                            className="text-center text-navlink-text! md:text-base! leading-5.25!"
                            dangerouslySetInnerHTML={{ __html: reason.info }}
                        />
                    </div>
                )
            })}
        </div>
    );
};

export default AboutUsReasons;