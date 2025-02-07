import React from "react";
import FAQAccordion from "../FAQ/FAQAccordion";
import SecondaryButton from "../Common/Buttons/SecondaryButton";
import { RxChevronRight } from "react-icons/rx";

const FAQ = () => {
  return (
    <section className="section-container bg-gray-100">
      <div className="container md:!flex-col">
        <div className="text-container !text-center">
          <h1>Got a Question?</h1>
          <p>
            Use the following frequently asked questions to find answers to
            common queries. If you can't find what you're looking for, feel free
            to contact us.
          </p>
        </div>
        <div className="my-4 w-full">
          <FAQAccordion />
        </div>
        <div className="text-container">
          <p>
            Couldn't find what you were looking for? Reach out and we'll be in
            contact soon!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
