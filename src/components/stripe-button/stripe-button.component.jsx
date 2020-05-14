import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_1L2DRhrcsWzVDtbgePZHuLN4001T0MVSOW';

    const onToken = token => {
        console.log(token);
        alert('Payment Successfull');
    };

    return (
        <StripeCheckout 
        label="Pay Now"
        name="Ganesh Enterprises"
        billingAddress
        shippingAddress
        image = "https://sendeyo.com/up/d/f3eb2117da"
        description={`Your Total is Rs.${price}`}
        amount = {priceForStripe}
        panelLabel = "Pay Now"
        token = {onToken}
        stripeKey = {publishableKey}
        currency = 'inr'
        />
    );
};

export default StripeCheckoutButton;