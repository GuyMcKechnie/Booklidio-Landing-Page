import React, { useState } from "react";
import { Button, Checkbox, Input, Label, Textarea } from "@relume_io/relume-ui";
import { Link } from "react-router-dom";
import PrimaryButton from "../Common/Buttons/PrimaryButton";
import { BiSend } from "react-icons/bi";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [setError] = useState("");
    const [isSuccess, setSuccess] = useState("");
    const [acceptTerms, setAcceptTerms] = useState(true);

    function onSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        fetch("https://formcarry.com/s/396iliW8np0", {
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
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container max-w-lg">
                <div className="flex flex-col items-center w-full max-w-lg mx-auto mb-8 md:mb-10 lg:mb-12 text-text">
                    <h2 className="mb-5 text-5xl font-bold rb-5 md:mb-6 md:text-7xl lg:text-8xl font-heading">
                        Contact Us
                    </h2>
                    <p className="w-1/2 text-center md:text-md font-body">
                        At Booklidio, customer satisfaction is our main
                        priority. If you aren't happy, neither are we.
                    </p>
                </div>
                <form
                    onSubmit={(e) => onSubmit(e)}
                    className="relative z-10 flex flex-col items-center justify-between w-full gap-4 p-4 bg-gray-100 font-body"
                >
                    {isSuccess && (
                        <div className="w-full p-2 text-sm text-white bg-green-500">
                            Message received! I&apos;ll be in contact soon.
                        </div>
                    )}
                    <div className="w-full formcarry-block">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            id="name"
                            placeholder="Name"
                            required
                            className="relative w-full p-2 bg-white text-text placeholder-text"
                        />
                    </div>
                    <div className="w-full formcarry-block">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            placeholder="Email"
                            required
                            className="relative w-full p-2 bg-white text-text placeholder-text"
                        />
                    </div>
                    <div className="w-full formcarry-block">
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            id="message"
                            placeholder="Message..."
                            className="relative w-full p-2 bg-white text-text placeholder-text"
                        ></textarea>
                    </div>
                    <div className="flex items-center text-sm form-group">
                        <input
                            type="checkbox"
                            id="acceptTerms"
                            checked={acceptTerms}
                            onChange={(e) =>
                                setMarketingConsent(e.target.checked)
                            }
                            className="mr-2"
                        />
                        <label htmlFor="acceptTerms" className="text-text">
                            I agree to receive marketing communications.
                        </label>
                    </div>
                    <div className="flex items-center justify-center w-full formcarry-block">
                        <button
                            type="submit"
                            className="flex items-center justify-center gap-2 px-4 py-2 text-white transition-all rounded-lg animated-gradient primary-button group w-fit shadow-xxsmall shadow-primary font-heading bg-primary hover:bg-gradient"
                        >
                            <span className="text-lg uppercase">Send</span>
                            <span className="group-hover:translate-x-0.5 text-lg transition-all">
                                <BiSend />
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
