import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import App from './App';
const PrivateRoute = () => {
  const location = useLocation();
  return (
    <Routes>
        <Route path="*"
            element={
                localStorage.getItem('user') ? <App /> : <Navigate to={{ pathname: "/Loginfunchoo", state: { from: location } }} />
            }
    />
    </Routes>
  );
};

export default PrivateRoute;
