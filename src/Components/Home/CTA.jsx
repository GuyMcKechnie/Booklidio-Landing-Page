import React from "react";
import { RxChevronRight } from "react-icons/rx";
import StarBorder from "../Common/Buttons/StarBorder.jsx";
import { Link } from "react-router-dom";
import AnimatedContent from "../Utilities/AnimatedContent.jsx";

const CTADefaults = {
    heading: "What are you waiting for?",
    description:
        "Don't miss out on the thousands of savings you could be making.",
};

const CTA = (props) => {
    const { heading, description, buttons } = {
        ...CTADefaults,
        ...props,
    };
    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-b from-primary to-[#560b22]">
            <div className="container relative max-w-lg text-center">
                <span className="absolute top-0 right-0 z-10 rounded-full w-100 h-100 bg-accent"></span>
                <h2 className="mb-5 text-5xl font-bold text-white rb-5 md:mb-6 md:text-7xl lg:text-8xl font-heading">
                    {heading}
                </h2>
                <p className="text-white md:text-md font-body">{description}</p>
                <div className="flex items-center justify-center gap-4 mt-6 md:mt-8">
                    <StarBorder className="transition-all custom-class hover:scale-110">
                        <Link
                            // to="/shop"
                            to="/contact"
                            className="flex items-center justify-center gap-2 text-white transition-all rounded-lg group w-fit"
                        >
                            <span className="text-lg uppercase">
                                Get Started
                            </span>
                            <span className="group-hover:translate-x-0.5 text-lg transition-all">
                                <RxChevronRight className="text-lg" />
                            </span>
                        </Link>
                    </StarBorder>
                </div>
            </div>
        </section>
    );
};

export default CTA;
