import React from "react";
import { Navigate } from "react-router-dom";
import useAuthenticatedUser from "../../state/auth/hooks/useAuthenticatedUser";
import Dashboard from "../../pages/dashboard";


const PrivateRoute: React.FC = () => {
  const user = useAuthenticatedUser();

  return user ? <Dashboard /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
