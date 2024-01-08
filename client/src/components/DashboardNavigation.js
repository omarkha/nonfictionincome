import React from 'react'

const DashboardNavigation = (props) => {
    return (
        <div className='dashboard-navigation'>
            <div className='nav-items'>
                <div className='nav-item'>
                    Settings
                </div>
                <div className='nav-item'>
                    Information
                </div>
                <div className='nav-item'>
                    Your Businesses
                </div>
                <div className='nav-item'>
                    Create Business
                </div>


            </div>
            <h4>Welcome Back! you're logged in as {props.email}</h4>
        </div>
    )
}

export default DashboardNavigation;