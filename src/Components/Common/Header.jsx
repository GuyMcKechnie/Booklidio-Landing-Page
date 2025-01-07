import { useState } from "react";
import { FaBook } from "react-icons/fa";
import SearchBar from "./search-bar.jsx";
import { AnimatePresence, motion } from "framer-motion";
import { RxChevronDown } from "react-icons/rx";
import { Button, useMediaQuery } from "@relume_io/relume-ui";

const Navbar = (props) => {
    const { logo, navLinks, buttons } = {
        ...NavbarDefaults,
        ...props,
    };

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isMobile = useMediaQuery("(max-width: 991px)");

    return (
        <nav className="flex items-center w-full bg-white shadow-lg lg:min-h-18 lg:px-8">
            <div className="justify-between size-full lg:flex lg:items-center">
                <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
                    <a href={logo.url}>
                        <span className="text-4xl font-bold text-primary">
                            {logo.component}
                        </span>
                    </a>
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
                    className="overflow-hidden px-[5%] w-full lg:flex text-text lg:items-center lg:justify-between lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
                >
                    <SearchBar />
                    {navLinks.map((navLink, index) => (
                        <div
                            key={index}
                            className="first:pt-4 lg:first:pt-0 font-heading text-text"
                        >
                            {navLink.subMenuLinks &&
                            navLink.subMenuLinks.length > 0 ? (
                                <SubMenu
                                    navLink={navLink}
                                    isMobile={isMobile}
                                />
                            ) : (
                                <a
                                    href={navLink.url}
                                    className="block py-3 text-md lg:px-4 lg:py-2 lg:text-xl text-text"
                                >
                                    {navLink.title}
                                </a>
                            )}
                        </div>
                    ))}
                    <div className="flex flex-col items-center gap-4 mt-6 lg:ml-4 lg:mt-0 lg:flex-row">
                        {buttons.map((button, index) => (
                            <Button
                                key={index}
                                {...button}
                                className="w-full text-xl text-white border-none rounded-full shadow font-heading bg-primary"
                            >
                                {button.title}
                            </Button>
                        ))}
                    </div>
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
            <button
                className="flex items-center justify-between w-full gap-2 py-3 text-left text-text text-md lg:flex-none lg:justify-start lg:px-4 lg:py-2 lg:text-xl"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
                <span>{navLink.title}</span>
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
                                className="block py-3 pl-[5%] text-md lg:px-4 lg:py-2 lg:text-base text-text"
                            >
                                {navLink.title}
                            </a>
                        ))}
                    </motion.nav>
                </AnimatePresence>
            )}
        </div>
    );
};

export const NavbarDefaults = {
    logo: {
        url: "/",
        component: <FaBook size={32} />,
    },
    navLinks: [
        {
            title: "Browse Textbooks",
            url: "/shop",
            subMenuLinks: [
                { title: "Primary", url: "/primary" },
                { title: "Highschool", url: "/highschool" },
            ],
        },
        { title: "Sell on Booklidio", url: "/sell" },
        { title: "Contact", url: "/contact" },
    ],
    buttons: [
        {
            title: "Login",
            size: "sm",
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
