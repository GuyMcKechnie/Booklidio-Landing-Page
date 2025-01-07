import React from "react";
import { MdSavings } from "react-icons/md";
import { FaTruckFast } from "react-icons/fa6";
import { IoShieldCheckmark } from "react-icons/io5";

const Features = () => {
    const featuresList = [
        {
            icon: <MdSavings />,
            heading: "Huge Savings",
            description:
                "Save up to 70% on essential textbooks and academic resources every year.",
        },
        {
            icon: <IoShieldCheckmark />,
            heading: "Unmatched Security",
            description:
                "Guaranteed quality assured textbooks with a satisfaction guarantee.",
        },
        {
            icon: <FaTruckFast />,
            heading: "Delivery Nationwide",
            description:
                "Fast and secure nation-wide delivery so you get your resources on time every time",
        },
    ];

    return (
        <section
            id="features"
            className="px-[5%] py-16 md:py-24 lg:py-28 bg-accent"
        >
            <div className="container">
                <h3 className="mb-12 text-3xl font-bold text-white font-heading">
                    <span className="opacity-80">Discover the </span>
                    <span className=" text-text">Booklidio</span>{" "}
                    <span className="opacity-80">Difference</span>
                </h3>
                <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
                    {featuresList.map((feature, index) => (
                        <div key={index} className="text-white feature-item">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="text-6xl">{feature.icon}</div>
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
