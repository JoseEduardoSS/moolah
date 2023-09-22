import Login from "./pages/authentication/login";
import Dashboard from "./pages/dashboard";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateAccount from "./pages/authentication/create-account";
import PrivateRoute from "./components/private-route";

const AppRouter = () => {
  return (
    <main>
      <Router>
        <Routes>

          <Route path="/" element={<PrivateRoute/>}/>

          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
      </Router>
    </main>
  );
};

export default AppRouter;
