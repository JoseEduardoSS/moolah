import React from "react";
import AppRouter from "./routes";
import { RecoilRoot } from "recoil";

const App: React.FC = () => {
	return (
		<main>
			<RecoilRoot>
				<AppRouter />
			</RecoilRoot>
		</main>
	);
};

export default App;
