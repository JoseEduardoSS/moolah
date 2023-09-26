import { Navigate } from "react-router-dom";
import React from "react";
import { auth } from "../firebase";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
	const localStorageUserString = localStorage.getItem("user");
	const userObject =
		localStorageUserString && JSON.parse(localStorageUserString);

	const user = userObject ? userObject : auth.currentUser;

	return <>{user ? children : <Navigate to="/login" replace />}</>;
};

export default AuthGuard;
