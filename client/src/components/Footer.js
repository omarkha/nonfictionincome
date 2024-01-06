import React from 'react'
import "../styles/components.css"
const Footer = () => {
    return (
        <footer>
            <div className='menu'>

                <ul><h4>Menu</h4>
                    <li>Home</li>
                    <li>Membership Area</li>
                    <li>About Us</li>
                    <li>Support</li>
                    <li>Terms of Service</li>
                </ul>
            </div>
            <p className='message'>
                <h4>Our Mission</h4>
                <p>IncomeStrikers strives to provide the vital assistance young entrepreneurs need in the beginning of their careers.</p>
            </p>
            <div className='logo'>

                <h3>
                    Income<span>Strikers</span>
                </h3>
                © 2023
            </div>
        </footer>
    )
}

export default Footer;