import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ route }) => {
  const token = "my_token";
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
