import React from "react";
import { FaMoneyCheck } from "react-icons/fa";
import { GiBuyCard } from "react-icons/gi";
import { ImBooks } from "react-icons/im";
import AnimatedContent from "../Utilities/AnimatedContent";

const Features = () => {
    const featuresList = [
        {
            icon: <ImBooks />,
            heading: "Wide Range of Textbooks",
            description:
                "Access a vast collection of textbooks across various subjects and grades.",
        },
        {
            icon: <FaMoneyCheck />,
            heading: "Affordable Prices",
            description:
                "Save money with our competitive pricing on new and used textbooks.",
        },
        {
            icon: <GiBuyCard />,
            heading: "Easy Buy & Sell",
            description:
                "Effortlessly buy and sell textbooks with our user-friendly platform.",
        },
    ];

    return (
        <section
            id="features"
            className="px-[5%] py-16 md:py-24 lg:py-28 bg-gray-100 h-screen flex items-center justify-center"
        >
            <div className="container">
                <h3 className="mb-12 text-3xl font-bold text-text font-heading">
                    <span className="opacity-90">Discover the </span>
                    <span className=" text-primary">Booklidio</span>{" "}
                    <span className="opacity-90">Difference</span>
                </h3>
                <div className="grid grid-cols-1 mb-12 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
                    {featuresList.map((feature, index) => (
                        <div key={index} className="text-text feature-item">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 text-6xl text-white rounded-full bg-primary">
                                    {feature.icon}
                                </div>
                                <h4 className="text-xl font-bold font-heading">
                                    {feature.heading}
                                </h4>
                            </div>
                            <p className="text-base font-body">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
