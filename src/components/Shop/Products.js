import React from 'react';
import classes from './Products.module.css';
import ProductItem from './ProductItem';

const Products = (props) => {
    return (
        <div className={classes.prodacts}>
            <h1>Buy your fovorite products</h1>
            <div>
               <ProductItem />
            </div>
        </div>
    );
};

export default Products;