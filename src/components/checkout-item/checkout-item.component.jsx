import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem: {name, quantity, price, imageUrl}}) => {
    return(
        <div className="checkout-item">
            <div className = "image-container">
                <img src={imageUrl} alt="cart item" />
            </div>
            <div className="name">{name}</div>
            <div className="quantity"> {quantity} </div>
            <div className="price"> {price} </div>
            <div className="remove-button"> &#10005; </div>
        </div>
    );
}

export default CheckoutItem;