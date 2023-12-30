import React from 'react'
import "../styles/components.css"
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav className='navbar'>
            <Link to="/"> <h1>Money<span>Strikers</span></h1></Link>
            <ul>
                <Link to="/"> <li>The Non-Fiction Income Method</li> </Link>
                <Link to="/login">   <li>Members Area</li></Link>
                <Link to="/contact">  <li>Contact Us</li> </Link>
            </ul>
        </nav>
    )
}

export default NavBar;