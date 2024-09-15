import ReactDOM from "react-dom/client";
import PromisePolyfill from "promise-polyfill";
import App from "./App.jsx";
import "./index.scss";

if (!window.Promise) {
  window.Promise = PromisePolyfill;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);