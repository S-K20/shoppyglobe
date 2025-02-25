import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import "../styles/Cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      )}
      <Link to="/checkout">Proceed to Checkout</Link>
    </div>
  );
};

export default Cart;
