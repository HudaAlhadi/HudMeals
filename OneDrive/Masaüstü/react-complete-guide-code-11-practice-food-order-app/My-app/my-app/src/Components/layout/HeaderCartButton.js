
import classes from './HeaderCartButton.module.css';
import CartContext from '../../Store/Cart-context';

import { useContext } from 'react';
const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return (
        <button onClick={props.onClick} className={classes.button}>
            <span className={classes.icon}>

            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
