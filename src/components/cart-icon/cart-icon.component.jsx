import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './cart-icon.styles.scss';
import { selectItemCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({toggleCartDropdown, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartDropdown}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count"> {itemCount} </span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

const mapStateToProp = createStructuredSelector({
    itemCount: selectItemCount
});

export default connect(mapStateToProp, mapDispatchToProps)(CartIcon);