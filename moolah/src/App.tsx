import React from "react";
import AppRouter from "./routes";
import { RecoilRoot } from "recoil";
import Alert from "./components/alert";

const App: React.FC = () => {
	return (
		<main>
			<RecoilRoot>
				<AppRouter />
				<Alert />
			</RecoilRoot>
		</main>
	);
};

export default App;
