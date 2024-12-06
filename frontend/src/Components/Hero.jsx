import React from "react";
import {
    FaArrowCircleRight,
    FaDollarSign,
    FaShoppingCart,
} from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

const Hero = () => {
    return (
        <div
            id="hero-container"
            className="bg-#fdebe7 overflow-hidden pt-32 lg:pt-8 pb-16 px-8 min-h-screen"
        >
            <div className="flex flex-col lg:flex-row justify-between items-center">
                {/* Hero Text */}
                <div
                    id="text-elements-hero"
                    className="flex flex-col space-y-2 text-left md:pb-12"
                >
                    <h1 className="text-4xl lg:text-7xl text-zinc-800 font-extrabold">
                        Unlock Savings & Earn Cash with{" "}
                        <span className="text-red-900">Booklidio</span>
                    </h1>
                    <p className="text-xl text-zinc-500 font-normal">
                        Stop overspending on textbooks! With Booklidio, you can
                        grab unbeatable deals on quality used books and turn
                        your old textbooks into extra cash effortlessly. Join
                        thousands of savvy students who are saving and earning
                        today!
                    </p>
                    <div className="flex items-center justify-center lg:justify-start pt-8 gap-6">
                        <button
                            type="button"
                            className="flex justify-between items-center bg-red-900 rounded-lg text-white font-bold text-xl px-8 py-6 transition duration-300ms ease-in-out"
                        >
                            Browse
                            <span className="pl-2">
                                <FaShoppingCart color="#ffffff" size="1.5em" />
                            </span>
                        </button>
                    </div>
                </div>
                <div id="image-container">
                    <img src={require("../Assets/hero.png")} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
