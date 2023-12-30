import {
    ADD_CUSTOMER, ADD_FINAL_CUSTOMER, ADD_FINAL_MISSION_STATEMENT,
    ADD_FINAL_PRODUCT, ADD_FINAL_USP, ADD_INTEREST, ADD_MOTIVATION,
    ADD_PRODUCT, ADD_SPECIFICATION, ADD_STRUGGLE, ADD_VALUE, DELETE_CUSTOMER,
    DELETE_FINAL_CUSTOMER, DELETE_FINAL_MISSION_STATEMENT, DELETE_FINAL_PRODUCT,
    DELETE_FINAL_USP, DELETE_INTEREST, DELETE_MOTIVATION, DELETE_PRODUCT,
    DELETE_SPECIFICATION, DELETE_STRUGGLE, DELETE_VALUE, SELECT_CUSTOMERS, SELECT_INTERESTS, SELECT_MOTIVATIONS, SELECT_PRODUCTS, SELECT_SPECIFICATIONS, SELECT_STRUGGLES, SELECT_VALUES, UPDATE_CUSTOMER,
    UPDATE_FINAL_CUSTOMER, UPDATE_FINAL_MISSION_STATEMENT, UPDATE_FINAL_PRODUCT,
    UPDATE_FINAL_USP, UPDATE_INTEREST, UPDATE_MOTIVATION, UPDATE_PRODUCT,
    UPDATE_SPECIFICATION, UPDATE_STRUGGLE, UPDATE_VALUE
} from '../actiontypes'

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

// Customers

export const AddCustomer = (customer) => ({
    type: ADD_CUSTOMER,
    payload: customer
})

export const DeleteCustomer = (customer) => ({
    type: DELETE_CUSTOMER,
    payload: customer
})

export const UpdateCustomer = (customer) => ({
    type: UPDATE_CUSTOMER,
    payload: customer
})

export const SelectCustomers = () => ({
    type: SELECT_CUSTOMERS,
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


// Products

export const AddProduct = (product) => ({
    type: ADD_PRODUCT,
    payload: product
})

export const DeleteProduct = (product) => ({
    type: DELETE_PRODUCT,
    payload: product
})

export const UpdateProduct = (interproductest) => ({
    type: UPDATE_PRODUCT,
    payload: product
})

export const SelectProducts = () => ({
    type: SELECT_PRODUCTS,
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


// Final Product

export const AddFinalProduct = (final_product) => ({
    type: ADD_FINAL_PRODUCT,
    payload: final_product
})

export const DeleteFinalProduct = (final_product) => ({
    type: DELETE_FINAL_PRODUCT,
    payload: final_product
})

export const UpdateFinalProduct = (final_product) => ({
    type: UPDATE_FINAL_PRODUCT,
    payload: final_product
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