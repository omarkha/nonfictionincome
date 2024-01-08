

import React, { useEffect, useState } from 'react'
import "../styles/productpage.css"
import book from "../media/book.png";
import visa from "../media/visa.png";
import mastercard from "../media/mastercard.png";
import americanexpress from "../media/americanexpress.png";
import paypal from "../media/paypal.png";
import Newsletter from '../components/NewsLetter';
import { AddCustomerSessionID, CustomerPurchaseSuccessful, AddCustomerEmail, AddCustomerName } from '../store/actions/userActions';
import { connect } from "react-redux"
import { useNavigate } from "react-router-dom";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

const ProductPage = (props) => {
    const createOrder = async () => {
        // replace this url with your server
        return await fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/create-order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // use the "body" param to optionally pass additional order information
            // like product ids and quantities
            body: JSON.stringify({
                cart: [
                    {
                        sku: "1blwyeo8",
                        quantity: 2,
                    },
                ],
            }),
        })
            .then((response) => response.json())
            .then((order) => {
                // Your code here after create the order
                return order.id;
            });
    }

    const navigate = useNavigate();

    const onApprove = async (data) => {
        // replace this url with your server
        return await fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/capture-order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                orderID: data.orderID,
            }),
        })
            .then((response) => response.json())
            .then((orderData) => {
                // Your code here after capture the order
                console.log(orderData)
                props.setSessionID(orderData.id)
                props.confirmPurchase()
                props.setCustomerEmail(orderData.payer.email_address)
                props.setCustomerName(orderData.payer.name.given_name)

            }).then(() => navigate("/purchase-successful"))

    }
    const style = { "layout": "vertical" };
    const [{ isPending }] = usePayPalScriptReducer();
    return (

        <div className='product-page'>

            <div className='main-promotion'>
                <div className='product-image' style={{ backgroundImage: `url(${book})` }} alt="book image" />
                <div className='info'>
                    <h6>MoneyStrikers</h6>
                    <h1>The Non-Fiction Income Method</h1>


                    <h4 className='package'>The eBook + Online Tools + Premium Membership</h4>
                    <h4 className='limitedtimeoffer'>Limited Time Offer</h4>
                    <div className='price'>

                        <h5>
                            <strike>$39.99 USD</strike>
                        </h5>
                        <h4>  $19.99 USD</h4>
                    </div>



                    {isPending ? <div className="spinner" /> : null}
                    <PayPalButtons disabled={false}
                        forceReRender={[style]}
                        fundingSource={undefined}
                        createOrder={createOrder}
                        onApprove={onApprove} />


                </div>

            </div><div className='copy'>
                <iframe className='video' width="610px" height="377px" src="https://www.youtube.com/embed/MlCkEl0DkDY?si=Bss5YsxeEu75wpwL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p>
                    Are you tired of waiting for your online business dreams to come true? With The Non-Fiction Income Method, you can start making money online right away without the need for years of study or training in entrepreneurship.
                </p>  <br /> <br />
                <h5>Quick and Tangible Results That Propell You To Financial Freedom</h5>
                <p>Imagine building your entire business blueprint in just one day. Our comprehensive guide provides you with the exact steps and strategies you need to kickstart your online business journey. No more wasting time on trial and error – get quick and tangible results that will boost your motivation and confidence from day one.</p>
                <br /> <br />
                <h5>The Archetypes of Psychographics For Laser-Focused Marketing</h5>
                <p >What sets The Non-Fiction Income Method apart is our unique psychographic approach to market research. Unlock valuable insights into your customers' psychology and gain a competitive advantage in your industry. Say goodbye to guesswork, and hello to targeted marketing strategies that actually work.</p>
                <br /> <br />
                <h5>Leveraging Artificial Intelligence For Maximum Results In Minimum Time</h5>
                <p > We also believe in leveraging the power of artificial intelligence to open new doors of opportunity for aspiring entrepreneurs. Discover how to harness the potential of AI to propel your online business to the next level, all while staying ahead of the curve.</p>
                <br /> <br />
                <h5>Enjoy The Journey By Exercising Your Creativity and Resourcefulness</h5>
                < p> The best part? You don't need a massive budget to succeed. With The Non-Fiction Income Method, you can start a 6-figure online company for less than $100. Learn how to leverage your creativity and resourcefulness to maximize your returns and minimize your investment.</p>
                <br /> <br />
                <h5>Short, Simple, and Concise, The eBook Offers You All You Need To Know</h5>
                < p> We understand that complex business concepts can be overwhelming, which is why we've made our guide easy to understand with clear and concise chapters. Plus, we provide you with market research templates that will shortcut your way to success.</p>
                <br /> <br />
                <h5>Use Our Business-Builder Online Tool</h5>
                < p> But that's not all! When you purchase The Non-Fiction Income Method, you'll also gain access to our online Business Builder tool. Plan, organize, and streamline your business activities for maximum efficiency and productivity.</p>
                <br /> <br />
                <h5>We Continue To Provide Services</h5>
                <p > And as a special bonus, you'll receive a premium membership to all of our current and future services for an entire year. Stay updated with the latest industry trends, tools, and strategies to ensure your continued success.</p>
                <br /> <br />
                <h5>Take Advantage of Our Launching Price</h5>
                < p>   Get your hands on The Non-Fiction Income Method today for only $19.99. That's right – the blueprint, tools, and premium membership, all for one affordable price.</p>
                <br /> <br />
                <p >  Don't wait any longer – take action now! Upon checkout, you'll receive immediate delivery of your products. Your journey to online success starts here.</p>
                <br /> <br />
                <h4> Invest in your future with<br /> The Non-Fiction Income Method.<br /> Get started today!</h4><br /> <br />
                <br />

                <br /><br /> <br />

                <h3><u>What You Get:</u></h3>
                <ul>
                    <li> The Non-Fiction Income Method: A practical shortcut to start making money online</li>
                    <li>  Build your entire business blueprint in just ONE day</li>
                    <li>  Gain quick and tangible results to increase motivation and confidence</li>
                    <li>   Unique psychographic approach to market research for a competitive advantage</li>
                    <li>   Leverage artificial intelligence for new entrepreneurial opportunities</li>
                    <li>  Start a 6-figure online company for less than $100</li>
                    <li>   Easy-to-understand chapters and market research templates provided</li>
                    <li>  EXTRA: Access to online Business Builder tool for effective business planning</li>
                    <li> EXTRA: Premium membership to current and future services for a year included</li>
                    <li>  Get the blueprint, tools, and membership for only $19.99</li>
                    <li>  Immediate delivery of your products upon checkout</li>

                </ul>
            </div>
            <Newsletter />
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
        setSessionID: (val) => dispatch(AddCustomerSessionID(val)),
        confirmPurchase: () => dispatch(CustomerPurchaseSuccessful()),
        setCustomerEmail: (val) => dispatch(AddCustomerEmail(val)),
        setCustomerName: (val) => dispatch(AddCustomerName(val)),
    }
}


export default connect(mapStateToProps, mapActionsToProps)(ProductPage)