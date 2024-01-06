import React from 'react'
import "../styles/businessbuilder.css"
import { Link } from 'react-router-dom';

const BuilderNavigation = (props) => {

    return (
        <div className='business-builder-navigation'>
            <Link to="/business-builder/getting-started">
                <div className='builder-section' style={{ background: props.page == "getting_started" ? "#0ABDBA" : "none", color: props.page == "getting_started" ? "#fff" : "#0ABDBA" }}>
                    Getting Started
                </div>
            </Link>
            <Link to="/business-builder/development">
                <div className='builder-section' style={{ background: props.page == "business_development" ? "#0ABDBA" : "none", color: props.page == "business_development" ? "#fff" : "#0ABDBA" }}>
                    Business Development
                </div>
            </Link>
            <Link to="/business-builder/finishing-up">
                <div className='builder-section' style={{ background: props.page == "finishing_up" ? "#0ABDBA" : "none", color: props.page == "finishing_up" ? "#fff" : "#0ABDBA" }}>
                    Finishing Up
                </div>
            </Link>
            <Link to="/business-builder/project-viewer">
                <div className='builder-section' style={{ background: props.page == "business_viewer" ? "#0ABDBA" : "none", color: props.page == "business_viewer" ? "#fff" : "#0ABDBA" }}>
                    Project Document
                </div>
            </Link>
        </div>
    )
}

export default BuilderNavigation;