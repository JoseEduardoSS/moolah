import { Navigate } from "react-router-dom";
import React from "react";
import { auth } from "../firebase";

const AuthGuard = ({ children }: any) => {
  const localStorageUserString = localStorage.getItem("user");
  const userObject = localStorageUserString && JSON.parse(localStorageUserString);

  const user = userObject ? userObject : auth.currentUser;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default AuthGuard;
