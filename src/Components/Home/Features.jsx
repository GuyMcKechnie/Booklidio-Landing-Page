import React from "react";
import { FaMoneyCheck, FaHeadset, FaCheckCircle } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import ArrowDoodle from "../Common/Doodles/ArrowDoodle.jsx";
import ArrowDoodle2 from "../Common/Doodles/ArrowDoodle2.jsx";

const Features = () => {
  const featuresList = [
    {
      icon: <ImBooks />,
      heading: "Unmatched Inventory",
      description:
        "Access a vast collection of textbooks across various subjects and grades.",
    },
    {
      icon: <FaMoneyCheck />,
      heading: "Affordable Prices",
      description:
        "Save money with our competitive pricing on new and used textbooks.",
    },
    {
      icon: <FaHeadset />,
      heading: "Customer Support",
      description:
        "Our dedicated support team is here to help you with any questions or issues.",
    },
    {
      icon: <FaCheckCircle />,
      heading: "Quality Assurance",
      description:
        "We ensure the quality of our textbooks with thorough inspections.",
    },
  ];

  return (
    <section className="section-container">
      <div className="doodle top-[50%] left-[5%] size-22">
        <ArrowDoodle />
      </div>
      <div className="doodle top-[20%] right-[5%] size-22 -rotate-60">
        <ArrowDoodle2 />
      </div>
      <div className="container">
        <div className="text-container">
          <div>
            <h1>Made with Simplicity in Mind</h1>
            <p>
              Discover the features that make our platform unique and
              user-friendly.
            </p>
          </div>
          <hr className="bg-gray opacity-20" />
          <div className="flex flex-col gap-4">
            {featuresList.map((feature, index) => (
              <div key={index} className="w-full">
                <div className="flex items-center justify-start gap-4">
                  <span className="bg-primary rounded-tl-lg rounded-bl-lg border-r-4 border-[#49171c] px-2 py-8 text-3xl text-white md:py-4">
                    {feature.icon}
                  </span>
                  <div>
                    <h3>{feature.heading}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
