import { BiBookOpen } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { assets } from "../../Assets/Assets.js";
import PrimaryButton from "../Common/Buttons/PrimaryButton.jsx";
import SecondaryButton from "../Common/Buttons/SecondaryButton.jsx";
import GradientText from "../Utilities/GradientText.jsx";

const Hero = () => {
    return (
        <section className="px-[5%] pt-18">
            <div className="py-18 lg:py-12">
                <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
                    <div className="mb-12 text-center md-18 lg:mb-20 lg:items-start">
                        <div className="w-full max-w-lg text-left">
                            <h1 className="mb-5 font-bold text-7xl text-text font-heading md:mb-6 md:text-9xl lg:text-10xl">
                                Buying & Selling Textbooks Made{" "}
                                <GradientText
                                    colors={[
                                        "#680d28",
                                        "#da5e5e",
                                        "#5e0b22",
                                        "#780e2a",
                                        "#600c26",
                                    ]}
                                    animationSpeed={3}
                                    showBorder={false}
                                    className="custom-class"
                                >
                                    Easy
                                </GradientText>
                            </h1>
                            <p className="md:text-md font-body">
                                Thousands of parents, students, and educators
                                trust Booklidio to buy and sell textbooks. We
                                offer a wide range of textbooks and academic
                                resources at unbeatable prices.
                            </p>
                            <div className="flex items-center mt-6 gap-x-4 md:mt-8 ">
                                <PrimaryButton
                                    title={"Buy"}
                                    icon={<CgShoppingCart />}
                                    link={"/shop"}
                                ></PrimaryButton>
                                <SecondaryButton
                                    title={"Sell"}
                                    icon={<BiBookOpen />}
                                    link={"/shop"}
                                ></SecondaryButton>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-lg lg:max-w-md">
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
