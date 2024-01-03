import React, { useEffect, useState } from 'react'
import "../styles/components.css"
import { Link } from 'react-router-dom';
import { auth } from "../config/firebase"
import { onAuthStateChanged, signOut } from 'firebase/auth'

const NavBar = (props) => {


    useEffect(() => { checkLoggedIn() }, [])

    const handleSignOut = () => {
        signOut(auth).then((res) => {
            console.log(res)
            setIsSignedIn(false)
        }).catch(function (error) {
            console.log(error);

        });
    }

    const [isSignedIn, setIsSignedIn] = useState(false)

    const checkLoggedIn = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user)

                setIsSignedIn(true)
            } else {

                setIsSignedIn(false)
            }
        });
    }



    return (
        <nav className='navbar'>
            <Link to="/"> <h1>Money<span>Strikers</span></h1></Link>
            <ul>
                <Link to="/product"> <li>The Non-Fiction Income Method</li> </Link>

                {isSignedIn ? <Link to={"/dashboard"}>  <li>Member Dashboard</li> </Link> : null}
                {isSignedIn ? <li id="sign-out-btn" onClick={() => handleSignOut()} >Sign Out</li> : <Link to="/login">  <li>Sign In</li> </Link>}
            </ul>
        </nav>
    )
}




export default NavBar;