import { React, useEffect, useState } from 'react'
import "../styles/purchasesuccesspage.css"
import { connect } from "react-redux"
import { AddCustomerEmail, AddCustomerName, AddCustomerSessionID, CustomerPurchaseSuccessful } from '../store/actions/userActions'
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"


const PurchaseSuccessPage = (props) => {

    const { id } = useParams()
    const [allSessions, setAllSessions] = useState({});
    const idString = String.toString(id);
    const uri = window.location.origin === "http://localhost:3000" ? "http://localhost:3001" : window.location.origin;
    const consoleLogInfo = () => {
        axios.get(uri + "/api/retrieve-stripe-session").then(res => {
            setAllSessions(res.data)
            res.data.map((e, i) => {
                if (e.payment_status == "paid") {
                    props.customerPurchaseSuccessful();
                    props.customerEmail(e.customer_details.email)
                    props.customerSessionId(e.id)
                    props.customerName(e.customer_details.name)
                    setCustomerName(e.customer_details.name)

                }
            })
        }).catch((err) => {
            console.log(err)
            setError(true);
        })

    }

    const [customerName, setCustomerName] = useState("Customer")

    const [error, setError] = useState(false)

    const navigate = useNavigate();

    const navigateToSignUp = () => {
        navigate(`/sign-up/${id}`)
    }

    return (
        <div className='purchase-success-page'>
            <button onClick={() => consoleLogInfo()}>Console Log</button>
            <h2>Thanks for your order!</h2>
            <h4>Your payment is successful.</h4>
            <p className='thank-you-message'>
                Dear {customerName},
                <br /><br />
                Thank you so much for choosing our business blueprint package! We are thrilled to have you on board and excited to support you on your journey towards developing a successful business.
                <br /><br />
                Your purchase includes a short and concise eBook that will guide you through the process of creating your business blueprint. Additionally, you'll gain access to our powerful online tool, which will help you build and refine your blueprint with ease. We're also delighted to offer you a year's worth of premium membership to our business builder tool, ensuring that you have access to all future tools and services as they become available.
                <br /><br />
                We genuinely appreciate your trust in our company and are committed to providing you with exceptional support every step of the way. If you have any questions or need assistance, please don't hesitate to reach out to our friendly customer service team.
                <br /><br />
                Once again, thank you for choosing us. We can't wait to see your business thrive!
            </p>
            <hr />

            {
                error ? <h2>Our system encountered an error.<br />
                    Please contact customer support at copyresearcher@gmail.com.<br />
                    We promise to resolve this issue promptly.<br />
                    Provide the name and email address you used at checkout. <br />We apologize for this inconvenience.</h2> :
                    <button onClick={() => navigateToSignUp()}>Sign Up And Recieve Your Package!</button>}
        </div>
    )
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


export default connect(mapStateToProps, mapActionsToProps)(PurchaseSuccessPage)