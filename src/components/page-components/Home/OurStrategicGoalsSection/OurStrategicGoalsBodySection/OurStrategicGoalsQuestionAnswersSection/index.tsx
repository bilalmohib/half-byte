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
                <AccordionItem key={item.id} value={item.id.toString()} className={cn("py-6!", "border-b border-b-[#EAEAEA] border-solid")}
                >
                    <AccordionTrigger className="no-underline! cursor-pointer py-0!">
                        <Heading5 className="leading-7.75!">
                            {item.id}. {item.question}
                        </Heading5>
                    </AccordionTrigger>
                    <AccordionContent>
                        <Paragraph className="text-navlink-text! leading-6.75! pt-3.75!">
                            {item.answer}
                        </Paragraph>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}
export default OurStrategicGoalsQuestionAnswersSection;