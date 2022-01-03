import React from "react";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  return (
    <div className={classes.productItem}>
      <div className={classes.description}>
        <h2>Test</h2>
        <p>This is a first product - amazing</p>
      </div>
      <div className={classes.descriptionActions}>
        <span className={classes.price}>$6.00</span>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
