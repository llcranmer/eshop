import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_NNHmFGPQpCvoWqSqC8qyhAz1006dxqyoPi';
    const onToken = token => {
      console.log(token);
      alert('Payment Successful');
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='NookClothing, LLC'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;