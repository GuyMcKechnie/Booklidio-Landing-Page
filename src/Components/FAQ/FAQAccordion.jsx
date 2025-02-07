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
      className="grid w-full items-start justify-stretch gap-4 transition-all"
    >
      {faqs.map((question, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="group border-gray hover:border-accent rounded-lg border-2 px-5 transition-all md:px-6"
        >
          <AccordionTrigger
            icon={
              <RxPlus className="text-gray group-hover:text-accent size-7 shrink-0 transition-transform duration-300 md:size-8" />
            }
            className="md:text-md text-gray group-hover:text-accent md:py-5 [&[data-state=open]>svg]:rotate-45"
          >
            <h3 className="!text-left !opacity-100">{question.question}</h3>
          </AccordionTrigger>
          <AccordionContent className="text-gray font-body text-balance md:pb-6">
            {question.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default FAQAccordion;
