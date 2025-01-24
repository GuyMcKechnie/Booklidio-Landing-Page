import { faqs } from "../../Data/FAQs";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@relume_io/relume-ui";
import { RxPlus } from "react-icons/rx";

function FAQAccordion() {
    return (
        <Accordion
            type="multiple"
            className="grid items-start gap-4 transition-all justify-stretch"
        >
            {faqs.map((question, index) => (
                <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="px-5 transition-all border-2 rounded-lg group border-text md:px-6 hover:border-accent"
                >
                    <AccordionTrigger
                        icon={
                            <RxPlus className="transition-transform duration-300 text-text group-hover:text-accent size-7 shrink-0 md:size-8" />
                        }
                        className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45 text-text group-hover:text-accent font-heading text-lg font-semibold text-left"
                    >
                        {question.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-text md:pb-6 font-body">
                        {question.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}

export default FAQAccordion;
