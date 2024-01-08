import React from 'react'
import "../styles/components.css"
import { connect } from "react-redux"
const TopBanner = (props) => {
    return (
        <div style={{ display: props.userState.user_id ? "none" : "flex" }} className='topbanner'>Use Promocode "SAVE15" for 15% off 🔥</div>
    )
}

const mapStateToProps = (state) => {
    return {
        userState: state.user
    }
}

const mapActionsToProps = (dispatch) => {
    return {

    }
}


export default connect(mapStateToProps, mapActionsToProps)(TopBanner);