import React from "react";
import {
    MdOutlineSchool,
    MdStarRate,
    MdFavorite,
    MdBook,
    MdBrush,
    MdExtension,
    MdComputer,
    MdSchool,
    MdAccessTime,
    MdBuild,
    MdGroup,
    MdTrendingUp,
} from "react-icons/md";
import { TiThMenu } from "react-icons/ti";

const ShopByGrade = () => {
    const grades = [
        {
            grade: "Grade 1",
            icon: <MdOutlineSchool size={120} color="#680d28" />,
        },
        {
            grade: "Grade 2",
            icon: <MdStarRate size={120} color="#680d28" />,
        },
        {
            grade: "Grade 3",
            icon: <MdFavorite size={120} color="#680d28" />,
        },
        {
            grade: "Grade 4",
            icon: <MdBook size={120} color="#680d28" />,
        },
        {
            grade: "Grade 5",
            icon: <MdBrush size={120} color="#680d28" />,
        },
        {
            grade: "Grade 6",
            icon: <MdExtension size={120} color="#680d28" />,
        },
        {
            grade: "Grade 7",
            icon: <MdComputer size={120} color="#680d28" />,
        },
        {
            grade: "Grade 8",
            icon: <MdSchool size={120} color="#680d28" />,
        },
        {
            grade: "Grade 9",
            icon: <MdAccessTime size={120} color="#680d28" />,
        },
        {
            grade: "Grade 10",
            icon: <MdBuild size={120} color="#680d28" />,
        },
        {
            grade: "Grade 11",
            icon: <MdGroup size={120} color="#680d28" />,
        },
        {
            grade: "Grade 12",
            icon: <MdTrendingUp size={120} color="#680d28" />,
        },
    ];
    return (
        <div
            id="grades"
            className="bg-#fdebe7 rounded-xl shadow-md overflow-hidden py-16 px-6"
        >
            <div>
                <div className="flex justify-between items-center ">
                    <h1 className="text-2xl">Shop by Grade</h1>
                    <a href="#" className="text-md text-red-900 font-bold">
                        View All
                    </a>
                </div>
                <div className="grid grid-cols-2 space-y-4 gap-4">
                    {grades.map((grade, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-between bg-white rounded-lg shadow-md p-4"
                        >
                            <>{grade.icon}</>
                            <h1 className="text-2xl text-gray-600 font-bold">
                                {grade.grade}
                            </h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopByGrade;
