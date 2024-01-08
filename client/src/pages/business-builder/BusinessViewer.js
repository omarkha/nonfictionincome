import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import "../../styles/businessviewer.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SelectInterests, SelectCustomers, AddInterest, DeleteInterest, UpdateInterest, AddCustomer, DeleteCustomer, UpdateCustomer, AddFinalCustomer, AddFinalMissionStatemet, AddFinalUSP, DeleteFinalCustomer, DeleteFinalMissionStatemet, DeleteFinalUSP, UpdateFinalCustomer, UpdateFinalMissionStatemet, UpdateFinalUSP, PopulateCustomers, PopulateInterests, PopulateMotivations, PopulateSpecifications, PopulateStruggles, PopulateValues, SetServerDataLoaded, UpdateBusinessName, ChooseNiche, SetInitialCustomer } from '../../store/actions/businessActions';
import ConfirmationBox from '../../components/ConfirmationBox';
import { auth } from '../../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { SetUserID } from '../../store/actions/userActions';
import { PDFDownloadLink } from "@react-pdf/renderer"
import PDFFile from '../../components/PDFFile';
const BusinessViewer = (props) => {
    const uri = window.location.origin == "http://localhost:3000" ? "http://localhost:3001" : window.location.origin
    const [projectName, setProjectName] = useState("New Project");
    const navigate = useNavigate();


    useEffect(() => {

        if (props.businessState.edit_mode.isInEditMode === true) {
            setProjectName(props.businessState.business_name)
            populateDatabaseBusiness()
        }
    }, [])

    const checkLoggedIn = () => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                console.log("FirebaseID");
                console.log(user.uid)
                const fuid = user.uid;
                await axios.get(`${uri}/api/users/firebase/${user.uid}`).then(res => { console.log(res); console.log(res.data[0]._id); props.setUserID(res.data[0]._id); saveBusiness(res.data[0]._id) }).catch(err => console.log(err))
            }
        });
    }

    const fetchUserId = async (fireid) => {
        await axios.get(`${uri}/api/users/firebase/${fireid}`).then(res => { console.log(res); console.log(res.data[0]._id); props.setUserID(res.data[0]._id); saveBusiness(res.data[0]._id) }).catch(err => console.log(err))
    }


    const populateDatabaseBusiness = async () => {
        if (!props.businessState.server_data_loaded) {
            await axios.get(`${uri}/api/businesses/byid/${props.businessState.edit_mode.business_id}`).then(res => {
                console.log(res)
                props.populateInterests(res.data.interests)
                props.populateCustomers(res.data.customers)
                props.populateMotivations(res.data.motivations)
                props.populateStruggles(res.data.struggles)
                props.populateValues(res.data.values)
                props.populateSpecifications(res.data.specifications)
                setProjectName(res.data.project_name)
                props.setInitialCustomer(res.data.initial_customer)
                props.updateBusinessName(res.data.project_name)
                props.addFinalCustomer(res.data.final_customer)
                props.addFinalMissionStatement(res.data.final_mission_statement)
                props.addFinalUsp(res.data.final_usp)
                props.chooseNiche(res.data.chosen_niche)
                props.setServerDataLoaded(true)
            })
        }
    }

    const updateElement = (value) => {


        setProjectName(value)
        props.updateBusinessName(value)


    }


    const saveBusiness = async (uid) => {
        console.log(props.userState.user_id)
        const userId = props.userState.user_id ? props.userState.user_id : uid;
        if (props.businessState.edit_mode.isInEditMode === false) {


            await axios.post(`${uri}/api/businesses`, {
                owner_id: userId,
                chosen_niche: props.businessState.chosen_niche,
                initial_customer: props.businessState.initial_customer,
                project_name: props.businessState.business_name,
                final_customer: props.businessState.final_customer,
                final_mission_statement: props.businessState.final_mission_statement,
                final_usp: props.businessState.final_usp,
                interests: props.businessState.interests ? [...props.businessState.interests] : [],
                customers: props.businessState.customers ? [...props.businessState.customers] : [],
                motivations: props.businessState.motivations ? [...props.businessState.motivations] : [],
                struggles: props.businessState.struggles ? [...props.businessState.struggles] : [],
                values: props.businessState.values ? [...props.businessState.values] : [],
                specifications: props.businessState.specifications ? [...props.businessState.specifications] : [],
            })
        } else {
            await axios.put(`${uri}/api/businesses`, {
                id: props.businessState.edit_mode.business_id,
                package: {
                    owner_id: userId,
                    chosen_niche: props.businessState.chosen_niche,
                    initial_customer: props.businessState.initial_customer,
                    project_name: props.businessState.business_name,
                    final_customer: props.businessState.final_customer,
                    final_mission_statement: props.businessState.final_mission_statement,
                    final_usp: props.businessState.final_usp,
                    interests: props.businessState.interests ? [...props.businessState.interests] : [],
                    customers: props.businessState.customers ? [...props.businessState.customers] : [],
                    motivations: props.businessState.motivations ? [...props.businessState.motivations] : [],
                    struggles: props.businessState.struggles ? [...props.businessState.struggles] : [],
                    values: props.businessState.values ? [...props.businessState.values] : [],
                    specifications: props.businessState.specifications ? [...props.businessState.specifications] : [],

                }
            })
        }
    }


    const handleConfirmed = (val) => {
        if (val == true) {
            axios.delete(`${uri}/api/businesses/deleteone/${props.businessState.edit_mode.business_id}`)
            setShowConfirmBox(false)
        } else {
            setShowConfirmBox(false)
        }
    }




    const [showConfirmBox, setShowConfirmBox] = useState(false)

    return (
        <div className='business-viewer'>
            {showConfirmBox ? <ConfirmationBox message={`Are you sure you want to delete ${projectName}?`} handleConfirmed={handleConfirmed} action="Delete Forever" /> : null}
            <div className='project-name'>
                <label>Project Name: </label>
                <input type='text' className='project-name-field' value={projectName} onChange={(e) => updateElement(e.target.value)} placeholder='Project name' />
            </div>
            <button className='save-business-btn' onClick={() => checkLoggedIn()} >Save Business</button>

            <div className='control-buttons'>
                <PDFDownloadLink className='download-pdf-btn' document={<PDFFile businessState={props.businessState} />} fileName={`${props.businessState.business_name}.pdf`}>
                    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
                </PDFDownloadLink>
                <button onClick={() => {
                    navigate("/business-builder/getting-started")
                }}>Edit</button><button onClick={() => setShowConfirmBox(true)}>Delete</button>
            </div>
            <div className='business-document'>

                <h1>{projectName} - Business Blueprint</h1>

                <div className="finished-asset">
                    <h3><u>Niche</u></h3>
                    <p>
                        {
                            props.businessState.chosen_niche
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
                    <h3><u>Unique Selling Proposition</u></h3>
                    <p>
                        {
                            props.businessState.final_usp
                        }
                    </p>
                </div>



                <hr />

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
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        businessState: state.business,
        userState: state.user
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

        setInitialCustomer: (cus) => dispatch(SetInitialCustomer(cus)),

        setUserID: (val) => dispatch(SetUserID(val)),
        updateBusinessName: (obj) => dispatch(UpdateBusinessName(obj)),

        addFinalUsp: (val) => dispatch(AddFinalUSP(val)),
        removeFinalUsp: (index) => dispatch(DeleteFinalUSP(index)),
        updateFinalUsp: (obj) => dispatch(UpdateFinalUSP(obj)),

        addFinalCustomer: (val) => dispatch(AddFinalCustomer(val)),
        removeFinalCustomer: (index) => dispatch(DeleteFinalCustomer(index)),
        updateFinalCustomer: (obj) => dispatch(UpdateFinalCustomer(obj)),

        addFinalMissionStatement: (val) => dispatch(AddFinalMissionStatemet(val)),
        removeFinalMissionStatement: (index) => dispatch(DeleteFinalMissionStatemet(index)),
        updateFinalMissionStatement: (obj) => dispatch(UpdateFinalMissionStatemet(obj)),

        chooseNiche: (val) => dispatch(ChooseNiche(val)),


        populateSpecifications: (arr) => dispatch(PopulateSpecifications(arr)),
        populateValues: (arr) => dispatch(PopulateValues(arr)),
        populateStruggles: (arr) => dispatch(PopulateStruggles(arr)),
        populateMotivations: (arr) => dispatch(PopulateMotivations(arr)),
        populateCustomers: (arr) => dispatch(PopulateCustomers(arr)),
        populateInterests: (arr) => dispatch(PopulateInterests(arr)),
        setServerDataLoaded: (bool) => dispatch(SetServerDataLoaded(bool)),

    }
}


export default connect(mapStateToProps, mapActionsToProps)(BusinessViewer)