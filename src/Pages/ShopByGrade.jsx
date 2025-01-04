import React from "react";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
import GradeList from "../Components/ShopByGrade/GradeList.jsx";

const ShopByGrade = () => {
    return (
        <div>
            <Header />
            <main className="px-[5%] py-16">
                <h1 className="mb-8 text-3xl font-bold">Shop by Grade</h1>
                <GradeList />
            </main>
            <Footer />
        </div>
    );
};

export default ShopByGrade;
