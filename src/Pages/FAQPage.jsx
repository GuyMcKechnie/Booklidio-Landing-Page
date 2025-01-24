import { assets } from "../Assets/Assets.js";
import FAQAccordion from "../Components/FAQ/FAQAccordion.jsx";
import Rating from "../Components/FAQ/Rating.jsx";

function FAQPage() {
    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
            {/* Text */}
            <h1 className="font-bold text-center text-7xl">Got Questions?</h1>
            <h2 className="mb-6 text-xl text-center">We have the answers</h2>
            <p className="max-w-lg mx-auto mb-16 text-center">
                Below you'll find answers to the most common questions you may
                have on Booklidio. Feel free to contact our support team on our{" "}
                <a href="/contact-us" className="font-semibold underline">
                    Contact Page
                </a>{" "}
                if you can't find what you're looking for.
            </p>
            {/* Accordion and Image */}
            <div className="grid grid-cols-2 gap-x-6">
                <div>
                    <FAQAccordion />
                </div>
                <div>
                    <img
                        src={assets.faq}
                        className="trim"
                        alt="faq hero image"
                    />
                </div>
            </div>
            {/* Rating */}
            <div className="pt-8 mx-auto w-fit">
                <Rating />
            </div>
        </section>
    );
}

export default FAQPage;
