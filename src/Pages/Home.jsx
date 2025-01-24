import React from "react";
import Hero from "../Components/Home/Hero";
import Features from "../Components/Home/Features";
import Testimonials from "../Components/Home/Testimonials";
import Buy from "../Components/Home/Buy";
import Sell from "../Components/Home/Sell";
import FAQ from "../Components/Home/FAQ";
import CTA from "../Components/Home/CTA";

const Home = () => {
    return (
        <div>
            <Hero />
            <Features />
            <Buy />
            <Sell />
            <Testimonials />
            <FAQ className="bg-gray-100" />
            <CTA />
        </div>
    );
};

export default Home;
