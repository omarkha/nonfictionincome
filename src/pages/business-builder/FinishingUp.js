import React, { useState } from 'react'
import BuilderNavigation from '../../components/BuilderNavigation';
import "../../styles/finishingup.css"
import { AddFinalCustomer, AddFinalMissionStatemet, AddFinalProduct, AddFinalUSP, DeleteFinalCustomer, DeleteFinalMissionStatemet, DeleteFinalProduct, DeleteFinalUSP, UpdateFinalCustomer, UpdateFinalMissionStatemet, UpdateFinalProduct, UpdateFinalUSP } from '../../store/actions/businessActions';
import { connect } from 'react-redux';



const FinishingUp = (props) => {


    const [product, setProduct] = useState("");
    const [mission, setMission] = useState("");
    const [usp, setUsp] = useState("");
    const [customer, setCustomer] = useState("");


    const generateBusiness = () => {
        props.addFinalCustomer(customer)
        props.addFinalMissionStatement(mission)
        props.addFinalProduct(product)
        props.addFinalUsp(usp)
    }



    return (
        <div className='finishing-up'>
            <BuilderNavigation page="finishing_up" />
            <div className='assets'>
                <div className='asset'>
                    <h4>Who's your Target Customer? include demographics and psychographics.</h4>
                    <textarea placeholder={"Who is your target customer?"} value={customer} onChange={(e) => setCustomer(e.target.value)}>{customer}</textarea>
                </div>
                <div className='asset'>
                    <h4>What's your product and how does it solve your unique customer's pain-points?</h4>
                    <textarea placeholder={"Who is your product?"} value={product} onChange={(e) => setProduct(e.target.value)}>{product}</textarea>
                </div>
                <div className='asset'>
                    <h4>What's your Unique Selling Proposition? </h4>
                    <textarea placeholder={"What is your Unique Selling Proposition?"} value={usp} onChange={(e) => setUsp(e.target.value)}>{usp}</textarea>
                </div>
                <div className='asset'>
                    <h4>What's your company's Mission Statement? </h4>
                    <textarea placeholder={"What is your company's Mission Statement?"} value={mission} onChange={(e) => setMission(e.target.value)}>{mission}</textarea>
                </div>
                <button className='generate-business-btn' onClick={() => generateBusiness()}>Generate Your Business</button>
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