import React from "react";
import classes from "./Products.module.css";
import ProductItem from "./ProductItem";

const Products = (props) => {
  return (
    <div className={classes.prodacts}>
      <h1>Buy your fovorite products</h1>
      <div>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "Test 1",
    description: "This is a first product - amazing",
  },
  {
    id: "p2",
    price: 10,
    title: "Test 2",
    description: "This is a second product - amazing",
  },
  {
    id: "p3",
    price: 5,
    title: "Test 3",
    description: "This is a 3 product - amazing",
  },
];
