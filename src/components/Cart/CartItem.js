import React from "react";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li className={classes.cartItem}>
      <div className={classes.itemDescription}>
        <h2 className={classes.name}>Test Item</h2>
        <span>
          x<h2>3</h2>
        </span>
      </div>
      <div>
        <div className={classes.cost}>
          <h2>$18.00</h2>
          <span>($6.00/item)</span>
        </div>
        <div className={classes.itemActions}>
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
