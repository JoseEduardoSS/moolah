import { Navigate } from "react-router-dom";
import React from "react";
import useGetUser from "../state/user/hooks/useGetUser";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
	const user = useGetUser();

	console.log("user: ", user);

	return <>{user ? children : <Navigate to="/login" replace />}</>;
};

export default AuthGuard;
