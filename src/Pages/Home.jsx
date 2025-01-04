import React from "react";
import Header from "../Components/Common/Header";
import Hero from "../Components/Home/Hero";
import Features from "../Components/Home/Features";
import Testimonials from "../Components/Home/Testimonials";
import Footer from "../Components/Common/Footer";

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Features />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;
