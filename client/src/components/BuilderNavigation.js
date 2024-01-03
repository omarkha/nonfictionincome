import React from 'react'
import "../styles/businessbuilder.css"
import { Link } from 'react-router-dom';

const BuilderNavigation = (props) => {

    return (
        <div className='business-builder-navigation'>
            <Link to="/business-builder/getting-started">
                <div className='builder-section' style={{ background: props.page == "getting_started" ? "#A01A1F" : "none", color: props.page == "getting_started" ? "#fff" : "#EA5849" }}>
                    Getting Started
                </div>
            </Link>
            <Link to="/business-builder/development">
                <div className='builder-section' style={{ background: props.page == "business_development" ? "#A01A1F" : "none", color: props.page == "business_development" ? "#fff" : "#EA5849" }}>
                    Business Development
                </div>
            </Link>
            <Link to="/business-builder/finishing-up">
                <div className='builder-section' style={{ background: props.page == "finishing_up" ? "#A01A1F" : "none", color: props.page == "finishing_up" ? "#fff" : "#EA5849" }}>
                    Finishing Up
                </div>
            </Link>
            <Link to="/business-builder/project-viewer">
                <div className='builder-section' style={{ background: props.page == "business_viewer" ? "#A01A1F" : "none", color: props.page == "business_viewer" ? "#fff" : "#EA5849" }}>
                    Project Document
                </div>
            </Link>
        </div>
    )
}

export default BuilderNavigation;