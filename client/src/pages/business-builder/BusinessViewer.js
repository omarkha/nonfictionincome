import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import "../../styles/businessviewer.css"
import BuilderNavigation from '../../components/BuilderNavigation'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const BusinessViewer = (props) => {

    const [projectName, setProjectName] = useState("New Project");
    const navigate = useNavigate();
    const saveBusiness = async () => {
        await axios.post("http://localhost:3001/api/businesses", {
            project_name: projectName,
            final_customer: props.businessState.final_customer,
            final_product: props.businessState.final_product,
            final_usp: props.businessState.final_usp,
            final_mission_statement: props.businessState.final_mission_statement,
            interests: props.businessState.interests,
            customers: props.businessState.customers,
            motivations: props.businessState.motivations,
            struggles: props.businessState.struggles,
            values: props.businessState.values,
            specifications: props.businessState.specifications,
            products: props.businessState.products,
        })
    }


    return (
        <div className='business-viewer'>

            <div className='project-name'>
                <label>Project Name: </label>
                <input type='text' className='project-name-field' value={projectName} onChange={(e) => setProjectName(e.target.value)} placeholder='Project name' />
            </div>
            <button className='save-business-btn' onClick={() => saveBusiness()} >Save Business</button>
            <div className='control-buttons'>
                <button onClick={() => {
                    navigate("/business-builder/getting-started")
                }}>Edit</button><button>Delete</button>
            </div>
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
                        {props.businessState.products ? props.businessState.products.map(e => {
                            return (
                                <li><strong>{e.title + ". "}</strong> {e.description} </li>
                            )
                        }) : null}</ul>
                </div>
                <div className='finished-asset'>
                    <h3>  <u> Customer Values </u>  </h3><ul>
                        {props.businessState.values ? props.businessState.values.map(e => {
                            return (
                                <li><strong>{e.title + ". "}</strong> {e.description} </li>
                            )
                        }) : null}</ul>
                </div>
                <div className='finished-asset'>
                    <h3>  <u> Customer Motivations  </u></h3>
                    <ul>


                        {props.businessState.motivations ? props.businessState.motivations.map(e => {
                            return (
                                <li><strong>{e.title + ". "}</strong> {e.description} </li>
                            )
                        }) : null}</ul>
                </div>
                <div className="finished-asset">
                    <h3> <u>  Customer Struggles </u>  </h3><ul>
                        {props.businessState.struggles ? props.businessState.struggles.map(e => {
                            return (
                                <li><strong>{e.title + ". "}</strong> {e.description} </li>
                            )
                        }) : null}</ul>
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