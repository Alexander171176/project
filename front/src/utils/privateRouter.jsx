import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const token = localStorage.getItem("auth_token");
  return token ?  Outlet : <Navigate to="/login" />;
};

export { PrivateRoute };
