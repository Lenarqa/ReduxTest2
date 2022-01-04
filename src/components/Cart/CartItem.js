import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();
  
  const removeItemHandler = () => {
    dispatch(cartActions.removeItem(props.id))
  }

  const addItemHandler = () => {
    dispatch(cartActions.addItem({
      id: props.id, 
      title: props.title,
      price: props.price,
    }));
  }
  return (
    <li className={classes.cartItem}>
      <div className={classes.itemDescription}>
        <h2 className={classes.name}>{props.title}</h2>
        <span>
          x<h2>{props.quantity}</h2>
        </span>
      </div>
      <div>
        <div className={classes.cost}>
          <h2>${props.totalPrice}</h2>
          <span>(${props.price}/item)</span>
        </div>
        <div className={classes.itemActions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
