import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import ShopByGrade from "../Components/ShopByGrade";
import ShopBySubject from "../Components/ShopBySubject";
import Footer from "../Components/Footer";

function Home() {
    return (
        <div className="home-page">
            <Navbar />
            <Hero />
            <ShopByGrade />
            <ShopBySubject />
            <Footer />
        </div>
    );
}

export default Home;
