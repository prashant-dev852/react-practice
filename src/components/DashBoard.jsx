import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./DashBoard.css";

export default function DashBoard() {
  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <div className="flex-center">
        <NavLink to="course">:course</NavLink>
      </div>
      <Outlet />
    </div>
  );
}
