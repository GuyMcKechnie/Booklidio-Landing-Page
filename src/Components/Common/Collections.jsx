import { CgShoppingCart } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { assets } from "../../Assets/Assets";
import { PiPiggyBank, PiPiggyBankBold } from "react-icons/pi";
import { BiDollar } from "react-icons/bi";

function Collections() {
    return (
        <section className="py-18 md:py-20 lg:py-28">
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
        </section>
    );
}

export default Collections;
