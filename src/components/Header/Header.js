import React from 'react';
import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const Header = (props) => {
    const totalQuantity = useSelector(state=> state.cart.totalQuantity);
    const dispatch = useDispatch();

    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
    }

    return (
        <header className={classes.header}>
            <h1>ReduxCart</h1>
            <nav>
                <ul>
                    <li className={classes.headerBtn} onClick={toggleCartHandler}>
                        <span>My Cart</span>
                        <span className={classes.headerQuantity}>{totalQuantity}</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;