import React from "react";
import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

const CTADefaults = {
    heading: "What are you waiting for?",
    description:
        "Don't miss out on the thousands of savings you could be making. Get started today!",
};

const CTA = (props) => {
    const { heading, description, buttons } = {
        ...CTADefaults,
        ...props,
    };
    return (
        <section
            id="relume"
            className="px-[5%] py-16 md:py-24 lg:py-28 bg-primary"
        >
            <div className="container max-w-lg text-center">
                <h2 className="mb-5 text-5xl font-bold text-white rb-5 md:mb-6 md:text-7xl lg:text-8xl font-heading">
                    {heading}
                </h2>
                <p className="text-white md:text-md font-body">{description}</p>
                <div className="flex items-center justify-center gap-4 mt-6 md:mt-8">
                    <Button className="group text-xl border-none rounded-lg shadow-large shadow-white bg-[#560b22] font-heading hidden p-3 text-lg text-white transition-all duration-300 lg:flex group hover:bg-accent hover:-translate-y-1 hover:shadow-xlarge">
                        Get Started
                        <RxChevronRight className="" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
