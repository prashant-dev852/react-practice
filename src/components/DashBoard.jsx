import React from "react";
import { Outlet } from "react-router-dom";

export default function DashBoard() {
  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <Outlet />
    </div>
  );
}
