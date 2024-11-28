import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const Hero = () => {
    return (
        <div
            id="hero-container"
            className="bg-#fdebe7 rounded-xl shadow-md overflow-hidden py-16 px-8 min-h-screen
"
        >
            <div className="flex flex-col justify-between">
                <div
                    id="text-elements-hero"
                    className="flex flex-col space-y-2 text-center pb-12"
                >
                    <h3 className="text-1xl text-gray-600 font-semibold">
                        Welcome to Booklidio!
                    </h3>
                    <h1 className="text-4xl text-gray-700 font-extrabold">
                        Buy & Sell Used Textbooks Through Booklidio
                    </h1>
                    <p className="text-xl text-gray-500 font-normal">
                        Looking for ways to save on textbooks? You're in the
                        right place. Our online marketplace is the perfect spot
                        to find amazing deals on used books. Plus, you can make
                        some extra cash by selling your used textbooks.
                    </p>
                    <div className="rounded-md shadow flex items-center justify-center">
                        <button
                            type="button"
                            className="max-w-48 flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-red-900 hover:bg-red-800 md:py-4 md:text-lg md:px-10"
                        >
                            Buy Now
                            <span className="pl-2">
                                <FaCartShopping color="#ffffff" size="1.5em" />
                            </span>
                        </button>
                    </div>
                </div>
                <div id="image-container">
                    <img
                        className="rounded-md"
                        src={require("../Assets/hero.jpg")}
                        alt="Platinum NST Grade 6 textbook cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
