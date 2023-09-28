import { Navigate } from "react-router-dom";
import React from "react";
import useGetUser from "../state/user/hooks/useGetUser";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
<<<<<<< HEAD
	const user = useGetUser();
=======
  const localStorageUserString = localStorage.getItem("user");
  const userObject =
    localStorageUserString && JSON.parse(localStorageUserString);
>>>>>>> b8f5072685a8ad9535c6639d8dd72e5688fafe0a

	console.log("user: ", user);

<<<<<<< HEAD
	return <>{user ? children : <Navigate to="/login" replace />}</>;
=======
  return <>{user ? children : <Navigate to="/login" replace />}</>;
>>>>>>> b8f5072685a8ad9535c6639d8dd72e5688fafe0a
};

export default AuthGuard;
