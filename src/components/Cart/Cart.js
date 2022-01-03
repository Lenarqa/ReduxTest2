import React from 'react';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
    return (
        <div className={classes.cart}>
            <h2>Your shopping cart</h2>
            <ul className={classes.itemList}>
                <CartItem />
            </ul>
        </div>
    );
};

export default Cart;