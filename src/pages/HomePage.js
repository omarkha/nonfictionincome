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
                        Create Small Online Businesses With Less Than $100
                    </h3>
                    <h4 className='package'>Short eBook + Online Tools + Premium Membership</h4>
                    <hr /><h4 className='limitedtimeoffer'>limited time offer</h4>
                    <div className='price'>

                        <h5>
                            <strike>$39.99 USD</strike>
                        </h5>
                        <h4>  $19.99 USD</h4>
                    </div>
                    <button className='checkout-btn'>Check Out</button>
                    <div className='payment-method'>
                        <img src={visa} alt="visa logo" />
                        <img src={mastercard} alt="mastercard  logo" />
                        <img src={americanexpress} alt="americanexpress  logo" />
                        <img src={paypal} alt="payapl logo" />
                    </div>
                </div>

            </div><p className='copy'>
                You can't afford to wait a lifetime to start making money online. Don't worry.
                You don't have to be a scholar of entrepreneuship to reach financial freedom.
                <br /><br />
                <strong>The Non-Fiction Income Method</strong> empowers you with <strong>the ultimate practical shortcut</strong> to start rewarding entrepreneurial endeavors, right away.
                <br /><br />
                Lack of results at the beginning of their careers stops most entrepreneurs from reaching their full potential.
                <br /><br />
                This actionable package enables you to <strong>build your entire online business within only <u> ONE day</u>.</strong>
                <br /><br />
                The quick tangible results that The Non-Fiction Income Method gives you will motivate you, increase your confidence, and push you towards your dreams.
                <br /><br />
                Most small business owners struggle with market research the most.
                <br /><br />
                But you won't.
                <br /><br />
                We share our <strong>unique psychographic approach to market research</strong> that gives you insights into your customer's psychology and the strategy to profit from your findings.
                <br /><br />
                The marketing research method taught in this eBook gives you the competitve advantage to conquer markets.

                <br /><br />
                But doesn't starting a business cost a lot of money?
                <br /><br />
                The rise of artificial intelligence creates new possibilities for aspiring entrepreneurs.
                <br /><br />
                Our guide gives you entrepreneurial gems and the essential information you need to capitalize on these new opportunities.
                <br /><br />
                It takes money to make money.
                <br /><br />
                But when you leverage your creativity and resourcefulness, it'll take you less than $100 to start a 6-figure online company.
                <br /><br />
                The <strong> few and short chapters</strong>  make this guide <u>easy to get through and understand.</u>
                <br /><br />
                The eBook, also, provides you with small question templates for shortcutting lots of market research for you.
                <br /><br />
                The Non-Fiction Income Method is your blueprint to create the company of your dreams ASAP.
                <br /><br />
                NOT ONLY THAT!
                <br /><br />
                When you buy The Non-Fiction Income Method you also get <u>ACCESS</u> to our <strong>online Business Builder
                    tool</strong> that helps you plan out and organize your business quicker and more effectively.
                <br /><br />
                AND ALSO..
                <br /><br />
                When you buy The Method, now, you get Premium Membership to all of our current and future service for an ENTIRE YEAR.
                <br /><br />get the blueprint to creating online businesses along with our online tools and premium membership for only $19.99.<br /><br /><br />

                Enter Promo Code "Save15," right now, and get 15% off The Non-Fiction Income Method!<br /> <br /><span className='cta'>Click the 'Check Out' button and get your products delivered immediately!</span>
                <br />

                <br /><br /> <br />
                <div className='copy-checkout'>
                    Limited Time Offer
                    <div className='price'>

                        <h5>
                            <strike>$49.99 USD</strike>
                        </h5>
                        <h4>  $19.99 USD</h4>
                    </div>

                    <button className='checkout-btn'>Check Out</button>
                    <div className='payment-method'>
                        <img src={visa} alt="visa logo" />
                        <img src={mastercard} alt="mastercard  logo" />
                        <img src={americanexpress} alt="americanexpress  logo" />
                        <img src={paypal} alt="payapl logo" />
                    </div>
                </div>

            </p>
            <Newsletter />
        </div>
    )
}

export default HomePage;