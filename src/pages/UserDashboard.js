import React from 'react'
import "../styles/userdashboard.css"
import { Link } from 'react-router-dom'
const UserDashboard = () => {
    return (
        <div className='user-dashboard'>


            <Link to="/business-builder/getting-started">
                <div className='tool'>
                    Business Builder
                </div>
            </Link>

            <h3>Projects</h3>
            <hr />
        </div>
    )
}

export default UserDashboard