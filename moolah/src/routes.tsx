import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </main>
  );
};

export default AppRouter;
