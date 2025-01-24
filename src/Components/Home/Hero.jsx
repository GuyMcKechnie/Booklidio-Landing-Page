import { BiBookOpen } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { assets } from "../../Assets/Assets.js";

const Hero = () => {
    return (
        <section className="px-[5%] pt-18">
            <div className="py-18 lg:py-12">
                <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
                    <div className="mb-12 text-center md-18 lg:mb-20 lg:items-start">
                        <div className="w-full max-w-lg text-left">
                            <h1 className="mb-5 font-bold text-7xl text-text font-heading md:mb-6 md:text-9xl lg:text-10xl">
                                Buying & Selling Textbooks Made{" "}
                                <span className="text-primary">Easy</span>
                            </h1>
                            <p className="md:text-md font-body">
                                Thousands of parents, students, and educators
                                trust Booklidio to buy and sell textbooks. We
                                offer a wide range of textbooks and academic
                                resources at unbeatable prices.
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
                    <div className="w-full max-w-lg lg:max-w-xl">
                        <img
                            src={assets.hero}
                            className="object-cover size-full"
                            alt="hero image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
