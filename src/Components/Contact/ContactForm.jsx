import React, { useState } from "react";
import { Button, Checkbox, Input, Label, Textarea } from "@relume_io/relume-ui";
import { Link } from "react-router-dom";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [acceptTerms, setAcceptTerms] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ name, email, message, acceptTerms });
    };

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
                    className="grid w-full max-w-md grid-cols-1 gap-6 mx-auto text-text"
                    onSubmit={handleSubmit}
                >
                    <div className="grid items-center w-full">
                        <Label
                            htmlFor="name"
                            className="mb-2 text-lg font-semibold font-heading"
                        >
                            Name
                        </Label>
                        <Input
                            type="text"
                            id="name"
                            value={name}
                            className="font-body"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="grid items-center w-full">
                        <Label
                            htmlFor="email"
                            className="mb-2 text-lg font-semibold font-heading"
                        >
                            Email
                        </Label>
                        <Input
                            type="email"
                            id="email"
                            value={email}
                            className="font-body"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="grid items-center w-full">
                        <Label
                            htmlFor="message"
                            className="mb-2 text-lg font-semibold font-heading"
                        >
                            Message
                        </Label>
                        <Textarea
                            id="message"
                            placeholder="Type your message..."
                            className="min-h-[11.25rem] overflow-auto font-body"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center mb-3 space-x-2 text-sm md:mb-4">
                        <Checkbox
                            id="terms"
                            checked={acceptTerms}
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
                    <div className="text-center">
                        <Button>Send Message</Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
