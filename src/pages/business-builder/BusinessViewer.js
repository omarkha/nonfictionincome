import React from 'react'
import { connect } from 'react-redux'
import "../../styles/businessviewer.css"
import BuilderNavigation from '../../components/BuilderNavigation'
const BusinessViewer = (props) => {
    return (
        <div className='business-viewer'>
            <BuilderNavigation page="business_viewer" />
            <div className='business-document'>

                <h1>Business Core</h1>

                <div className="finished-asset">
                    <h3><u>Unique Selling Proposition</u></h3>
                    <p>
                        {
                            props.businessState.final_usp
                        }
                    </p>
                </div>

                <div className="finished-asset">
                    <h3><u>Target Customers</u></h3>
                    <p>
                        {
                            props.businessState.final_customer
                        }
                    </p>
                </div>

                <div className="finished-asset">
                    <h3><u>  Mission Statement </u>  </h3>
                    <p>
                        {
                            props.businessState.final_mission_statement
                        }
                    </p>
                </div>

                <div className="finished-asset">
                    <h3> <u> First  Product </u>  </h3>
                    <p>
                        {
                            props.businessState.final_product
                        }
                    </p>
                </div>
                <hr />
                <div className='finished-asset'>
                    <h3>  <u> Potential Products </u>  </h3><ul>
                        {props.businessState.products.map(e => {
                            return (
                                <li><strong>{e.title + ". "}</strong> {e.description} </li>
                            )
                        })}</ul>
                </div>
                <div className='finished-asset'>
                    <h3>  <u> Customer Values </u>  </h3><ul>
                        {props.businessState.values.map(e => {
                            return (
                                <li><strong>{e.title + ". "}</strong> {e.description} </li>
                            )
                        })}</ul>
                </div>
                <div className='finished-asset'>
                    <h3>  <u> Customer Motivations  </u></h3>
                    <ul>


                        {props.businessState.motivations.map(e => {
                            return (
                                <li><strong>{e.title + ". "}</strong> {e.description} </li>
                            )
                        })}</ul>
                </div>
                <div className="finished-asset">
                    <h3> <u>  Customer Struggles </u>  </h3><ul>
                        {props.businessState.struggles.map(e => {
                            return (
                                <li><strong>{e.title + ". "}</strong> {e.description} </li>
                            )
                        })}</ul>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        businessState: state
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        selectInterests: () => dispatch(SelectInterests()),
        selectCustomers: () => dispatch(SelectCustomers()),
        addInterest: (newInterest) => dispatch(AddInterest(newInterest)),
        removeInterest: (index) => dispatch(DeleteInterest(index)),
        updateInterest: (index) => dispatch(UpdateInterest(index)),
        addCustomer: (newCustomer) => dispatch(AddCustomer(newCustomer)),
        removeCustomer: (index) => dispatch(DeleteCustomer(index)),
        updateCustomer: (index) => dispatch(UpdateCustomer(index)),
    }
}


export default connect(mapStateToProps, mapActionsToProps)(BusinessViewer)