import { assets } from "../Assets/Assets.js";
import FAQAccordion from "../Components/FAQ/FAQAccordion.jsx";
import Rating from "../Components/FAQ/Rating.jsx";

function FAQPage() {
  return (
    <section className="section-container">
      <div className="container pt-18 md:!flex-col">
        <div className="text-container">
          <h1>Got Questions?</h1>
          <p className="pb-6">
            Below you'll find answers to the most common questions you may have
            on Booklidio. Feel free to contact our support team on our{" "}
            <a href="/contact" className="font-semibold underline">
              Contact Page
            </a>{" "}
            if you can't find what you're looking for.
          </p>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-2">
          <FAQAccordion />
          <img
            src={assets.faq}
            className="md:hidden lg:block"
            alt="faq hero image"
          />
        </div>
      </div>
    </section>
  );
}

export default FAQPage;
