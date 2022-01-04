import React from "react";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  return (
    <div className={classes.productItem}>
      <div className={classes.description}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <div className={classes.descriptionActions}>
        <span className={classes.price}>${props.price}</span>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;

