import React, { useState } from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../Common/Buttons/PrimaryButton";
import { BiPaperPlane, BiSend } from "react-icons/bi";
import { FaPaperPlane } from "react-icons/fa";
import { IoPaperPlane, IoPaperPlaneOutline } from "react-icons/io5";

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
    <section className="section-container">
      <div className="max-w-lg pt-18">
        <div className="text-container mb-6 text-center">
          <h1>Contact Us</h1>
          <p>
            At Booklidio, customer satisfaction is our main priority. If you
            aren't happy, neither are we.
          </p>
        </div>
        <form onSubmit={handleSubmit} class="space-y-6">
          <div>
            <label for="name">
              <h2>Name</h2>
            </label>
            <input
              class="text-gray font-body w-full border-2 border-gray-200 bg-white p-2 text-sm"
              placeholder="John Doe"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label for="email">
              <h2>Email</h2>
            </label>
            <input
              type="email"
              id="email"
              class="text-gray font-body w-full border-2 border-gray-200 bg-white p-2 text-sm"
              placeholder="john@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div class="sm:col-span-2">
            <label for="message">
              <h2>Message</h2>
            </label>
            <textarea
              id="message"
              rows="6"
              class="text-gray font-body w-full border-2 border-gray-200 bg-white p-2 text-sm"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-3 flex items-center space-x-2 text-sm md:mb-6">
            <input
              type="checkbox"
              id="terms"
              checked={acceptTerms}
              defaultChecked="true"
              onChange={(e) => setAcceptTerms(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="acceptTerms">
              <p>I agree to receive marketing communications.</p>
            </label>
          </div>
          <button
            type="submit"
            class="shadow-xxsmall border-gray flex w-fit items-center justify-center gap-2 rounded-lg border bg-white px-4 py-2 shadow-white transition-all hover:-translate-y-0.5"
          >
            <h2 className="!opacity-100">Send Message</h2>
            <span className="text-lg">
              <IoPaperPlaneOutline />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
