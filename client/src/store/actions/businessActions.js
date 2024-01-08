import {
    CHOOSE_NICHE,
    SET_INITIAL_CUSTOMER,
    POPULATE_PRODUCTS, POPULATE_SPECIFICATIONS, POPULATE_VALUES, POPULATE_STRUGGLES, POPULATE_MOTIVATIONS, POPULATE_CUSTOMERS, POPULATE_INTERESTS,
    START_EDIT_MODE, STOP_EDIT_MODE, RESET_BUSINESS,
    EMPTY_INTERESTS, EMPTY_CUSTOMERS, EMPTY_MOTIVATIONS, EMPTY_STRUGGLES, EMPTY_VALUES, EMPTY_SPECIFICATIONS, EMPTY_PRODUCTS,
    ADD_CUSTOMER, ADD_FINAL_CUSTOMER, ADD_FINAL_MISSION_STATEMENT,
    ADD_FINAL_PRODUCT, ADD_FINAL_USP, ADD_INTEREST, ADD_MOTIVATION,
    ADD_PRODUCT, ADD_SPECIFICATION, ADD_STRUGGLE, ADD_VALUE, DELETE_CUSTOMER,
    DELETE_FINAL_CUSTOMER, DELETE_FINAL_MISSION_STATEMENT, DELETE_FINAL_PRODUCT,
    DELETE_FINAL_USP, DELETE_INTEREST, DELETE_MOTIVATION, DELETE_PRODUCT,
    DELETE_SPECIFICATION, DELETE_STRUGGLE, DELETE_VALUE, SELECT_CUSTOMERS, SELECT_INTERESTS, SELECT_MOTIVATIONS, SELECT_PRODUCTS, SELECT_SPECIFICATIONS, SELECT_STRUGGLES, SELECT_VALUES, UPDATE_CUSTOMER,
    UPDATE_FINAL_CUSTOMER, UPDATE_FINAL_MISSION_STATEMENT, UPDATE_FINAL_PRODUCT,
    UPDATE_FINAL_USP, UPDATE_INTEREST, UPDATE_MOTIVATION, UPDATE_PRODUCT,
    UPDATE_SPECIFICATION, UPDATE_STRUGGLE, UPDATE_VALUE, ADD_BUSINESS_NAME, DELETE_BUSINESS_NAME, UPDATE_BUSINESS_NAME, SET_SERVER_DATA_LOADED
} from '../actiontypes'


export const ResetBusiness = () => ({
    type: RESET_BUSINESS,

})

export const SetInitialCustomer = (customer) => ({
    type: SET_INITIAL_CUSTOMER,
    payload: customer

})

// Interests

export const AddInterest = (interest) => ({
    type: ADD_INTEREST,
    payload: interest
})

export const DeleteInterest = (interest) => ({
    type: DELETE_INTEREST,
    payload: interest
})

export const UpdateInterest = (interest) => ({
    type: UPDATE_INTEREST,
    payload: interest
})

export const SelectInterests = () => ({
    type: SELECT_INTERESTS,
})

export const EmptyInterests = () => ({
    type: EMPTY_INTERESTS,
})

export const ChooseNiche = (niche) => ({
    type: CHOOSE_NICHE,
    payload: niche
})


// Customers

export const AddCustomer = (customer) => ({
    type: ADD_CUSTOMER,
    payload: customer
})

export const DeleteCustomer = (cus) => ({
    type: DELETE_CUSTOMER,
    payload: cus
})

export const UpdateCustomer = (customer) => ({
    type: UPDATE_CUSTOMER,
    payload: customer
})

export const SelectCustomers = () => ({
    type: SELECT_CUSTOMERS,
})

export const EmptyCustomers = () => ({
    type: EMPTY_CUSTOMERS,
})


// Motivations

export const AddMotivation = (motivation) => ({
    type: ADD_MOTIVATION,
    payload: motivation
})

export const DeleteMotivation = (motivation) => ({
    type: DELETE_MOTIVATION,
    payload: motivation
})

export const UpdateMotivation = (motivation) => ({
    type: UPDATE_MOTIVATION,
    payload: motivation
})

export const SelectMotivations = () => ({
    type: SELECT_MOTIVATIONS,
})

export const EmptyMotivations = () => ({
    type: EMPTY_MOTIVATIONS,
})


// Struggles

