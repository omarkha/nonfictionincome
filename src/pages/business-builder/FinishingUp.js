import React, { useEffect, useState } from 'react'
import BuilderNavigation from '../../components/BuilderNavigation';
import "../../styles/finishingup.css"
import { AddFinalCustomer, AddFinalMissionStatemet, AddFinalProduct, AddFinalUSP, DeleteFinalCustomer, DeleteFinalMissionStatemet, DeleteFinalProduct, DeleteFinalUSP, UpdateFinalCustomer, UpdateFinalMissionStatemet, UpdateFinalProduct, UpdateFinalUSP } from '../../store/actions/businessActions';
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";


const FinishingUp = (props) => {
    const navigate = useNavigate();
    const [product, setProduct] = useState("");
    const [mission, setMission] = useState("");
    const [usp, setUsp] = useState("");
    const [customer, setCustomer] = useState("");




    const generateBusiness = () => {
        props.addFinalCustomer(customer)
        props.addFinalMissionStatement(mission)
        props.addFinalProduct(product)
        props.addFinalUsp(usp)
        navigate("/business-builder/project-viewer");
    }

    useEffect(() => {
        populateFields()
    }, [])

    const populateFields = () => {
        setCustomer(props.businessState.final_customer)
        setProduct(props.businessState.final_product)
        setMission(props.businessState.final_mission_statement)
        setUsp(props.businessState.final_usp)
    }

    return (
        <div className='finishing-up'>
            <BuilderNavigation page="finishing_up" />
            <div className='builder-body'>

                <div className='area-view'>
                    <div className='asset'>
                        <h4>Who's your Target Customer? include demographics and psychographics.</h4>
                        <textarea placeholder={"Refer back to identifying CUSTOMERS and SPECIFICATIONS"} value={customer} onChange={(e) => setCustomer(e.target.value)}>{customer}</textarea>
                    </div>
                    <div className='asset'>
                        <h4>What's your product?</h4>
                        <textarea placeholder={"Refer back to PRODUCTS and select the most profitable one and describe how does it solve your unique customer's pain-points."} value={product} onChange={(e) => setProduct(e.target.value)}>{product}</textarea>
                    </div>
                    <div className='asset'>
                        <h4>What's your Unique Selling Proposition? </h4>
                        <textarea placeholder={"What does your product promise your specific customer based on their Struggles, Values, and Motivations?"} value={usp} onChange={(e) => setUsp(e.target.value)}>{usp}</textarea>
                    </div>
                    <div className='asset'>
                        <h4>What's your company's Mission Statement? </h4>
                        <textarea placeholder={"Look at your Target Customer, their VALUES, and their STRUGGLES"} value={mission} onChange={(e) => setMission(e.target.value)}>{mission}</textarea>
                    </div>

                </div><div className='areas'>
                    <div className="finished-asset">
                        <h3> <u> Customer Specifications </u>  </h3><ul>
                            {props.businessState.specifications.map(e => {
                                return (
                                    <li><strong>{e.title + ". "}</strong> {e.description} </li>
                                )
                            })}</ul>
                    </div>

                    <div className="finished-asset">

                        <h3> <u> Potential Products </u>  </h3><ul>
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
            </div><button className='generate-business-btn' onClick={() => generateBusiness()}>Generate Your Business</button>
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

        addFinalProduct: (val) => dispatch(AddFinalProduct(val)),
        removeFinalProduct: (index) => dispatch(DeleteFinalProduct(index)),
        updateFinalProduct: (obj) => dispatch(UpdateFinalProduct(obj)),

        addFinalUsp: (val) => dispatch(AddFinalUSP(val)),
        removeFinalUsp: (index) => dispatch(DeleteFinalUSP(index)),
        updateFinalUsp: (obj) => dispatch(UpdateFinalUSP(obj)),

        addFinalCustomer: (val) => dispatch(AddFinalCustomer(val)),
        removeFinalCustomer: (index) => dispatch(DeleteFinalCustomer(index)),
        updateFinalCustomer: (obj) => dispatch(UpdateFinalCustomer(obj)),

        addFinalMissionStatement: (val) => dispatch(AddFinalMissionStatemet(val)),
        removeFinalMissionStatement: (index) => dispatch(DeleteFinalMissionStatemet(index)),
        updateFinalMissionStatement: (obj) => dispatch(UpdateFinalMissionStatemet(obj)),
    }
}

export default connect(mapStateToProps, mapActionsToProps)(FinishingUp)