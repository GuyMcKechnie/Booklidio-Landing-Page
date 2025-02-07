import { useState } from "react";
import { FaBook, FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { RxChevronDown } from "react-icons/rx";
import { useMediaQuery } from "@relume_io/relume-ui";
import { BiCalculator, BiPencil, BiReceipt } from "react-icons/bi";
import { LuLogOut } from "react-icons/lu";
import { TbInvoice } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { assets } from "../../Assets/Assets";

const Navbar = (props) => {
    return (
        <nav className="fixed z-50 flex items-center w-full h-18 bg-white shadow-lg lg:px-8">
            <div className="justify-between size-full lg:flex lg:items-center">
                <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
                    <Link
                        to="/"
                        className="flex items-center text-4xl font-bold transition-all justify-left text-primary hover:text-accent hover:-translate-y-1"
                    >
                        <img
                            src={assets.header}
                            className="w-[30%] lg:w-[40%] -ml-4"
                            alt=""
                        />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
