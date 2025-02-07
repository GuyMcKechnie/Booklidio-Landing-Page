import React from "react";
import { RxChevronRight } from "react-icons/rx";
import PrimaryButton from "../Common/Buttons/PrimaryButton.jsx";
import SecondaryButton from "../Common/Buttons/SecondaryButton.jsx";
import { CgShoppingCart } from "react-icons/cg";
import { assets } from "../../Assets/Assets.js";

const BuyFeature = () => {
  return (
    <section className="section-container bg-gray-100">
      <div className="container">
        <img src={assets.buy} className="home-image scale-x-[-1]" />
        <div className="text-container">
          <h2>BUYING BUT BETTER</h2>
          <h1>Booklidio Makes Buying Textbooks a Breeze</h1>
          <p>
            Buy textbooks effortlessly with our easy-to-use marketplace. Browse
            a wide range of quality, affordable textbooks for your courses. Save
            time and money by finding the best deals, all in one place. Start
            shopping today!
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <PrimaryButton
              title={"Shop"}
              icon={<CgShoppingCart />}
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
      </div>
    </section>
  );
};

export default BuyFeature;
