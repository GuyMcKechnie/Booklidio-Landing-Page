import { BiBookOpen } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { assets } from "../../Assets/Assets.js";
import PrimaryButton from "../Common/Buttons/PrimaryButton.jsx";
import SecondaryButton from "../Common/Buttons/SecondaryButton.jsx";

const Hero = () => {
  return (
    <section className="section-container">
      <div className="container">
        <div className="text-container">
          <h1>Buying & Selling Textbooks Made Easy</h1>
          <p className="md:text-md">
            Thousands of parents, students, and educators trust Booklidio to buy
            and sell textbooks. We offer a wide range of textbooks and academic
            resources at unbeatable prices.
          </p>
          <div className="flex gap-x-4">
            <PrimaryButton
              title={"Buy"}
              icon={<CgShoppingCart />}
              // link={"/shop"}
              link={"/contact"}
            ></PrimaryButton>
            <SecondaryButton
              title={"Sell"}
              icon={<BiBookOpen />}
              // link={"/shop"}
              link={"/contact"}
            ></SecondaryButton>
          </div>
        </div>
        <img src={assets.hero} className="home-image" />
      </div>
    </section>
  );
};

export default Hero;
