import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/Header.css";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <header className="header">
      <h1>ShoppyGlobe</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </nav>
    </header>
  );
};

export default Header;
