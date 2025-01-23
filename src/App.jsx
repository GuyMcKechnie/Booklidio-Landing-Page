import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/grades" element={<GradeCollection />} />
                <Route path="/subjects" element={<SubjectCollection />} />
                <Route path="/product/:productId" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/register" element={<Register />} />
                <Route path="/place-order" element={<PlaceOrder />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
