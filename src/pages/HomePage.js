import React from 'react'
import "../styles/homepage.css"
import book from "../media/book.png";
import visa from "../media/visa.png";
import mastercard from "../media/mastercard.png";
import americanexpress from "../media/americanexpress.png";
import paypal from "../media/paypal.png";
import Newsletter from '../components/NewsLetter';

const HomePage = () => {
    return (
        <div className='home-page'>
            <div className='main-promotion'>
                <div className='product-image' style={{ backgroundImage: `url(${book})` }} alt="book image" />
                <div className='info'>
                    <h1>The Non-Fiction Income Method</h1>

                    <h3>
                        The conscise blueprint for rapidly creating small online businesses with less than $100!
                    </h3>
                    <h4 className='package'>Short eBook + Online tools</h4>
                    <hr /><h4 className='limitedtimeoffer'>limited time offer</h4>
                    <div className='price'>

                        <h5>
                            <strike>$29.99 USD</strike>
                        </h5>
                        <h4>  $14.99 USD</h4>
                    </div>
                    <button className='checkout-btn'>Check Out</button>
                    <div className='payment-method'>
                        <img src={visa} alt="visa logo" />
                        <img src={mastercard} alt="mastercard  logo" />
                        <img src={americanexpress} alt="americanexpress  logo" />
                        <img src={paypal} alt="payapl logo" />
                    </div>
                </div>
            </div>
            <Newsletter />
        </div>
    )
}

export default HomePage;