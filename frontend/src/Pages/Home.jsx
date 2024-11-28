import React from "react";
import ShopByGrade from "../Components/ShopByGrade";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Home() {
    return (
        <div className="home-page">
            <Navbar />
            <ShopByGrade />
            <Footer />
        </div>
    );
}

export default Home;
