import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/product/1">Product</NavLink>
        </li>
      </ul>
    </nav>
  );
};
