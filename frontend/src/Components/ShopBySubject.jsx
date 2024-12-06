import React, { useState } from "react";
import {
    CCarousel,
    CCarouselItem,
    CCarouselCaption,
    CImage,
} from "@coreui/react";
import { MdFunctions, MdScience, MdTextsms, MdBrush } from "react-icons/md";

const ShopBySubject = () => {
    const subjects = [
        {
            grade: "Mathematics",
            icon: <MdFunctions size={120} />,
            href: "shop/mathematics",
        },
        {
            grade: "Science",
            icon: <MdScience size={120} />,
            href: "shop/science",
        },
        {
            grade: "English",
            icon: <MdTextsms size={120} />,
            href: "shop/english",
        },
        {
            grade: "Art",
            icon: <MdBrush size={180} />,
            href: "shop/art",
        },
    ];

    return (
        <div id="grades" className="bg-gray-100 overflow-hidden py-16 px-6">
            <div>
                {/* Desktop Menu */}
                <div className="hidden md:flex flex-col">
                    <h1 className="text-3xl pb-6 text-zinc-800 font-md">
                        Shop by Subject
                    </h1>
                    <div className="grid grid-cols-6  gap-4">
                        {subjects.map((subject, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-between bg-white rounded-lg shadow-md p-4 transition duration-300ms ease-in-out hover:scale-105"
                            >
                                <a href={subject.href} className="">
                                    <div className="text-red-900">
                                        {subject.icon}
                                    </div>
                                    <h1 className="text-2xl text-zinc-700 font-bold text-center">
                                        {subject.grade}
                                    </h1>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Mobile Menu */}
                <div className="block md:hidden">
                    <CCarousel controls>
                        <CCarouselItem>
                            <MdFunctions size={100} />
                        </CCarouselItem>
                        <CCarouselItem>
                            <MdScience />
                        </CCarouselItem>
                        <CCarouselItem>
                            <MdTextsms />
                        </CCarouselItem>
                        <CCarouselItem>
                            <MdBrush />
                        </CCarouselItem>
                    </CCarousel>
                </div>
            </div>
        </div>
    );
};

export default ShopBySubject;
