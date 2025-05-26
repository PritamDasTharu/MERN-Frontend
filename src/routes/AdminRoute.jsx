import React from "react";
import { Outlet } from "react-router-dom";

const AdminRoute = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  return token && role == "1" ? <Outlet /> : <Navigate to="/"></Navigate>;
};

export default AdminRoute;
