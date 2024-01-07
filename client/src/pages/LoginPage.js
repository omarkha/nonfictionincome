import React, { useState } from 'react'
import "../styles/login_signup.css"
import { useNavigate } from 'react-router-dom'
import { auth } from "../config/firebase"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import { SignIn, SignOut } from "../store/actions/userActions"

const LoginPage = (props) => {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === "auth/invalid-credential") {
                    toast.warn("No account associated with the email you entered.")
                }
                console.log(errorCode + " ////// " + errorMessage)
            });
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <div className='login-page'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Email: </label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password: </label>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <div className='buttons'>
                    <button type='submit' >Login</button>
                    <button onClick={() => props.userState.session_id ? navigate("/sign-up/" + props.userState.session_id) : navigate("/product")}>{props.userState.session_id ? "Sign Up" : "Get Access"}</button>
                </div>
            </form>
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
        signIn: () => dispatch(SignIn()),
        signOut: () => dispatch(SignOut()),

    }
}



export default connect(mapStateToProps, mapActionsToProps)(LoginPage);