import React from "react";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
import ProcessSteps from "../Components/TradingProcess/ProcessSteps";
import ProcessDetails from "../Components/TradingProcess/ProcessDetails";

const TradingProcess = () => {
    return (
        <div>
            <Header />
            <main className="px-[5%] py-16">
                <h1>Trading Process</h1>
                <ProcessSteps />
                <ProcessDetails />
            </main>
            <Footer />
        </div>
    );
};

export default TradingProcess;
