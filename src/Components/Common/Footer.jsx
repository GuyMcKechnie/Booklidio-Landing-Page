import { Button, Input } from "@relume_io/relume-ui";
import { BiLogoFacebookCircle, BiLogoInstagram } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";
import SecondaryButton from ".//Buttons/SecondaryButton.jsx";
import { FaArrowDown, FaInbox } from "react-icons/fa";
import { BsArrowDown } from "react-icons/bs";
import { footerDefaults } from "../../Data/FooterDefaults.jsx";

const Footer = () => {
  const [emailInput, setEmailInput] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <footer className="px-[5%]">
      <div className="grid grid-cols-1 gap-x-[8vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[0.75fr_1fr] lg:gap-y-4 lg:pb-20">
        <div className="flex flex-col">
          <Link to="/">
            <h1 className="!text-primary">Booklidio</h1>
          </Link>
          <p className="mt-3 mb-6">
            Join our newsletter to receive updates on new books and promotions.
          </p>
          <div className="w-full max-w-md">
            <form
              className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4"
              onSubmit={handleSubmit}
            >
              <Input
                id="email"
                type="email"
                placeholder="johndoe@gmail.com"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="text-gray font-heading border-gray rounded-lg border p-2"
              />
              <button
                type="submit"
                className="text-gray font-heading border-gray rounded-lg border p-2 uppercase"
              >
                Subscribe
              </button>
            </form>
            <div>
              <p className="!text-xs">
                By subscribing you agree to with our{" "}
                <Link to={"/privacy-policy"} className="underline">
                  Privacy Policy
                </Link>
                and provide consent to receive updates from Booklidio.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-10 sm:grid-cols-3 sm:gap-x-6 md:gap-x-8 md:gap-y-4">
          {footerDefaults.map((column, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-start"
            >
              <h3 className="font-heading mb-3 font-semibold md:mb-4">
                {column.title}
              </h3>
              <ul>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="font-body py-2 text-sm">
                    <Link to={link.url} className="flex items-center gap-3">
                      {link.icon && <span>{link.icon}</span>}
                      <span>{link.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray h-px w-full" />
      <div className="font-body flex flex-col-reverse items-start justify-between pt-6 pb-4 text-sm md:flex-row md:items-center md:pt-8 md:pb-0">
        <p className="mt-6 text-center md:mt-0">
          Copyright 2025 Booklidio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
