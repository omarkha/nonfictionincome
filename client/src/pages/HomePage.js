import React from 'react'
import "../styles/homepage.css"
import book from "../media/book.png";
import visa from "../media/visa.png";
import mastercard from "../media/mastercard.png";
import americanexpress from "../media/americanexpress.png";
import paypal from "../media/paypal.png";
import Newsletter from '../components/NewsLetter';
import frontbanner from "../media/homebanner4.png"
import { useNavigate } from 'react-router-dom';


const HomePage = () => {

    const navigate = useNavigate()

    return (
        <div className='home-page'>
            <div className='front-section' style={{ backgroundImage: `url(${frontbanner})` }}>
                <div className='usp_and_cta'>
                    <p className='usp'>
                        Reach Financial Freedom Earlier!
                    </p>
                    <button className='cta-btn' onClick={() => navigate("/product")}>Shortcut The Journey</button>
                </div>
            </div>

            <div className='home-copy'>

                <h3>The Non-Fiction Income Method</h3><br /><br />
                <p>
                    Are you tired of waiting for the perfect moment to start making money online? Look no further. We believe that everyone deserves the opportunity to achieve financial freedom, regardless of their background or expertise in entrepreneurship. That's why we've created The Non-Fiction Income Method - the ultimate practical shortcut to kickstart your rewarding entrepreneurial journey right away.
                </p><br /><br />
                <h5>Get To Action FAST</h5>
                <p>
                    Our actionable package empowers you to build your entire online business within just ONE day. Say goodbye to the frustrations of slow progress and hello to quick, tangible results. The Non-Fiction Income Method is designed to motivate you, boost your confidence, and propel you towards your dreams.
                </p>
                <br /><br />
                <h5>Choose Your Perfect Customers</h5>
                <p>
                    One of the biggest challenges for small business owners is market research. But with The Non-Fiction Income Method, you won't have to struggle anymore. We'll share our unique psychographic approach to market research, giving you deep insights into your customer's psychology and the strategy to profit from your findings. Our eBook will equip you with a competitive advantage to conquer markets.
                </p>
                <br /><br />
                <h5>Use Our Online Tool</h5>
                <p>
                    But we don't stop there. We understand that an eBook alone might limit your potential. That's why we offer more than just knowledge. With The Non-Fiction Income Method, you'll gain access to our online business builder tool. This comprehensive tool provides step-by-step guidance, ready-made templates, and valuable resources to streamline your business setup process. Whether you're a beginner or an experienced entrepreneur, our tool will save you time and effort, allowing you to focus on what truly matters - growing your business.
                </p>
                <br /><br />
                <h5>The Gift That Keeps Giving</h5>
                <p>
                    And that's not all. When you join The Non-Fiction Income Method, you become part of our premium membership community. Connect with like-minded individuals who share your entrepreneurial drive. Seek advice, collaborate, and inspire each other on your journey towards financial freedom. Together, we'll create an unstoppable force of motivated entrepreneurs, supporting and pushing each other to achieve greatness.
                </p>
                <br /><br />
                <h5>Are You Ready For REAL Income?</h5>
                <p>
                    Don't let another day go by without taking action. It's time to unlock your true potential with The Non-Fiction Income Method. Start your journey towards financial freedom today and turn your entrepreneurial dreams into reality. Join us now and let's make your success story a reality.
                </p><br />
                <button className='cta-btn' onClick={() => navigate("/product")}>Learn The Non-Fiction Income Method</button>
            </div>
            <Newsletter />
        </div >
    )
}

export default HomePage;