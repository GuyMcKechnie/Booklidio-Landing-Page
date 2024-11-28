import { useState } from "react";
import { FaBars, FaBook, FaTimes, FaUser } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navbar_items_mobile = [
        { label: "Home", href: "#home" },
        { label: "Shop for Books", href: "#shop-for-books" },
        { label: "Sell on Booklidio", href: "#sell-books" },
        { label: "Account", href: "#account" },
        { label: "Cart", href: "#Cart" },
        { label: "FAQs", href: "#faqs" },
        { label: "Contact", href: "#contact" },
        { label: "About Us", href: "#about-us" },
    ];

    const navbar_items = [
        { label: "Home", href: "#home" },
        { label: "Shop for Books", href: "#shop-for-books" },
        { label: "Sell on Booklidio", href: "#sell-books" },
        { label: "FAQs", href: "#faqs" },
        { label: "Contact", href: "#contact" },
        { label: "About Us", href: "#about-us" },
        { label: <MdShoppingCart size={26} color="#680d28" />, href: "#cart" },
        { label: <FaUser size={26} color="#680d28" />, href: "#account" },
    ];

    return (
        <nav className="bg-white shadow-lg fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-2xl font-bold text-[#680d28]">
                            <FaBook size={28} />
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navbar_items.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-gray-700 hover:text-[#680d28] px-3 py-2 rounded-md text-sm font-medium"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-[#680d28]"
                        >
                            {isOpen ? (
                                <FaTimes size={24} />
                            ) : (
                                <FaBars size={24} />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navbar_items_mobile.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-gray-700 hover:text-[#680d28] block px-3 py-2 rounded-md text-base font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
