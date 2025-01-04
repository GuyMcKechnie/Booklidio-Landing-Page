import React from 'react';

const GradeItem = ({ grade, books }) => {
    return (
        <div className="grade-item">
            <h4 className="mb-4 text-xl font-bold">{grade}</h4>
            <ul className="book-list">
                {books.map((book, index) => (
                    <li key={index} className="mb-2 book-item">
                        <img src={book.image} alt={book.title} className="book-image" />
                        <div className="book-info">
                            <h5 className="font-semibold book-title">{book.title}</h5>
                            <p className="text-gray-600 book-author">{book.author}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GradeItem;