import React, { useEffect, useState } from 'react'
import "../styles/userdashboard.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { connect } from 'react-redux'
import { auth } from "../config/firebase"
import { onAuthStateChanged } from 'firebase/auth'
import { AddCustomerEmail, AddCustomerSessionID, AddCustomerName, SignIn, SignOut, StartEditMode, StopEditMode, ResetBusiness } from '../store/actions/businessActions'
import { CustomerPurchaseSuccessful } from "../store/actions/userActions"
const UserDashboard = (props) => {

    const [businesses, setBusinesses] = useState([])
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState("");

    const fetchBusinesses = async () => {
        const uri = window.location.origin === "http://localhost:3000" ? "http://localhost:3001" : window.location.origin;
        const id = props.userState.user_id
        console.log(id)

        await axios.get(`${uri}api/businesses/owner/${id}`).then(res => {
            console.log(res)
            setBusinesses(res.data)
        })

        // const res = await axios.get("http://localhost:3001/api/businesses/email/", { email: props.userState.email, firebaseId: })
        // console.log(res)
        // setUser(res)

    }

    const handleNewBusiness = () => {
        props.resetBusiness()
        props.stopEditMode()
        navigate("/business-builder/getting-started")
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

    const handleEditMode = (tid) => {
        props.resetBusiness()
        props.startEditMode(tid)

        navigate("/business-builder/project-viewer")
    }

    return (
        <div className='user-dashboard'>
            <div className='user-info'>
                <h4>You're logged in as {userEmail}</h4>
            </div>


            <div className='tool' onClick={() => handleNewBusiness()}>
                + New Business
            </div>


            <h3>Projects</h3>

            <div className='dashboard-projects'>
                {
                    businesses?.map((e, i) => {

                        return (
                            <div className='dashboard-project'>
                                <h3>{e.project_name}</h3>

                                <p>{e.final_customer}</p>
                                <h6>{e.createdAt}</h6>
                                <button className='view-project-btn' onClick={() => handleEditMode(e._id)}>View Project</button>
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
        userState: state.user,
        businessState: state.business

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
        startEditMode: (id) => dispatch(StartEditMode(id)),
        stopEditMode: () => dispatch(StopEditMode()),
        resetBusiness: () => dispatch(ResetBusiness())
    }
}


export default connect(mapStateToProps, mapActionsToProps)(UserDashboard)