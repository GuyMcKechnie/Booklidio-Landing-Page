import React from "react";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function LandingPage() {
    return (
        <div className="landing-page">
            <Navbar />
            <Hero />
            <Footer />
        </div>
    );
}

export default LandingPage;
