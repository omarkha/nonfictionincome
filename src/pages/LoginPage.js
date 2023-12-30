import React from 'react'
import "../styles/login_signup.css"

const LoginPage = () => {
    return (
        <div className='login-page'>
            <form>
                <label>Email: </label>
                <input type='email' />
                <label>Password: </label>
                <input type='password' />
                <button type='submit' >Login</button>
            </form>
        </div>
    )
}

export default LoginPage;