import React from 'react';

const ProcessDetails = () => {
    return (
        <div className="process-details">
            <h2 className="text-2xl font-bold mb-4">Trading Process Details</h2>
            <p className="mb-4">
                To successfully trade your books, follow these key steps:
            </p>
            <h3 className="text-xl font-semibold mb-2">Preparation</h3>
            <p className="mb-4">
                Ensure your books are in good condition and gather all necessary information about them.
            </p>
            <h3 className="text-xl font-semibold mb-2">Evaluation Criteria</h3>
            <p className="mb-4">
                We evaluate books based on their condition, demand, and market value. Make sure to check our guidelines for more details.
            </p>
            <h3 className="text-xl font-semibold mb-2">Submission Process</h3>
            <p>
                Fill out the submission form with the details of your books and submit it for review.
            </p>
        </div>
    );
};

export default ProcessDetails;