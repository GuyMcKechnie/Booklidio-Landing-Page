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
          className="group border-gray hover:border-accent cursor-pointer rounded-lg border-2 px-5 transition-all md:px-6"
        >
          <AccordionTrigger
            icon={
              <RxPlus className="text-gray group-hover:text-accent size-7 shrink-0 transition-transform duration-300 md:size-8" />
            }
            className="md:text-md cursor-pointer transition-transform duration-300 md:py-5 [&[data-state=open]>svg]:rotate-45"
          >
            <h3 className="group-hover:!text-accent !text-left !opacity-100 transition-transform duration-300">
              {question.question}
            </h3>
          </AccordionTrigger>
          <AccordionContent className="group-hover:!text-accent !text-left transition-transform duration-300 md:pb-6">
            <p>{question.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default FAQAccordion;
