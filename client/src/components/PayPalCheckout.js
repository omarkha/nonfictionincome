import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux"
import { AddCustomerEmail, AddCustomerName, AddCustomerSessionID, CustomerPurchaseSuccessful } from '../store/actions/userActions'

function PayPalCheckout() {
    const paypal = useRef();
    const [transactionStatus, setTransactionStatus] = useState(null);
    const [transactionId, setTransactionId] = useState("");
    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions, err) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: "MacBook Laptop",
                                amount: {
                                    currency_code: "USD",
                                    value: 350.00,
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();

                    console.log("success", order);
                    setTransactionStatus("success");
                },
                onError: (err) => {
                    console.log(err);
                    setTransactionStatus("failure");
                },
            })
            .render(paypal.current);
    }, []);

    if (transactionStatus === "success") {

    }

    if (transactionStatus === "failure") {
        navigate(`/purchase-canceled`);
    }

    const navigate = useNavigate();

    return (
        <div>
            <div ref={paypal}></div>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        userState: state.user
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        customerPurchaseSuccessful: () => dispatch(CustomerPurchaseSuccessful()),
        customerEmail: (email) => dispatch(AddCustomerEmail(email)),
        customerSessionId: (id) => dispatch(AddCustomerSessionID(id)),
        customerName: (name) => dispatch(AddCustomerName(name))
    }
}


export default connect(mapStateToProps, mapActionsToProps)(PayPalCheckout);