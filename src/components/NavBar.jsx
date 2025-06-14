import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const id = 42;
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            DashBoard
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/paramComp/${id}`}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            ParamComponent
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
