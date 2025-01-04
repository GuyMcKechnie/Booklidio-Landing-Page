import React from "react";

const Hero = () => {
    return (
        <div className="py-20 text-center text-white bg-blue-500 hero">
            <h1 className="mb-4 text-5xl font-bold">Welcome to Booklidio</h1>
            <p className="mb-8 text-xl">
                Your one-stop shop for all educational resources.
            </p>
            <a
                href="/shop-by-grade"
                className="px-6 py-3 font-semibold text-blue-500 bg-white rounded-full"
            >
                Shop Now
            </a>
        </div>
    );
};

export default Hero;
