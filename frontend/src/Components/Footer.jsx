import React from "react";
const Footer = () => {
    const footer_items = [
        {
            title: "About Us",
            href: "about-us",
        },
        {
            title: "Contact Us",
            href: "contact-us",
        },
        {
            title: "FAQ",
            href: "faq",
        },
        {
            title: "Shipping Information",
            href: "shipping-information",
        },
        {
            title: "Orders",
            href: "orders",
        },
        {
            title: "Account",
            href: "account",
        },
        {
            title: "Returns",
            href: "returns",
        },
    ];
    const policies = [
        {
            title: "Terms of Service",
            href: "terms-of-service",
        },
        {
            title: "Privacy Policy",
            href: "privacy-policy",
        },
        {
            title: "Returns Policy",
            href: "returns-policy",
        },
    ];
    return (
        <div>
            <div
                id="top-footer"
                className="grid grid-cols-2 justify-center items-center bg-[#680d28] py-6 px-12 text-white text-xl gap-4"
            >
                {footer_items.map((item, index) => (
                    <a key={index} href={item.href}>
                        {item.title}
                    </a>
                ))}
            </div>
            <div
                id="bottom-footer"
                className="flex flex-col px-6 space-y-4 bg-[#441122] text-white pb-12 pt-6"
            >
                <div className="flex items-center justify-center text-xl mb-4">
                    <h2>
                        Already a customer?{" "}
                        <a href="#sign-in" className="font-bold">
                            Sign in
                        </a>
                    </h2>
                </div>
                <div className="flex flex-row justify-center items-center space-x-6">
                    {policies.map((policy, index) => (
                        <a key={index} href={policy.href}>
                            {policy.title}
                        </a>
                    ))}
                </div>
                <div className="text-center">
                    <p>
                        &copy; {new Date().getFullYear()} Booklidio. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Footer;
