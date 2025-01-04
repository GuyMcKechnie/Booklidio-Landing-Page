import React from 'react';
import SubjectItem from './SubjectItem';

const SubjectList = ({ subjects }) => {
    return (
        <div className="subject-list">
            <h2 className="text-3xl font-bold mb-6">Shop by Subject</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {subjects.map((subject, index) => (
                    <SubjectItem key={index} subject={subject} />
                ))}
            </div>
        </div>
    );
};

export default SubjectList;