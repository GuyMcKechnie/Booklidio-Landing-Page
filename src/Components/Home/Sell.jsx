import React from "react";
import { RxChevronRight } from "react-icons/rx";
import PrimaryButton from "../Common/Buttons/PrimaryButton.jsx";
import SecondaryButton from "../Common/Buttons/SecondaryButton.jsx";
import { CgShoppingCart } from "react-icons/cg";
import { assets } from "../../Assets/Assets.js";
import { RiBankCardLine } from "react-icons/ri";
import AnimatedContent from "../Utilities/AnimatedContent.jsx";

const SellFeature = () => {
  return (
    <section className="section-container bg-gray-100">
      <div className="container">
        <div className="text-container">
          <h2>SELLING MADE EASY</h2>
          <h1>Make Money Selling Textbooks with Booklidio</h1>
          <p>
            Sell your used textbooks hassle-free on our marketplace. Reach a
            wide audience, get competitive offers, and earn money for books you
            no longer need. Start selling today and declutter your shelves while
            making a profit!
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <PrimaryButton
              title={"Sell"}
              icon={<RiBankCardLine />}
              // link={"/shop"}
              link={"/contact"}
            ></PrimaryButton>
            <SecondaryButton
              title={"Find Out More"}
              icon={<RxChevronRight />}
              link={"/faq"}
            ></SecondaryButton>
          </div>
        </div>
        <img src={assets.sell} className="md:max-w-sm" />
      </div>
    </section>
  );
};

export default SellFeature;
