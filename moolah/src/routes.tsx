import Login from "./pages/auth-pages/login";
import Dashboard from "./pages/dashboard";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateAccount from "./pages/auth-pages/create-account";

const AppRouter = () => {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/create-account" element={<CreateAccount/>}></Route>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </main>
  );
};

export default AppRouter;
