import React, { useEffect, useState } from 'react'
import "../styles/userdashboard.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { connect } from 'react-redux'
import { auth } from "../config/firebase"
import { onAuthStateChanged } from 'firebase/auth'
import { StartEditMode, StopEditMode, ResetBusiness } from '../store/actions/businessActions'
import { AddCustomerEmail, AddCustomerSessionID, AddCustomerName, SignIn, SignOut, CustomerPurchaseSuccessful, SetUserID } from "../store/actions/userActions"
const UserDashboard = (props) => {

    const [businesses, setBusinesses] = useState([])
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState("");
    const uri = window.location.origin === "http://localhost:3000" ? "http://localhost:3001" : window.location.origin;


    const fetchBusinesses = async () => {
        await axios.get(`${uri}/api/businesses/owner/${props.userState.user_id}`).then(res => {
            console.log(res)
            if (res.data[0]._id) {
                setBusinesses(res.data)
            }

        }).catch((err) => { console.log(err); setLoaded(false) })
    }

    const handleNewBusiness = () => {
        props.resetBusiness()
        props.stopEditMode()
        navigate("/business-builder/getting-started")
    }

    useEffect(() => {
        checkLoggedIn()

    }, [])

    const checkLoggedIn = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserEmail(user.email)
                fetchBusinesses()
            }
        });
    }

    const [loaded, setLoaded] = useState(false)

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
            <button onClick={() => setLoaded(true)}>Load Businesses</button>
            <div className='dashboard-projects'>
                {loaded ?
                    businesses?.map((e, i) => {

                        return (
                            <div className='dashboard-project'>
                                <h3>{e.project_name}</h3>

                                <p>{e.final_customer}</p>
                                <h6>{e.createdAt}</h6>
                                <button className='view-project-btn' onClick={() => handleEditMode(e._id)}>View Project</button>
                            </div>
                        )
                    }) : null
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
        resetBusiness: () => dispatch(ResetBusiness()),
        setUserID: (id) => dispatch(SetUserID(id)),

    }
}


export default connect(mapStateToProps, mapActionsToProps)(UserDashboard)