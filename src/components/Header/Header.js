import React from 'react';
import classes from './Header.module.css';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const Header = (props) => {
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
                        <span className={classes.headerQuantity}>1</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;