export const AddStruggle = (struggle) => ({
    type: ADD_STRUGGLE,
    payload: struggle
})

export const DeleteStruggle = (struggle) => ({
    type: DELETE_STRUGGLE,
    payload: struggle
})

export const UpdateStruggle = (struggle) => ({
    type: UPDATE_STRUGGLE,
    payload: struggle
})

export const SelectStruggles = () => ({
    type: SELECT_STRUGGLES,
})
export const EmptyStruggles = () => ({
    type: EMPTY_STRUGGLES,
})



// Values

export const AddValue = (value) => ({
    type: ADD_VALUE,
    payload: value
})

export const DeleteValue = (value) => ({
    type: DELETE_VALUE,
    payload: value
})

export const UpdateValue = (value) => ({
    type: UPDATE_VALUE,
    payload: value
})

export const SelectValues = () => ({
    type: SELECT_VALUES,
})

export const EmptyValues = () => ({
    type: EMPTY_VALUES,
})


// Specifications

export const AddSpecification = (specification) => ({
    type: ADD_SPECIFICATION,
    payload: specification
})

export const DeleteSpecification = (specification) => ({
    type: DELETE_SPECIFICATION,
    payload: specification
})

export const UpdateSpecification = (specification) => ({
    type: UPDATE_SPECIFICATION,
    payload: specification
})

export const SelectSpecifications = () => ({
    type: SELECT_SPECIFICATIONS,
})

export const EmptySpecifications = () => ({
    type: EMPTY_SPECIFICATIONS,
})



// Final Customer

export const AddFinalCustomer = (final_customer) => ({
    type: ADD_FINAL_CUSTOMER,
    payload: final_customer
})

export const DeleteFinalCustomer = (final_customer) => ({
    type: DELETE_FINAL_CUSTOMER,
    payload: final_customer
})

export const UpdateFinalCustomer = (final_customer) => ({
    type: UPDATE_FINAL_CUSTOMER,
    payload: final_customer
})



// Final USP

export const AddFinalUSP = (final_usp) => ({
    type: ADD_FINAL_USP,
    payload: final_usp
})

export const DeleteFinalUSP = (final_usp) => ({
    type: DELETE_FINAL_USP,
    payload: final_usp
})

export const UpdateFinalUSP = (final_usp) => ({
    type: UPDATE_FINAL_USP,
    payload: final_usp
})


// Final Mission Statment

export const AddFinalMissionStatemet = (final_mission_statement) => ({
    type: ADD_FINAL_MISSION_STATEMENT,
    payload: final_mission_statement
})

export const DeleteFinalMissionStatemet = (final_mission_statement) => ({
    type: DELETE_FINAL_MISSION_STATEMENT,
    payload: final_mission_statement
})

export const UpdateFinalMissionStatemet = (final_mission_statement) => ({
    type: UPDATE_FINAL_MISSION_STATEMENT,
    payload: final_mission_statement
})

// Business Name


export const AddBusinessName = (business_name) => ({
    type: ADD_BUSINESS_NAME,
    payload: business_name
})

export const DeleteBusinessName = () => ({
    type: DELETE_BUSINESS_NAME,
})

export const UpdateBusinessName = (business_name) => ({
    type: UPDATE_BUSINESS_NAME,
    payload: business_name
})


// Edit Mode

export const StartEditMode = (business_id) => ({
    type: START_EDIT_MODE,
    payload: business_id
})
export const StopEditMode = () => ({
    type: STOP_EDIT_MODE,
})


// Populating from the server

export const PopulateInterests = (arr) => ({
    type: POPULATE_INTERESTS,
    payload: arr
})


export const PopulateCustomers = (arr) => ({
    type: POPULATE_CUSTOMERS,
    payload: arr
})


export const PopulateMotivations = (arr) => ({
    type: POPULATE_MOTIVATIONS,
    payload: arr
})


export const PopulateStruggles = (arr) => ({
    type: POPULATE_STRUGGLES,
    payload: arr
})


export const PopulateValues = (arr) => ({
    type: POPULATE_VALUES,
    payload: arr
})


export const PopulateSpecifications = (arr) => ({
    type: POPULATE_SPECIFICATIONS,
    payload: arr
})



export const SetServerDataLoaded = (bool) => ({
    type: SET_SERVER_DATA_LOADED,
    payload: bool
})

