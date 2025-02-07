import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [error, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();

        fetch("https://formcarry.com/s/xI4S2GYJImD", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, message, acceptTerms }),
        })
            .then((response) => response.json())
            .then((response) => {
                if (response.code === 200) {
                    setSuccess(true);
                } else if (response.code === 422) {
                    // Field validation failed
                    setError(response.message);
                } else {
                    // other error from formcarry
                    setError(response.message);
                }
            })
            .catch((error) => {
                // request related error.
                setError(error.message ? error.message : error);
            });
    }

    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28 flex flex-col items-center">
            <div className="container max-w-lg">
                <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto mb-8 md:mb-10 lg:mb-12 text-text">
                    <h2 className="mb-5 text-5xl font-bold md:mb-6 font-heading">
                        Contact Us
                    </h2>
                    <p className="text-center md:text-md font-body">
                        At Booklidio, customer satisfaction is our main
                        priority. If you aren't happy, neither are we.
                    </p>
                </div>
                <form onSubmit={handleSubmit} class="space-y-8">
                    <div>
                        <label
                            for="name"
                            class="block mb-2 text-lg font-heading text-gray"
                        >
                            Name
                        </label>
                        <input
                            class="bg-white border-gray-200 border-2 w-full text-gray font-body p-2"
                            placeholder="John Doe"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="email"
                            class="block mb-2 text-lg font-heading text-gray"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            class="bg-white border-gray-200 w-full text-gray font-body border-2 "
                            placeholder="john@gmail.com"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div class="sm:col-span-2">
                        <label
                            for="message"
                            class="block mb-2 text-lg font-heading text-gray"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="6"
                            class="bg-white border-gray-200 w-full text-gray font-body border-2 "
                            placeholder="Type your message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="flex items-center mb-3 space-x-2 text-sm md:mb-4">
                        <input
                            type="checkbox"
                            id="terms"
                            checked={acceptTerms}
                            defaultChecked="true"
                            onChange={(e) => setAcceptTerms(e.target.checked)}
                        />
                        <p className="font-body">
                            I accept the{" "}
                            <Link
                                to={"/terms-and-conditions"}
                                className="font-semibold underline"
                            >
                                Terms & Conditions
                            </Link>
                        </p>
                    </div>
                    <button
                        type="submit"
                        class="border-gray border-2 p-2 mt-6 mx-auto w-full cursor-pointer hover:scale-105 transition-transform"
                    >
                        Send message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
