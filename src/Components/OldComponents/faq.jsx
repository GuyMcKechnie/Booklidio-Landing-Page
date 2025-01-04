import {
    Button,
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@relume_io/relume-ui";
import { RxPlus } from "react-icons/rx";

const FaQ = (props) => {
    const { heading, description, button, questions } = {
        ...FaQDefaults,
        ...props,
    };
    return (
        <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
                <div>
                    <h2 className="mb-5 text-5xl font-bold rb-5 md:mb-6 md:text-7xl lg:text-8xl">
                        {heading}
                    </h2>
                    <p className="md:text-md">{description}</p>
                    <div className="mt-6 md:mt-8">
                        <Button {...button}>{button.title}</Button>
                    </div>
                </div>
                <Accordion
                    type="multiple"
                    className="grid items-start gap-4 justify-stretch"
                >
                    {questions.map((question, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="px-5 border border-border-primary md:px-6"
                        >
                            <AccordionTrigger
                                icon={
                                    <RxPlus className="transition-transform duration-300 size-7 shrink-0 text-text-primary md:size-8" />
                                }
                                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                            >
                                {question.title}
                            </AccordionTrigger>
                            <AccordionContent className="md:pb-6">
                                {question.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export const FaQDefaults = {
    heading: "FAQs",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    button: {
        title: "Contact",
        variant: "secondary",
    },
    questions: [
        {
            title: "Question text goes here",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
        },
        {
            title: "Question text goes here",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
        },
        {
            title: "Question text goes here",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
        },
        {
            title: "Question text goes here",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
        },
        {
            title: "Question text goes here",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
        },
    ],
};

export default FaQ;