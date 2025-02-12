import React from "react";
import { RxChevronRight } from "react-icons/rx";
import PrimaryButton from "../Components/Common/Buttons/PrimaryButton.jsx";
import SecondaryButton from "../Components/Common/Buttons/SecondaryButton";
import { CgShoppingCart } from "react-icons/cg";
import { assets } from "../Assets/Assets.js";
import { BsWhatsapp } from "react-icons/bs";

function Contact() {
  return (
    <section className="section-container">
      {/* <ContactForm /> */}
      <div className="container pt-18">
        <div className="text-container">
          <h2>CATCH US ON WHATSAPP</h2>
          <h1>Trading Has Never Been Simpler</h1>
          <p>
            Buy textbooks with ease using WhatsApp and discover a vast selection
            of quality, affordable textbooks for your courses. Simplify your
            shopping experience and find the best deals in one convenient place.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <PrimaryButton
              title={"Trade Now"}
              icon={<BsWhatsapp />}
              // link={"/shop"}
              link={"https://wa.me/27764778343"}
            ></PrimaryButton>
          </div>
        </div>
        <img src={assets.buy} className="md:max-w-sm" />
      </div>
    </section>
  );
}

export default Contact;
