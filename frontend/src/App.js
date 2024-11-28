import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import LandingPage from "./Pages/Landing";
import Home from "./Pages/Home";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<LandingPage />} />
            </Routes>
        </Router>
    );
}

export default App;
