import Login from "./pages/authentication/login";
import Dashboard from "./pages/dashboard";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateAccount from "./pages/authentication/create-account";
import AuthGuard from "./guards/AuthGuard";

const AppRouter: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<AuthGuard>
							<Dashboard />
						</AuthGuard>
					}
				/>
				<Route path="/login" element={<Login />} />
				<Route path="/create-account" element={<CreateAccount />} />
			</Routes>
		</Router>
	);
};

export default AppRouter;
