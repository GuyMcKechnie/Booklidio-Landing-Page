import React from "react";
import { RxChevronRight } from "react-icons/rx";
import StarBorder from "../Common/Buttons/StarBorder.jsx";
import { Link } from "react-router-dom";
import AnimatedContent from "../Utilities/AnimatedContent.jsx";

const CTADefaults = {
    heading: "Why Wait?",
    description:
        "Don't miss out on the thousands of savings you could be making!",
};

const CTA = (props) => {
    const { heading, description, buttons } = {
        ...CTADefaults,
        ...props,
    };
    return (
        <section className="px-[5%] py-16 md:py-24 overflow-hidden lg:py-28 cta-section flex items-center justify-center">
            <div className="container relative text-center">
                <h2 className="mb-5 text-2xl font-bold !text-white rb-5 md:mb-6 md:text-5xl font-heading">
                    {heading}
                </h2>
                <p className="!text-white md:text-md font-body">
                    {description}
                </p>
                <div className="flex items-center justify-center gap-4 mt-6 md:mt-8">
                    <StarBorder className="transition-all cursor-pointer custom-class hover:scale-110">
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
