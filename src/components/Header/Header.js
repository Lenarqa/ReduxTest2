import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <h1>ReduxCart</h1>
            <nav>
                <ul>
                    <li className={classes.headerBtn}>
                        <span>My Cart</span>
                        <span className={classes.headerQuantity}>1</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;