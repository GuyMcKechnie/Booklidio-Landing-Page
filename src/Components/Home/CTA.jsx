import React from "react";
import { RxChevronRight } from "react-icons/rx";
import StarBorder from "../Common/Buttons/StarBorder.jsx";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta-section animated-gradient h-[50vh] w-full">
      <div className="text-container">
        <h1 className="!text-white">Why Wait?</h1>
        <p className="!text-white">
          Stop missing out on the thousands of savings you could be making.
        </p>
      </div>
      <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
        <StarBorder className="custom-class cursor-pointer transition-all hover:scale-110">
          <Link
            // to="/shop"
            to="/contact"
            className="group flex w-fit items-center justify-center gap-2 rounded-lg text-white transition-all"
          >
            <span className="text-lg uppercase">Get Started</span>
            <span className="text-lg transition-all group-hover:translate-x-0.5">
              <RxChevronRight className="text-lg" />
            </span>
          </Link>
        </StarBorder>
      </div>
    </section>
  );
};

export default CTA;
