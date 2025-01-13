import React from "react";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
import { useContext } from "react";
import Collection from "../Components/Common/Collection";
import ShopContext from "../Context/ShopContext";

const GradeCollection = () => {
    const { products } = useContext(ShopContext);
    return (
        <div>
            <Header />
            <main className="px-[5%] py-16">
                <h1 className="mb-8 text-3xl font-bold">Shop by Grade</h1>
                <Collection products={products} />
            </main>
            <Footer />
        </div>
    );
};

export default GradeCollection;
