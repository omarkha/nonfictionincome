import React from 'react'

const ConfirmationBox = (props) => {


    return (
        <div className='confirmation-box-container'>
            <div className='confirmation-box'>
                <p className='message'>{props.message}</p>
                <button onClick={() => props.handleConfirmed(true)}>{props.action}</button><button onClick={() => props.handleConfirmed(false)}>Cancel</button>
            </div>
            </div>
    )
}

export default ConfirmationBox;