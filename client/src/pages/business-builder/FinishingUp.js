import React, { useEffect, useState } from 'react'
import BuilderNavigation from '../../components/BuilderNavigation';
import "../../styles/finishingup.css"
import { AddFinalCustomer, AddFinalMissionStatemet, AddFinalProduct, AddFinalUSP, DeleteFinalCustomer, DeleteFinalMissionStatemet, DeleteFinalProduct, DeleteFinalUSP, UpdateBusinessName, UpdateFinalCustomer, UpdateFinalMissionStatemet, UpdateFinalProduct, UpdateFinalUSP } from '../../store/actions/businessActions';
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";


const FinishingUp = (props) => {

    const uri = window.location.origin == "http://localhost:3000" ? "http://localhost:3001" : window.location.origin

    const navigate = useNavigate();
    const [product, setProduct] = useState("");
    const [mission, setMission] = useState("");
    const [usp, setUsp] = useState("");
    const [customer, setCustomer] = useState("");




    const generateBusiness = async () => {
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
        if (Array.isArray(props.businessState.specifications) && !props.businessState.edit_mode.isInEditMode) {

            setCustomer(
                props.businessState.initial_customer + " who are" + props.businessState.specifications?.map(e => {
                    return (" " + e.title)
                })
            )

        } else {
            setCustomer(props.businessState.final_customer)
        }

        setProduct(props.businessState.final_product)
        setMission(props.businessState.final_mission_statement)
        setUsp(props.businessState.final_usp)
    }



    const updateElement = (element, value) => {

        switch (element) {
            case "Customer":
                setCustomer(value)
                props.updateFinalCustomer(value)

                break;
            case "Product":
                setProduct(value)
                props.updateFinalProduct(value)

                break;
            case "USP":
                setUsp(value)
                props.updateFinalUsp(value)
                break;
            case "Mission":
                setMission(value)
                props.updateFinalMissionStatement(value)
                break;
            default:
                break;

        }

    }


    return (
        <div className='finishing-up'>
            <BuilderNavigation page="finishing_up" />
            <div className='builder-body'>

                <div className='area-view'>
                    <div className='asset'>
                        <h4>Who's your Target Customer? include demographics and psychographics.</h4>
                        <textarea placeholder={"Refer back to identifying CUSTOMERS and SPECIFICATIONS"} value={customer} onPaste={(e) => updateElement("Customer", e.target.value)} onChange={(e) => updateElement("Customer", e.target.value)}>{customer}</textarea>
                    </div>
                    <div className='asset'>
                        <h4>What's your product?</h4>
                        <textarea placeholder={"Refer back to PRODUCTS and select the most profitable one and describe how does it solve your unique customer's pain-points."} value={product} onPaste={(e) => updateElement("Product", e.target.value)} onChange={(e) => updateElement("Product", e.target.value)}>{product}</textarea>
                    </div>
                    <div className='asset'>
                        <h4>What's your Unique Selling Proposition? </h4>
                        <textarea placeholder={"What does your product promise your specific customer based on their Struggles, Values, and Motivations?"} value={usp} onPaste={(e) => updateElement("USP", e.target.value)} onChange={(e) => updateElement("USP", e.target.value)}>{usp}</textarea>
                    </div>
                    <div className='asset'>
                        <h4>What's your company's Mission Statement? </h4>
                        <textarea placeholder={"Look at your Target Customer, their VALUES, and their STRUGGLES"} value={mission} onChange={(e) => updateElement("Mission", e.target.value)} onPaste={(e) => updateElement("Mission", e.target.value)}>{mission}</textarea>
                    </div>

                </div><div className='areas'>
                    <div className="finished-asset">
                        <h3> <u> Customer Specifications </u>  </h3><ul>
                            {props.businessState.specifications?.map(e => {
                                return (
                                    <li><strong>{e.title + ". "}</strong> {e.description} </li>
                                )
                            })}</ul>
                    </div>

                    <div className='finished-asset'>
                        <h3>  <u> Customer Values </u>  </h3><ul>
                            {props.businessState.values?.map(e => {
                                return (
                                    <li><strong>{e.title + ". "}</strong> {e.description} </li>
                                )
                            })}</ul>
                    </div>
                    <div className='finished-asset'>
                        <h3>  <u> Customer Motivations  </u></h3>
                        <ul>


                            {props.businessState.motivations?.map(e => {
                                return (
                                    <li><strong>{e.title + ". "}</strong> {e.description} </li>
                                )
                            })}</ul>
                    </div>
                    <div className="finished-asset">
                        <h3> <u>  Customer Struggles </u>  </h3><ul>
                            {props.businessState.struggles?.map(e => {
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
        businessState: state.business

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