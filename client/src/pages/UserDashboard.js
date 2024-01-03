import React, { useEffect, useState } from 'react'
import "../styles/userdashboard.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { connect } from 'react-redux'
import { auth } from "../config/firebase"
import { onAuthStateChanged } from 'firebase/auth'

const UserDashboard = (props) => {

    const [businesses, setBusinesses] = useState([])
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState("");

    const fetchBusinesses = async () => {


        console.log(userEmail)

        await axios.get("http://localhost:3001/api/users/email", { email: userEmail }).then(res => {
            console.log(res)
        })

        // const res = await axios.get("http://localhost:3001/api/businesses/email/", { email: props.userState.email, firebaseId: })
        // console.log(res)
        // setUser(res)

    }

    useEffect(() => {
        checkLoggedIn()
        fetchBusinesses()
    }, [])

    const checkLoggedIn = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserEmail(user.email)
            }
        });
    }

    return (
        <div className='user-dashboard'>
            <div className='user-info'>
                <h4>You're logged in as {userEmail}</h4>
            </div>

            <Link to="/business-builder/getting-started">
                <div className='tool'>
                    + New Business
                </div>
            </Link>

            <h3>Projects</h3>
            <div className='dashboard-projects'>
                {
                    businesses.map((e, i) => {

                        return (
                            <div className='dashboard-project'>
                                <h3>{e.project_name}</h3>
                                <h5>{e._id}</h5>
                                <p>{e.final_customer}</p>
                                <button className='view-project-btn' onClick={() => navigate("/business-builder/project-viewer")}>View Project</button>
                            </div>
                        )
                    })
                } </div>
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


export default connect(mapStateToProps, mapActionsToProps)(UserDashboard)