import { Button } from "@relume_io/relume-ui";
import { BiBook, BiBookOpen } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import HeroImage from "../../Assets/hero.png";

const Hero = () => {
    return (
        <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 ">
            <div className="container ">
                <div className="flex flex-col items-center lg:flex-row lg:justify-between ">
                    <div className="mb-12 text-center rb-12 md:mb-18 lg:mb-20 lg:items-start">
                        <div className="w-full max-w-lg text-left">
                            <h1 className="mb-5 text-6xl font-bold font-heading md:mb-6 md:text-9xl lg:text-10xl">
                                South Africa's Most{" "}
                                <span className="text-primary">Reliable</span>{" "}
                                Textbook Trader
                            </h1>
                            <p className="md:text-md font-body">
                                Looking to save money on textbooks? Our online
                                marketplace for used textbooks is the solution!
                                Not only can you find great deals on books, but
                                you can also make extra cash by selling your
                                gently used textbooks.
                            </p>
                            <div className="flex items-center mt-6 gap-x-4 md:mt-8 font-heading ">
                                <button className="flex items-center justify-center gap-2 px-4 py-2 text-lg text-white uppercase rounded-lg shadow-xxsmall shadow-primary bg-primary">
                                    <CgShoppingCart /> Buy
                                </button>
                                <button className="flex items-center justify-center gap-2 px-4 py-2 text-lg uppercase bg-gray-100 rounded-lg shadow-xxsmall shadow-gray-100">
                                    <BiBookOpen /> Sell
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img
                            src={HeroImage}
                            className="object-cover size-full lg:max-w-xl"
                            alt="hero image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
