import React, { useEffect, useState } from 'react'
import "../styles/signuppage.css"
import { useNavigate, useParams } from "react-router-dom"
import { connect } from "react-redux"
import axios from "axios"
import { toast } from 'react-toastify'
import { auth } from '../config/firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { SignIn, SignOut } from '../store/actions/userActions'
const SignUpPage = (props) => {


    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const uri = window.location.origin === "http://localhost:3000" ? "http://localhost:3001" : window.location.origin;

    const navigate = useNavigate()
    useEffect(() => {
        checkLoggedIn()

    }, [])

    const checkLoggedIn = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                props.signIn();
                navigate("/dashboard")
            } else {
                props.signOut();
            }
        });
    }




    const [fbID, setfbID] = useState("");



    const handleSignUp = async (e) => {
        e.preventDefault();

        const emailValid = validateEmail(email);
        const passwordValid = validatePassword(password, confirmPassword);

        if (firstname.length > 1 && lastname.length > 1 && emailValid && passwordValid) {

            await createUserWithEmailAndPassword(auth, email, password).then((res) => {
                if (res.user.uid) { setfbID(res.user.uid); makeUserAccount(res.user.uid) }
            }).catch((err) => {

                if (err.code == "auth/email-already-in-use") {
                    toast.warn("The email you chose already has an account.")
                } else {
                    toast.warn("There was a problem with your email. Please try again, try to login, and/or use another email to sign up with.")
                }
            })



        }
    }


    const makeUserAccount = async (uid) => {

        const stripeSessionId = props.userState.session_id;
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const currentdate = [month, day, year].join('-');
        const expirationdate = [month, day, year + 1].join('-');

        await axios.post(`${uri}/api/users`, {
            first_name: firstname,
            last_name: lastname,
            stripe_session_id: stripeSessionId,
            email: email,
            user_firebase_id: uid,
            membership_sign_up_date: currentdate,
            membership_expiration_date: expirationdate
        }).then(res => {
            console.log("UserCreated")
            console.log(res)
        }).catch(error => {
            toast.warn("A problem occured during account creation on our servers.")
            console.log(error)
        })

    }

    const validatePassword = (first, second) => {
        if (first === second && first.length > 7) {
            return true
        } else {
            toast.warn("password must be at least 8 characters long and must match confirmation password.")
            return false

        }
    }

    const validateEmail = (emailaddress) => {

        let sQtext = '[^\\x0d\\x22\\x5c\\x80-\\xff]';
        let sDtext = '[^\\x0d\\x5b-\\x5d\\x80-\\xff]';
        let sAtom = '[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+';
        let sQuotedPair = '\\x5c[\\x00-\\x7f]';
        let sDomainLiteral = '\\x5b(' + sDtext + '|' + sQuotedPair + ')*\\x5d';
        let sQuotedString = '\\x22(' + sQtext + '|' + sQuotedPair + ')*\\x22';
        let sDomain_ref = sAtom;
        let sSubDomain = '(' + sDomain_ref + '|' + sDomainLiteral + ')';
        let sWord = '(' + sAtom + '|' + sQuotedString + ')';
        let sDomain = sSubDomain + '(\\x2e' + sSubDomain + ')*';
        let sLocalPart = sWord + '(\\x2e' + sWord + ')*';
        let sAddrSpec = sLocalPart + '\\x40' + sDomain; // complete RFC822 email address spec
        let sValidEmail = '^' + sAddrSpec + '$'; // as whole string

        let reValidEmail = new RegExp(sValidEmail);
        if (reValidEmail.test(emailaddress)) {
            return true
        } else {
            toast.warn("please make sure to enter your email correctly.")
            return false
        }

    }


    return (
        <div className='sign-up-page'>
            <form onSubmit={(e) => handleSignUp(e)}>
                <label>First Name: </label>
                <input type='text' value={firstname} placeholder='Steve' onChange={(e) => setFirstname(e.target.value)} />
                <label>Last Name: </label>
                <input type='text' value={lastname} placeholder='Johnson' onChange={(e) => setLastname(e.target.value)} />
                <label>Your Email: </label>
                <input type='email' value={email} placeholder='me@example.com' onChange={(e) => setEmail(e.target.value)} />
                <label>Your New Password: </label>
                <input type='password' value={password} placeholder='Enter your new password' onChange={(e) => setPassword(e.target.value)} />
                <label>Confirm Your Password: </label>
                <input type='password' value={confirmPassword} placeholder='Confirm your new password' onChange={(e) => setConfirmPassword(e.target.value)} />
                <button type="submit" onClick={(e) => handleSignUp(e)}>Sign Up</button>
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
        customerPurchaseSuccessful: () => dispatch(CustomerPurchaseSuccessful()),
        customerEmail: (email) => dispatch(AddCustomerEmail(email)),
        customerSessionId: (id) => dispatch(AddCustomerSessionID(id)),
        customerName: (name) => dispatch(AddCustomerName(name)),
        signIn: () => dispatch(SignIn()),
        signOut: () => dispatch(SignOut()),

    }
}


export default connect(mapStateToProps, mapActionsToProps)(SignUpPage)