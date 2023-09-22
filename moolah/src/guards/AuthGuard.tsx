import { Navigate } from "react-router-dom";
import React from "react";
import { auth } from "../firebase";

const AuthGuard = ({ children }: any) => {
  const user = auth.currentUser;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default AuthGuard;