import React from 'react'
import { loadStripe } from "@stripe/stripe-js";
import {
    Elements,
    linkAuthenticationElement,
    PaymentElement,
} from "@stripe/react-stripe-js";

const CheckoutPage = ({ clientSecret }) => {

    const stripe = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

    // Enable the skeleton loader UI for the optimal loading experience.
    const loader = 'auto';
    return (

        <Elements stripe={stripe} options={{ clientSecret, appearance, loader }}>
            <form>
                <h3>Contact info</h3>
                <linkAuthenticationElement />
                <h3>Payment</h3>
                <button type="submit">Submit</button>
            </form>
        </Elements>
    );


}

export default CheckoutPage;