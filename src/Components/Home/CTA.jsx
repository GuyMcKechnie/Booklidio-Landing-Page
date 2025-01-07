import React from "react";
import { Button } from "@relume_io/relume-ui";

const Cta25Defaults = {
    heading: "What are you waiting for?",
    description:
        "Don't miss out on the thousands of savings you could be making. Get started today!",
    buttons: [
        { title: "Buy Now" },
        { title: "Sell Now", variant: "secondary" },
    ],
};

const Cta25 = (props) => {
    const { heading, description, buttons } = {
        ...Cta25Defaults,
        ...props,
    };
    return (
        <section
            id="relume"
            className="px-[5%] py-16 md:py-24 lg:py-28 bg-accent"
        >
            <div className="container max-w-lg text-center">
                <h2 className="mb-5 text-5xl font-bold text-white rb-5 md:mb-6 md:text-7xl lg:text-8xl font-heading">
                    {heading}
                </h2>
                <p className="text-white md:text-md font-body">{description}</p>
                <div className="flex items-center justify-center gap-4 mt-6 md:mt-8">
                    {buttons.map((button, index) => (
                        <Button
                            key={index}
                            {...button}
                            className="text-xl text-white border-none rounded-lg shadow-small shadow-white bg-secondary font-heading"
                        >
                            {button.title}
                        </Button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cta25;
