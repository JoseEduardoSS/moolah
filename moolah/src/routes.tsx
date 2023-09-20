import Login from "./pages/authentication/login";
import Dashboard from "./pages/dashboard";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateAccount from "./pages/authentication/create-account";

const AppRouter = () => {
  return (
    <main>
      <Router>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/create-account" element={<CreateAccount />}></Route>
        </Routes>
      </Router>
    </main>
  );
};

export default AppRouter;
