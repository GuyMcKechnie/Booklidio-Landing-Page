import React, { useEffect } from "react";
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { motion } from "framer-motion";
import { LoadingAnimation } from "./Components/Utilities/LoadingAnimation.jsx";
// Component Imports
import Home from "./Pages/Home.jsx";
import Header from "./Components/Common/Header.jsx";
import Footer from "./Components/Common/Footer.jsx";
import PrivacyPolicy from "./Pages/PrivacyPolicy.jsx";
import FAQPage from "./Pages/FAQPage.jsx";
import Contact from "./Pages/Contact.jsx";
import TOS from "./Pages/TOS.jsx";
import ReturnsPolicy from "./Pages/ReturnsPolicy.jsx";
import NotFound from "./Pages/NotFound.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [location]);
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
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/returns-policy" element={<ReturnsPolicy />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms-of-service" element={<TOS />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;
