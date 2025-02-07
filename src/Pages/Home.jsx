import React from "react";
import Hero from "../Components/Home/Hero";
import Features from "../Components/Home/Features";
import Testimonials from "../Components/Home/Testimonials";
import Buy from "../Components/Home/Buy";
import Sell from "../Components/Home/Sell";
import FAQ from "../Components/Home/FAQ";
import CTA from "../Components/Home/CTA";
import AnimatedContent from "../Components/Utilities/AnimatedContent";

const Home = () => {
    const PageList = [
        <Hero />,
        <Buy />,
        <Features />,
        <Sell />,
        <Testimonials />,
        <FAQ className="bg-gray-100" />,
    ];

    return (
        <div>
            {PageList.map((page, index) => (
                <AnimatedContent key={index}>{page}</AnimatedContent>
            ))}
            <CTA />,
        </div>
    );
};

export default Home;
