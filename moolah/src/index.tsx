import React from "react";
import App from "./App";
import "./index.css";
import { register as registerServiceWorker } from "./serviceWorkerRegistration";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";

const root = document.getElementById("root");

if (root) {
	const reactRoot = createRoot(root);
	reactRoot.render(
		<RecoilRoot>
			<App />
		</RecoilRoot>
	);
} else {
	console.error("Element with ID 'root' not found   in the DOM.");
}

registerServiceWorker();
