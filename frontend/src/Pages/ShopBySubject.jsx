import React from "react";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
import SubjectList from "../Components/ShopBySubject/SubjectList";

const ShopBySubject = () => {
    return (
        <div>
            <Header />
            <main className="px-[5%] py-16">
                <h1 className="mb-8 text-4xl font-bold">Shop by Subject</h1>
                <SubjectList />
            </main>
            <Footer />
        </div>
    );
};

export default ShopBySubject;
