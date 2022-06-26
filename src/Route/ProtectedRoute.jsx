import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  let location = useLocation();

  if (isAuthenticated === "false") {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
