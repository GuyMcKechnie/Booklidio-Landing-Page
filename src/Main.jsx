import * as React from "react";
import "./index.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./Context/ShopContext.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <ShopContextProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </ShopContextProvider>
    </BrowserRouter>
);
