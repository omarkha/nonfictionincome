import React from 'react'
import "../styles/businessbuilder.css"
import { Link } from 'react-router-dom';

const BuilderNavigation = (props) => {

    return (
        <div className='business-builder-navigation'>
            <Link to="/business-builder/getting-started">
                <div className='builder-section' style={{ background: props.page == "getting_started" ? "#0DBD0A" : "none", color: props.page == "getting_started" ? "#fff" : "#212121" }}>
                    Getting Started
                </div>
            </Link>
            <Link to="/business-builder/development">
                <div className='builder-section' style={{ background: props.page == "business_development" ? "#0DBD0A" : "none", color: props.page == "business_development" ? "#fff" : "#212121" }}>
                    Business Development
                </div>
            </Link>
            <Link to="/business-builder/finishing-up">
                <div className='builder-section' style={{ background: props.page == "finishing_up" ? "#0DBD0A" : "none", color: props.page == "finishing_up" ? "#fff" : "#212121" }}>
                    Finishing Up
                </div>
            </Link>
        </div>
    )
}

export default BuilderNavigation;