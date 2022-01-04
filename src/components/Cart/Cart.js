import React from "react";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className={classes.cart}>
      <h2>Your shopping cart</h2>
      <ul className={classes.itemList}>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            title={item.title}
            id={item.id}
            price={item.price}
            quantity={item.quantity}
            totalPrice={item.totalPrice}
          />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
