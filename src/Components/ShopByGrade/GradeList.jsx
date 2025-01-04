import React from "react";
import { gradesList } from "../../Data/Grades.js";

const GradeList = () => {
    return (
        <div className="grade-list">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {gradesList.map((grade, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-between p-4 transition ease-in-out bg-white rounded-lg shadow-md duration-300ms hover:scale-105"
                    >
                        <a href={grade.href} className="">
                            <div className="text-red-900">{grade.icon}</div>
                            <h1 className="text-2xl font-bold text-center text-neutral-700">
                                {grade.grade}
                            </h1>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GradeList;
