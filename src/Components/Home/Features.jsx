import React from "react";
import {
    FaMoneyCheck,
    FaShippingFast,
    FaLock,
    FaHeadset,
    FaCheckCircle,
    FaStar,
    FaUndo,
    FaMobileAlt,
    FaTags,
    FaChevronRight,
} from "react-icons/fa";
import { GiBuyCard } from "react-icons/gi";
import { ImBooks } from "react-icons/im";
import { assets } from "../../Assets/Assets";

const Features = () => {
    const featuresList = [
        {
            icon: <ImBooks />,
            heading: "Unmatched Inventory",
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
            icon: <FaHeadset />,
            heading: "Customer Support",
            description:
                "Our dedicated support team is here to help you with any questions or issues.",
        },
        {
            icon: <FaCheckCircle />,
            heading: "Quality Assurance",
            description:
                "We ensure the quality of our textbooks with thorough inspections.",
        },
    ];

    return (
        <section id="features" className="p-[5%] bg-gray-100">
            <div className="h-screen w-full flex items-center gap-12 justify-between">
                <div>
                    <img src={assets.features} alt="" className="max-w-lg" />
                </div>
                <div>
                    <div>
                        <h1 className="text-5xl font-bold mb-3">
                            Made with Simplicity in Mind
                        </h1>
                        <p className="mb-6">
                            Discover the features that make our platform unique
                            and user-friendly.
                        </p>
                    </div>
                    <hr className="opacity-20 bg-gray" />
                    <div className="mt-6 flex flex-col gap-4 mb-6">
                        {featuresList.map((feature, index) => (
                            <div key={index} className="w-full">
                                <div className="flex items-center h-full justify-start gap-4 ">
                                    <span className="bg-primary py-6 border-r-4 border-accent rounded-bl-lg rounded-tl-lg p-3 h-full text-white text-3xl">
                                        {feature.icon}
                                    </span>
                                    <div>
                                        <h3 className="text-2xl">
                                            {feature.heading}
                                        </h3>
                                        <p className="text-sm max-w-md">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs">
                        Experience the best in textbook shopping with our
                        comprehensive features.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Features;
