import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { register as registerServiceWorker } from "./serviceWorkerRegistration";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");

if (root) {
  const reactRoot = createRoot(root);
  reactRoot.render(<App />);
} else {
  console.error("Element with ID 'root' not found   in the DOM.");
}

registerServiceWorker();
