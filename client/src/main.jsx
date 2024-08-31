import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PromisePolyfill from "promise-polyfill";
import App from "./App.jsx";
import "./index.scss";

if (!window.Promise) {
    window.Promise = PromisePolyfill;
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
