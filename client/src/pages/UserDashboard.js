import React, { useEffect, useState } from 'react'
import "../styles/userdashboard.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { connect } from 'react-redux'
import { auth } from "../config/firebase"
import { onAuthStateChanged } from 'firebase/auth'
import { StartEditMode, StopEditMode, ResetBusiness } from '../store/actions/businessActions'
import { AddCustomerEmail, AddCustomerSessionID, AddCustomerName, SignIn, SignOut, CustomerPurchaseSuccessful, SetUserID, SetNumberOfBusinesses } from "../store/actions/userActions"
import DashboardNavigation from '../components/DashboardNavigation'
import { toast } from 'react-toastify'
const UserDashboard = (props) => {

    const [businesses, setBusinesses] = useState([])
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState("");
    const uri = window.location.origin === "http://localhost:3000" ? "http://localhost:3001" : window.location.origin;

    const fetchUserId = async (fireid) => {
        await axios.get(`${uri}/api/users/firebase/${fireid}`).then(res => { console.log(res); console.log(res.data[0]._id); props.setUserID(res.data[0]._id) }).then(() => fetchBusinesses()).catch(err => console.log(err))
    }

    const fetchBusinesses = async () => {
        await axios.get(`${uri}/api/businesses/owner/${props.userState.user_id}`).then(res => {
            console.log(res)
            if (res.data[0]._id) {
                setBusinesses(res.data)
                props.setNumberOfBusinesses(res.data.length)
            }

        }).catch((err) => { console.log(err); loadBusinesses(false) })
    }

    const handleNewBusiness = () => {
        if (businesses.length < 20) {


            props.resetBusiness()
            props.stopEditMode()
            navigate("/business-builder/getting-started")
        } else {
            toast.warn("You've reached the amount of businesses you can create which is 20 businesses.")
        }
    }

    useEffect(() => {
        checkLoggedIn()

    }, [])

    const checkLoggedIn = () => {
        onAuthStateChanged(auth, (user, data) => {
            if (user) {
                fetchUserId(user.uid)
                setUserEmail(user.email)
            }
        });
    }

    const [loadBusinesses, setLoadBusinesses] = useState(false)

    const handleEditMode = (tid) => {
        props.resetBusiness()
        props.startEditMode(tid)

        navigate("/business-builder/project-viewer")
    }

    return (
        <div className='user-dashboard'>
            <div className='dashboard-navigation'>
                <div className='nav-items'>
                    <div className='nav-item'>
                        Settings
                    </div>
                    <div className='nav-item'>
                        Information
                    </div>
                    <div className='nav-item' onClick={() => setLoadBusinesses(true)}>
                        Your Businesses
                    </div>
                    <div className='nav-item' onClick={() => handleNewBusiness()}>
                        Create Business
                    </div>


                </div>
                <h4>Welcome Back! you're logged in as {userEmail}</h4>
            </div>
            <div className='dashboard-projects'>
                {loadBusinesses ?
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
        setNumberOfBusinesses: (num) => dispatch(SetNumberOfBusinesses(num))
    }
}


export default connect(mapStateToProps, mapActionsToProps)(UserDashboard)