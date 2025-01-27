import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import GradeCollection from "./Pages/GradeCollection.jsx";
import Product from "./Pages/Product.jsx";
import Cart from "./Pages/Cart.jsx";
import Register from "./Pages/Register.jsx";
import PlaceOrder from "./Pages/PlaceOrder.jsx";
import Orders from "./Pages/Orders.jsx";
import Header from "./Components/Common/Header.jsx";
import Footer from "./Components/Common/Footer.jsx";
import PrivacyPolicy from "./Pages/PrivacyPolicy.jsx";
import SubjectCollection from "./Pages/SubjectCollection.jsx";
import FAQPage from "./Pages/FAQPage.jsx";
import Contact from "./Pages/Contact.jsx";
import TOS from "./Pages/TOS.jsx";
import ReturnsPolicy from "./Pages/ReturnsPolicy.jsx";
import NotFound from "./Pages/NotFound.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { motion } from "framer-motion";
import { LoadingAnimation } from "./Components/Utilities/LoadingAnimation.jsx";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    setTimeout(() => {
        setIsLoading(false);
    }, 2000);
    return (
        <>
            {isLoading ? (
                <LoadingAnimation />
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.3 }}
                >
                    <Analytics />
                    <SpeedInsights />
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/grades" element={<GradeCollection />} />
                        <Route
                            path="/subjects"
                            element={<SubjectCollection />}
                        />
                        <Route
                            path="/product/:productId"
                            element={<Product />}
                        />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/place-order" element={<PlaceOrder />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route
                            path="/privacy-policy"
                            element={<PrivacyPolicy />}
                        />
                        <Route
                            path="/returns-policy"
                            element={<ReturnsPolicy />}
                        />
                        <Route path="/faq" element={<FAQPage />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/terms-of-service" element={<TOS />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </motion.div>
            )}
        </>
    );
}

export default App;
