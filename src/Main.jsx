import * as React from "react";
import "./index.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
