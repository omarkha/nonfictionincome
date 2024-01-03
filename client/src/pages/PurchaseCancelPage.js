import React from 'react'
import "../styles/purchasesuccesspage.css"
import { useNavigate } from 'react-router-dom'

const PurchaseCancelPage = () => {

    const navigate = useNavigate();

    return (
        <div className='purchase-cancel-page'>
            <h4>Oops! Your payment has been cancelled.</h4>
            <p>
                We appreciate your business! If you have any questions, please email us
                at
                <h4>copyresearcher@gmail.com</h4>
            </p>
            <div>
                <button onClick={() => navigate("/")}> Go to Home page</button>
            </div>
        </div>
    )
}

export default PurchaseCancelPage;