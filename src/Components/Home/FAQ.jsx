import React from "react";
import {
    Button,
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@relume_io/relume-ui";
import { RxPlus } from "react-icons/rx";
import { BiChevronRight } from "react-icons/bi";
import SecondaryButton from "../Common/Buttons/SecondaryButton";

const FAQ = (props) => {
    const { description, questions } = {
        ...Faq6Defaults,
        ...props,
    };

    const buttonVariables = {
        title: "Contact",
        icon: <BiChevronRight size={24} />,
        link: "/contact",
    };

    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-gray-100">
            <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
                <div>
                    <h2 className="mb-5 text-5xl font-bold text-text rb-5 md:mb-6 md:text-7xl lg:text-8xl font-heading">
                        Got a Question?
                    </h2>
                    <p className="text-text md:text-md font-body">
                        {description}
                    </p>
                    <div className="mt-6 md:mt-8">
                        <SecondaryButton
                            title={buttonVariables.title}
                            icon={buttonVariables.icon}
                            link={buttonVariables.link}
                        />
                    </div>
                </div>
                <Accordion
                    type="multiple"
                    className="grid items-start gap-4 transition-all justify-stretch"
                >
                    {questions.map((question, index) => (
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
            </div>
        </section>
    );
};

const Faq6Defaults = {
    description:
        "Use the following frequently asked questions to find answers to common queries. If you can't find what you're looking for, feel free to contact us.",
    button: {
        title: "Contact",
    },
    questions: [
        {
            question: "How do I know the condition of the textbooks?",
            answer: "Only high-quality textbooks are bought from sellers, and thus you can rest assured that your textbooks will be of high quality.",
        },
        {
            question: "What payment methods do you accept?",
            answer: "We offer multiple secure payment options, including Credit/Debit Cards (Visa, Mastercard), electronic bank transfer (EFT), instant EFT, SnapScan, and mobile payment platforms. All transactions are processed through bank-grade encrypted systems to protect your financial information.",
        },
        {
            question: "How long does delivery take?",
            answer: "Metro Areas: 2-3 business days, Major Cities: 3-5 business days, Rural Areas: 5-7 business days. We offer free shipping on orders over R500 and provide tracking details for every shipment. Students can track their packages in real-time through our online portal.",
        },
        {
            question: "Can I sell my used textbooks?",
            answer: "Our textbook selling process is straightforward. To get started, simply upload your details to our seller database, including your personal information and the textbooks you have for sale. Once a buyer is interested in purchasing your textbooks, we will contact you to verify the textbooks, and you will receive payment within 48 hours of verification.",
        },
        {
            question:
                "What if I receive a book different from the description?",
            answer: "Customer satisfaction is our top priority. If the book doesn't match its listed condition, please contact us within 48 hours of receiving the book, provide photographic evidence, and receive a full refund or book replacement. We have no complex return procedures and offer a 100% satisfaction guarantee.",
        },
        {
            question: "Do you cover textbooks for all academic disciplines?",
            answer: "Yes! Our inventory spans: Engineering, Medical Sciences, Humanities, Business Studies, Law, Computer Science, Natural Sciences, and Social Sciences. If we don't have a specific book, we'll help you source it or notify you when it becomes available.",
        },
    ],
};

export default FAQ;
