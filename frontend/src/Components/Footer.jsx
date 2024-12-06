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
        <div className="">
            <div
                id="footer"
                className="flex flex-col px-6 space-y-4 bg-red-900 text-white pb-12 pt-6 pb-6 lg:pb-6 lg:pt-12"
            >
                {/* Desktop */}
                <div className="hidden lg:flex lg:flex-row lg:justify-around lg:items-center">
                    <div className="grid lg:flex lg:flex-col lg:gap-1">
                        {footer_items.slice(0, 4).map((policy, index) => (
                            <a
                                key={index}
                                href={policy.href}
                                className="hover:scale-105 transition duration-300ms ease-in-out"
                            >
                                {policy.title}
                            </a>
                        ))}
                    </div>
                    <div className="grid lg:flex lg:flex-col lg:gap-1">
                        {footer_items.slice(5, 9).map((policy, index) => (
                            <a
                                key={index}
                                href={policy.href}
                                className="hover:scale-105 transition duration-300ms ease-in-out"
                            >
                                {policy.title}
                            </a>
                        ))}
                    </div>
                </div>
                {/* Mobile */}
                <div className="md:hidden grid grid-cols-2 gap-2">
                    {footer_items.map((item, index) => (
                        <div key={index}>
                            <a href={item.href} className="text-base">{item.title}</a>
                        </div>
                    ))}
                </div>
                <div className="text-center pt-6">
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
