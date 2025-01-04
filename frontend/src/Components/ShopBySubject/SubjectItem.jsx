import React from 'react';

const SubjectItem = ({ subject }) => {
    return (
        <div className="subject-item">
            <img src={subject.image} alt={subject.title} className="subject-image" />
            <h4 className="subject-title">{subject.title}</h4>
            <p className="subject-description">{subject.description}</p>
            <button className="subject-button">View Books</button>
        </div>
    );
};

export default SubjectItem;