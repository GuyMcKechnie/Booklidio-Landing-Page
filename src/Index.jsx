import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./Index.css";
import App from "./App.jsx";
import reportWebVitals from "./WebVitals.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
