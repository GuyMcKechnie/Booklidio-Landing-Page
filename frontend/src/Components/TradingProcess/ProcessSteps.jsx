import React from "react";

const ProcessSteps = () => {
    const steps = [
        {
            title: "Step 1: Prepare Your Books",
            description:
                "Gather the books you wish to trade and ensure they are in good condition.",
        },
        {
            title: "Step 2: Create an Account",
            description:
                "Sign up for an account on Booklidio to start trading your books.",
        },
        {
            title: "Step 3: List Your Books",
            description:
                "Upload the details of your books, including titles, authors, and conditions.",
        },
        {
            title: "Step 4: Browse Available Trades",
            description:
                "Explore the available books for trade that match your interests.",
        },
        {
            title: "Step 5: Confirm Your Trade",
            description:
                "Review the trade details and confirm your agreement with the other party.",
        },
        {
            title: "Step 6: Ship Your Books",
            description:
                "Pack your books securely and ship them to the designated address.",
        },
        {
            title: "Step 7: Receive Your New Books",
            description: "Once the trade is complete, enjoy your new books!",
        },
    ];

    return (
        <div className="process-steps">
            <h2 className="mb-6 text-2xl font-bold">Trading Process Steps</h2>
            <ol className="pl-5 list-decimal">
                {steps.map((step, index) => (
                    <li key={index} className="mb-4">
                        <h3 className="font-semibold">{step.title}</h3>
                        <p>{step.description}</p>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default ProcessSteps;
