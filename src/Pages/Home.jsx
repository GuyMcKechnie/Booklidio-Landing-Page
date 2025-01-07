import React from "react";
import Header from "../Components/Common/Header";
import Hero from "../Components/Home/Hero";
import Features from "../Components/Home/Features";
import Testimonials from "../Components/Home/Testimonials";
import Footer from "../Components/Common/Footer";
import Buy from "../Components/Home/Buy";
import Sell from "../Components/Home/Sell";
import FAQ from "../Components/Home/FAQ";

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Features />
            <Buy />
            <Sell />
            <Testimonials />
            <FAQ />
            <Footer />
        </div>
    );
};

export default Home;
