import React from 'react';

import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(item => (<CartItem key = {item.id} item = {item} />))
            }
        </div>
        <CustomButton>Go To Checkout</CustomButton>
    </div>
);

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
});

export default connect(mapStateToProps)(CartDropdown);