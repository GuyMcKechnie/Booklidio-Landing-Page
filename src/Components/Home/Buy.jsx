import React from "react";
import { RxChevronRight } from "react-icons/rx";
import PrimaryButton from "../Common/Buttons/PrimaryButton.jsx";
import SecondaryButton from "../Common/Buttons/SecondaryButton.jsx";
import { CgShoppingCart } from "react-icons/cg";
import { assets } from "../../Assets/Assets.js";

const BuyFeature = (props) => {
    const { tagline, heading, description, image } = {
        ...LayoutDefaults,
        ...props,
    };

    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                    <div>
                        <p className="mb-3 font-semibold uppercase md:mb-4 font-heading opacity-70">
                            {tagline}
                        </p>
                        <h1 className="mb-5 text-2xl font-bold rb-5 md:mb-6 md:text-7xl lg:text-8xl font-heading">
                            {heading}
                        </h1>
                        <p className="md:text-md font-body text-text">
                            {description}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 mt-6 md:mt-8">
                            <PrimaryButton
                                title={"Buy"}
                                icon={<CgShoppingCart />}
                                link={"/shop"}
                            ></PrimaryButton>
                            <SecondaryButton
                                title={"Find Out More"}
                                icon={<RxChevronRight />}
                                link={"/faq"}
                            ></SecondaryButton>
                        </div>
                    </div>
                    <div>
                        <img
                            src={assets.buy}
                            className="object-cover size-full md:max-w-md lg:max-w-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const LayoutDefaults = {
    tagline: "Buying but Better",
    heading: "Booklidio Makes Buying Textbooks a Breeze",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image",
    },
};

export default BuyFeature;
