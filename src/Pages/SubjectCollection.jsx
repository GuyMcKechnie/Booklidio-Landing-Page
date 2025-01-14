import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../Assets/Assets";
import { BiDollar } from "react-icons/bi";
import Collection from "../Components/Products/Collection.jsx";

const GradeCollection = () => {
    const { products } = useContext(ShopContext);
    return (
        <section className="pt-18">
            {/* Header Section */}
            <div className="flex flex-col items-center px-8 py-6 md:flex-row justify-evenly md:1/2 shadow-small bg-primary">
                <div className="flex flex-col items-start gap-6 px-10 md:w-1/2">
                    <h1 className="font-semibold text-white font-heading text-8xl">
                        <span className="opacity-90">Save Up To</span>{" "}
                        <span className="font-bold text-9xl text-accent">
                            70%
                        </span>{" "}
                        <span className="opacity-90">on Study Guides</span>
                    </h1>
                    <button className="items-center justify-center hidden gap-2 px-4 py-2 text-lg text-white uppercase transition-all rounded-lg md:flex font-heading shadow-xxsmall shadow-accent bg-accent hover:-translate-y-1">
                        <BiDollar /> Save Now
                    </button>
                </div>
                <div className="flex items-center justify-center w-1/2 gap-4 p-4">
                    <img
                        src={assets.studyGuide1}
                        alt=""
                        className="-rotate-[20deg] scale-75 -mr-20 lg:w-1/3 md:w-1/2"
                    />
                    <img
                        src={assets.studyGuide4}
                        alt=""
                        className="z-10 md:w-1/2 lg:w-1/3"
                    />
                    <img
                        src={assets.studyGuide2}
                        alt=""
                        className="rotate-[20deg] scale-75 -ml-20 md:w-1/2 lg:w-1/3"
                    />
                </div>
            </div>
            <Collection products={products} />
        </section>
    );
};

export default GradeCollection;
