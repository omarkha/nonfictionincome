import React from 'react'
import "../styles/components.css"

const NewsLetter = () => {

    const handleSubscribe = (e) => {
        e.preventDefault();
    }

    return (
        <form className='newsletter' onSubmit={(e) => handleSubscribe(e.target)}>
            <h4>Subscribe for more money-making tips and tricks</h4>
            <input type="email" placeholder='Enter your email...' />
            <button type='submit'>Subscribe</button>
        </form>
    )
}

export default NewsLetter;