import React from "react";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const ProductItem = (props) => {
  const dispath = useDispatch();
  
  const addToCartHandler = () => {
    dispath(cartActions.addItem({
      id: props.id, 
      title: props.title,
      price: props.price,
    }));
  }

  return (
    <div className={classes.productItem}>
      <div className={classes.description}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <div className={classes.descriptionActions}>
        <span className={classes.price}>${props.price}</span>
        <button onClick={addToCartHandler}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;

