import { useState } from "react";
import { FaBook } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { RxChevronDown } from "react-icons/rx";
import { useMediaQuery } from "@relume_io/relume-ui";
import { BiCalculator, BiPencil, BiReceipt } from "react-icons/bi";
import { LuLogOut } from "react-icons/lu";
import { TbInvoice } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";

const Navbar = (props) => {
    const location = useLocation();
    const { navLinks } = {
        ...NavbarDefaults,
        ...props,
    };

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isMobile = useMediaQuery("(max-width: 991px)");

    return (
        <nav className="fixed z-50 flex items-center w-full bg-white shadow-lg lg:min-h-18 lg:px-8">
            <div className="justify-between size-full lg:flex lg:items-center">
                <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
                    <Link
                        to="/"
                        className="text-4xl font-bold transition-all text-primary hover:text-accent hover:scale-110"
                    >
                        <FaBook size={32} />
                    </Link>
                    <button
                        className="flex flex-col items-center justify-center -mr-2 text-text size-12 lg:hidden"
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    >
                        <motion.span
                            className="my-[3px] h-0.5 w-6 bg-black"
                            animate={
                                isMobileMenuOpen
                                    ? ["open", "rotatePhase"]
                                    : "closed"
                            }
                            variants={topLineVariants}
                        />
                        <motion.span
                            className="my-[3px] h-0.5 w-6 bg-black text-text"
                            animate={isMobileMenuOpen ? "open" : "closed"}
                            variants={middleLineVariants}
                        />
                        <motion.span
                            className="my-[3px] h-0.5 w-6 bg-black text-text "
                            animate={
                                isMobileMenuOpen
                                    ? ["open", "rotatePhase"]
                                    : "closed"
                            }
                            variants={bottomLineVariants}
                        />
                    </button>
                </div>
                <motion.div
                    variants={{
                        open: {
                            height: "var(--height-open, 100dvh)",
                        },
                        close: {
                            height: "var(--height-closed, 0)",
                        },
                    }}
                    initial="close"
                    exit="close"
                    animate={isMobileMenuOpen ? "open" : "close"}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden px-[5%] w-full lg:flex text-text lg:items-center lg:justify-end lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
                >
                    {navLinks.map((navLink, index) => (
                        <div
                            key={index}
                            className={`first:pt-4 lg:first:pt-0 font-heading text-text`}
                        >
                            {navLink.subMenuLinks &&
                            navLink.subMenuLinks.length > 0 ? (
                                <SubMenu
                                    navLink={navLink}
                                    isMobile={isMobile}
                                ></SubMenu>
                            ) : (
                                <Link
                                    to={navLink.url}
                                    className="flex flex-col py-3 text-md lg:px-4 lg:py-2 lg:text-xl text-text group"
                                >
                                    <span className="transition-transform group-hover:-translate-y-0.5">
                                        {navLink.title}
                                    </span>
                                    <div
                                        className={`w-[70%] flex mx-auto h-0.5 rounded-full group-hover:w-[80%] transition-all bg-primary ${
                                            location.pathname === navLink.url
                                                ? ""
                                                : "hidden"
                                        }`}
                                    />
                                </Link>
                            )}
                        </div>
                    ))}
                    <Link
                        to={"/cart"}
                        className="relative p-3 text-lg text-white transition-colors duration-300 rounded-full group bg-primary hover:bg-accent "
                    >
                        <CgShoppingCart
                            className="transition-transform group-hover:scale-110"
                            size={24}
                        />
                    </Link>
                </motion.div>
            </div>
        </nav>
    );
};

const SubMenu = ({ navLink, isMobile }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div
            onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
            onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
        >
            <a href={navLink.url}>
                <button
                    className="flex items-center justify-between w-full gap-2 py-3 text-left text-text text-md lg:flex-none lg:justify-start lg:px-4 lg:py-2 lg:text-xl"
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                >
                    <span className="transition-transform group-hover:-translate-y-0.5">
                        {navLink.title}
                        <div
                            className={`w-[70%] mx-auto h-0.5 rounded-full group-hover:w-[80%] transition-all bg-primary ${
                                location.pathname === navLink.url
                                    ? "flex"
                                    : "hidden"
                            }`}
                        />
                    </span>
                    <motion.span
                        variants={{
                            rotated: { rotate: 180 },
                            initial: { rotate: 0 },
                        }}
                        animate={isDropdownOpen ? "rotated" : "initial"}
                        transition={{ duration: 0.3 }}
                    >
                        <RxChevronDown />
                    </motion.span>
                </button>
            </a>
            {isDropdownOpen && (
                <AnimatePresence>
                    <motion.nav
                        variants={{
                            open: {
                                visibility: "visible",
                                opacity: "var(--opacity-open, 100%)",
                                y: 0,
                            },
                            close: {
                                visibility: "hidden",
                                opacity: "var(--opacity-close, 0)",
                                y: "var(--y-close, 0%)",
                            },
                        }}
                        animate={isDropdownOpen ? "open" : "close"}
                        initial="close"
                        exit="close"
                        transition={{ duration: 0.2 }}
                        className="bg-white lg:absolute lg:z-50 lg:border lg:border-grey-100 lg:p-2 lg:[--y-close:25%]"
                    >
                        {navLink.subMenuLinks?.map((navLink, index) => (
                            <a
                                key={index}
                                href={navLink.url}
                                className="items-center justify-right gap-2 flex py-3 pl-[5%] text-md lg:px-4 lg:py-2 lg:text-base text-text font-heading"
                            >
                                {navLink.component}
                                <span className="hover:translate-x-0.5 transition-all duration-150 ease-linear">
                                    {navLink.title}
                                </span>
                            </a>
                        ))}
                    </motion.nav>
                </AnimatePresence>
            )}
        </div>
    );
};

export const NavbarDefaults = {
    navLinks: [
        {
            title: "Collections",
            url: "/collections",
            subMenuLinks: [
                {
                    title: "Grade",
                    url: "/grade",
                    component: <BiPencil />,
                },
                {
                    title: "Subject",
                    url: "/subject",
                    component: <BiCalculator />,
                },
            ],
        },
        { title: "About Us", url: "/about-us" },
        { title: "Contact", url: "/contact" },
        {
            title: "My Account",
            url: "/account",
            subMenuLinks: [
                { title: "Orders", url: "/orders", component: <BiReceipt /> },
                {
                    title: "Invoices",
                    url: "/invoices",
                    component: <TbInvoice />,
                },
                {
                    title: "Logout",
                    url: "/logout",
                    component: <LuLogOut />,
                },
            ],
        },
    ],
};

const topLineVariants = {
    open: {
        translateY: 8,
        transition: { delay: 0.1 },
    },
    rotatePhase: {
        rotate: -45,
        transition: { delay: 0.2 },
    },
    closed: {
        translateY: 0,
        rotate: 0,
        transition: { duration: 0.2 },
    },
};

const middleLineVariants = {
    open: {
        width: 0,
        transition: { duration: 0.1 },
    },
    closed: {
        width: "1.5rem",
        transition: { delay: 0.3, duration: 0.2 },
    },
};

const bottomLineVariants = {
    open: {
        translateY: -8,
        transition: { delay: 0.1 },
    },
    rotatePhase: {
        rotate: 45,
        transition: { delay: 0.2 },
    },
    closed: {
        translateY: 0,
        rotate: 0,
        transition: { duration: 0.2 },
    },
};

export default Navbar;
