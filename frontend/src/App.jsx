import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import ShopByGrade from "./Pages/ShopByGrade";
import ShopBySubject from "./Pages/ShopBySubject";
import TradingProcess from "./Pages/TradingProcess";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop-by-grade" element={<ShopByGrade />} />
                <Route path="/shop-by-subject" element={<ShopBySubject />} />
                <Route path="/trading-process" element={<TradingProcess />} />
            </Routes>
        </Router>
    );
}

export default App;
