import React from "react";

const Features = () => {
    const featuresList = [
        {
            icon: "/path/to/icon1.png",
            heading: "Wide Selection",
            description: "Explore a vast range of books across various subjects and grades."
        },
        {
            icon: "/path/to/icon2.png",
            heading: "Affordable Prices",
            description: "Get the best deals on quality books to enhance your learning."
        },
        {
            icon: "/path/to/icon3.png",
            heading: "Easy Trading Process",
            description: "Trade your books easily with our user-friendly platform."
        }
    ];

    return (
        <section id="features" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <h3 className="mb-12 text-4xl font-bold">Our Features</h3>
                <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
                    {featuresList.map((feature, index) => (
                        <div key={index} className="feature-item">
                            <div className="mb-5">
                                <img
                                    src={feature.icon}
                                    className="size-12"
                                    alt={feature.heading}
                                />
                            </div>
                            <h4 className="mb-5 text-xl font-bold">{feature.heading}</h4>
                            <p className="text-base">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;