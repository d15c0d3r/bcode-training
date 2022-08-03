import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Cart } from "./Cart";
import { useCart } from "../store/cartState";
import "../styles/Navbar.css";

export const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const [cart] = useCart();
  const onCartClickHandler = (e) => {
    setShowCart((prevState) => !prevState);
  };
  return (
    <nav>
      <div className="nav-items">
        <div className="li">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="li">
          <NavLink to="/product/1">Product</NavLink>
        </div>
      </div>
      <div className="cart">
        <button onClick={(e) => onCartClickHandler()}>
          Cart
          {Object.keys(cart).length ? `(${Object.keys(cart).length})` : null}
        </button>
      </div>
      {showCart && <Cart />}
    </nav>
  );
};
