import * as React from "react";
import Navbar from "../Components/navbar.jsx";
import Hero from "../Components/hero.jsx";
import ShopByGrade from "../Components/shop-by-grade.jsx";
import ShopBySubject from "../Components/shop-by-subject.jsx";
import Footer from "../Components/footer.jsx";

function Home() {
    return (
        <div id="home-page">
            <Navbar />
            <Hero />
            <ShopByGrade />
            <ShopBySubject />
            <Footer />
        </div>
    );
}

export default Home;
