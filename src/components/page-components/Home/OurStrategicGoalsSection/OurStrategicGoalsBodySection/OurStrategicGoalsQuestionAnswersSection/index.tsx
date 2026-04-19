import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { ourStrategicGoalsQuestionAnswersSectionData } from "@/components/page-components/Home/OurStrategicGoalsSection/OurStrategicGoalsBodySection/OurStrategicGoalsQuestionAnswersSection/data";
import { Heading5, Paragraph } from "@/components/common/Typography";
import { cn } from "@/lib/utils";

function OurStrategicGoalsQuestionAnswersSection() {
    return (
        <Accordion
            type="single"
            defaultValue={ourStrategicGoalsQuestionAnswersSectionData[0]?.id.toString()}
            className="max-w-full"
        >
            {ourStrategicGoalsQuestionAnswersSectionData.map((item) => (
                <AccordionItem key={item.id} value={item.id.toString()} className={cn("pb-5! pt-6! lg:py-7.5!", "border-b border-b-[#EAEAEA] border-solid", item.id == 1 && "pt-0! md:py-6.75! lg:py-7.5!")}
                >
                    <AccordionTrigger className="no-underline! cursor-pointer py-0!">
                        <Heading5 className="text-base! md:text-xl! lg:text-2xl! leading-5! md:leading-6.25! lg:leading-7.75!">
                            {item.id}. {item.question}
                        </Heading5>
                    </AccordionTrigger>
                    <AccordionContent>
                        <Paragraph className="text-navlink-text! leading5! md:leading-5.25! lg:leading--6.75! pt-3.75!">
                            {item.answer}
                        </Paragraph>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}
export default OurStrategicGoalsQuestionAnswersSection;