

import React, { useState } from 'react'
import "../styles/productpage.css"
import book from "../media/book.png";
import visa from "../media/visa.png";
import mastercard from "../media/mastercard.png";
import americanexpress from "../media/americanexpress.png";
import paypal from "../media/paypal.png";
import Newsletter from '../components/NewsLetter';
import TopBanner from '../components/TopBanner';
import { loadStripe } from "@stripe/stripe-js";
import { AddCustomerSessionID } from '../store/actions/userActions';
import { connect } from "react-redux"
import { Typography } from '@material-ui/core';

const ProductPage = (props) => {

    const [product, setProduct] = useState({
        name: "The Non-Fiction Income Method",
        price: 20,
        productOwner: "MoneyStrikers",
        description: "This beginner-friendly Entrepreneurial package offers an eBook and online tools to help aspiring entrepreneurs create successful businesses.",
        quantity: 1,
    });

    const makePayment = async () => {
        const stripe = await loadStripe("pk_test_51LewmOI2yKOXdLkUzVSbdvYkWrYEWhOEddbatpR5JQADPpaU0m1dfSlSzbBspKbieJc5yTne1u8LsiZkcS9ikNsu00DO4hAF3b");
        const body = { product }
        const headers = {
            "Content-Type": "application/json",
        };
        const uri = window.location.origin === "http://localhost:3000" ? "http://localhost:3001" : window.location.origin;
        const response = await fetch(
            `${uri}/api/create-checkout-session`,
            {
                method: "POST",
                headers: headers,
                body: JSON.stringify(product),
            }
        );

        const session = await response.json();

        await props.setSessionID(session.id)

        const result = stripe.redirectToCheckout({
            sessionId: session.id,
        });
        console.log("result: " + result)
        if (result.error) {
            console.log(result.error);
        }
    };

    return (
        <div className='product-page'>

            <div className='main-promotion'>
                <div className='product-image' style={{ backgroundImage: `url(${book})` }} alt="book image" />
                <div className='info'>
                    <h6>MoneyStrikers</h6>
                    <Typography variant="h1">The Non-Fiction Income Method</Typography>


                    <h4 className='package'>The eBook + Online Tools + Premium Membership</h4>

                    <div className='price'>

                        <h5>
                            <strike>$39.99 USD</strike>
                        </h5>
                        <h4>  $19.99 USD</h4>
                    </div>
                    <button className='checkout-btn' onClick={() => makePayment()}>Buy Now</button>
                    <h4 className='limitedtimeoffer'>Limited Time Offer</h4>
                    <div className='payment-method'>
                        <img src={visa} alt="visa logo" />
                        <img src={mastercard} alt="mastercard  logo" />
                        <img src={americanexpress} alt="americanexpress  logo" />
                        <img src={paypal} alt="payapl logo" />
                    </div>
                </div>

            </div><div className='copy'>
                <iframe width="610px" height="377px" src="https://www.youtube.com/embed/MlCkEl0DkDY?si=Bss5YsxeEu75wpwL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <Typography paragraph>
                    Are you tired of waiting for your online business dreams to come true? With The Non-Fiction Income Method, you can start making money online right away without the need for years of study or training in entrepreneurship.
                </Typography>  <br /> <br />
                <Typography variant="h5">Quick and Tangible Results That Propell You To Financial Freedom</Typography>
                <Typography paragraph>Imagine building your entire business blueprint in just one day. Our comprehensive guide provides you with the exact steps and strategies you need to kickstart your online business journey. No more wasting time on trial and error – get quick and tangible results that will boost your motivation and confidence from day one.</Typography>
                <br /> <br />
                <Typography variant="h5">The Archetypes of Psychographics For Laser-Focused Marketing</Typography>
                <Typography paragraph>What sets The Non-Fiction Income Method apart is our unique psychographic approach to market research. Unlock valuable insights into your customers' psychology and gain a competitive advantage in your industry. Say goodbye to guesswork, and hello to targeted marketing strategies that actually work.</Typography>
                <br /> <br />
                <Typography variant="h5">Leveraging Artificial Intelligence For Maximum Results In Minimum Time</Typography>
                <Typography paragraph> We also believe in leveraging the power of artificial intelligence to open new doors of opportunity for aspiring entrepreneurs. Discover how to harness the potential of AI to propel your online business to the next level, all while staying ahead of the curve.</Typography>
                <br /> <br />
                <Typography variant="h5">Enjoy The Journey By Exercising Your Creativity and Resourcefulness</Typography>
                <Typography paragraph> The best part? You don't need a massive budget to succeed. With The Non-Fiction Income Method, you can start a 6-figure online company for less than $100. Learn how to leverage your creativity and resourcefulness to maximize your returns and minimize your investment.</Typography>
                <br /> <br />
                <Typography variant="h5">Short, Simple, and Concise, The eBook Offers You All You Need To Know</Typography>
                <Typography paragraph> We understand that complex business concepts can be overwhelming, which is why we've made our guide easy to understand with clear and concise chapters. Plus, we provide you with market research templates that will shortcut your way to success.</Typography>
                <br /> <br />
                <Typography variant="h5">Use Our Business-Builder Online Tool</Typography>
                <Typography paragraph> But that's not all! When you purchase The Non-Fiction Income Method, you'll also gain access to our online Business Builder tool. Plan, organize, and streamline your business activities for maximum efficiency and productivity.</Typography>
                <br /> <br />
                <Typography variant="h5">We Continue To Provide Services</Typography>
                <Typography paragraph> And as a special bonus, you'll receive a premium membership to all of our current and future services for an entire year. Stay updated with the latest industry trends, tools, and strategies to ensure your continued success.</Typography>
                <br /> <br />
                <Typography variant="h5">Take Advantage of Our Launching Price</Typography>
                <Typography paragraph>   Get your hands on The Non-Fiction Income Method today for only $19.99. That's right – the blueprint, tools, and premium membership, all for one affordable price.</Typography>
                <br /> <br />
                <Typography paragraph>  Don't wait any longer – take action now! Upon checkout, you'll receive immediate delivery of your products. Your journey to online success starts here.</Typography>
                <br /> <br />
                <Typography variant="h4"> Invest in your future with<br /> The Non-Fiction Income Method.<br /> Get started today!</Typography><br /> <br />
                <br />

                <br /><br /> <br />
                <div className='copy-checkout'>
                    <h4>Limited Time Offer</h4>
                    <div className='price'>

                        <h5>
                            <strike>$49.99 USD</strike>
                        </h5>
                        <h4>  $19.99 USD</h4>
                    </div>

                    <button className='checkout-btn'>Buy Now</button>
                    <div className='payment-method'>
                        <img src={visa} alt="visa logo" />
                        <img src={mastercard} alt="mastercard  logo" />
                        <img src={americanexpress} alt="americanexpress  logo" />
                        <img src={paypal} alt="payapl logo" />
                    </div>
                </div>
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
        businessState: state.user
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        setSessionID: () => dispatch(AddCustomerSessionID()),

    }
}


export default connect(mapStateToProps, mapActionsToProps)(ProductPage)