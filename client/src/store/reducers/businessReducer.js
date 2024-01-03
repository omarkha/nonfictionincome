import {
    ADD_CUSTOMER, ADD_FINAL_CUSTOMER, ADD_FINAL_MISSION_STATEMENT, ADD_FINAL_PRODUCT, ADD_FINAL_USP, ADD_INTEREST, ADD_MOTIVATION,
    ADD_PRODUCT,
    ADD_SPECIFICATION, ADD_STRUGGLE, ADD_VALUE, DELETE_CUSTOMER,
    DELETE_FINAL_CUSTOMER,
    DELETE_FINAL_MISSION_STATEMENT,
    DELETE_FINAL_PRODUCT,
    DELETE_FINAL_USP,
    DELETE_INTEREST,
    DELETE_MOTIVATION, DELETE_PRODUCT, DELETE_SPECIFICATION, DELETE_STRUGGLE, DELETE_VALUE, SELECT_CUSTOMERS, SELECT_INTERESTS, SELECT_MOTIVATIONS, SELECT_PRODUCTS, SELECT_SPECIFICATIONS, SELECT_STRUGGLES, SELECT_VALUES, UPDATE_CUSTOMER,
    UPDATE_FINAL_CUSTOMER,
    UPDATE_FINAL_MISSION_STATEMENT,
    UPDATE_FINAL_PRODUCT,
    UPDATE_FINAL_USP,
    UPDATE_INTEREST, UPDATE_MOTIVATION, UPDATE_PRODUCT, UPDATE_SPECIFICATION, UPDATE_STRUGGLE, UPDATE_VALUE
} from "../actiontypes";

const initialState = {
    selected_data: [],
    interests: [], customers: [], motivations: [],
    struggles: [], values: [], specifications: [], products: [],
    final_customer: "", final_product: "", final_usp: "", final_mission_statement: ""

}

const businessReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_INTERESTS:
            return { ...state, selected_data: [...state.interests] }
        case SELECT_CUSTOMERS:
            return { ...state, selected_data: [...state.customers] }
        case SELECT_MOTIVATIONS:
            return { ...state, selected_data: [...state.motivations] }
        case SELECT_INTERESTS:
            return { ...state, selected_data: [...state.interests] }
        case SELECT_STRUGGLES:
            return { ...state, selected_data: [...state.struggles] }
        case SELECT_VALUES:
            return { ...state, selected_data: [...state.values] }
        case SELECT_SPECIFICATIONS:
            return { ...state, selected_data: [...state.specifications] }
        case SELECT_PRODUCTS:
            return { ...state, selected_data: [...state.products] }

        case ADD_INTEREST:
            return { ...state, interests: [...state.interests, action.payload] }
        case DELETE_INTEREST:
            return {
                ...state, interests: state.interests.filter((e, i) => {
                    return i !== action.payload
                })
            }
        case UPDATE_INTEREST:
            return {
                ...state, interests: state.interests.map((e, i) => {
                    if (i === action.payload.index) {
                        return action.payload.package
                    } else {
                        return e
                    }
                })
            }
        case ADD_CUSTOMER:
            return { ...state, customers: [...state.customers, action.payload] }
        case DELETE_CUSTOMER:
            return {
                ...state, customers: state.customers.filter((e, i) => {
                    return i !== action.payload
                })
            }
        case UPDATE_CUSTOMER:
            return {
                ...state, customers: state.customers.map((e, i) => {
                    if (i === action.payload.index) {
                        return action.payload.package
                    } else {
                        return e
                    }
                })
            }
        case ADD_MOTIVATION:
            return { ...state, motivations: [...state.motivations, action.payload] }
        case DELETE_MOTIVATION:
            return {
                ...state, motivations: state.motivations.filter((e, i) => {
                    return i !== action.payload
                })
            }
        case UPDATE_MOTIVATION:
            return {
                ...state, motivations: state.motivations.map((e, i) => {
                    if (i === action.payload.index) {
                        return action.payload.package
                    } else {
                        return e
                    }
                })
            }
        case ADD_STRUGGLE:
            return { ...state, struggles: [...state.struggles, action.payload] }
        case DELETE_STRUGGLE:
            return {
                ...state, struggles: state.struggles.filter((e, i) => {
                    return i !== action.payload
                })
            }
        case UPDATE_STRUGGLE:
            return {
                ...state, struggles: state.struggles.map((e, i) => {
                    if (i === action.payload.index) {
                        return action.payload.package
                    } else {
                        return e
                    }
                })
            }
        case ADD_VALUE:
            return { ...state, values: [...state.values, action.payload] }
        case DELETE_VALUE:
            return {
                ...state, values: state.values.filter((e, i) => {
                    return i !== action.payload
                })
            }
        case UPDATE_VALUE:
            return {
                ...state, values: state.values.map((e, i) => {
                    if (i === action.payload.index) {
                        return action.payload.package
                    } else {
                        return e
                    }
                })
            }
        case ADD_SPECIFICATION:
            return { ...state, specifications: [...state.specifications, action.payload] }
        case DELETE_SPECIFICATION:
            return {
                ...state, specifications: state.specifications.filter((e, i) => {
                    return i !== action.payload
                })
            }
        case UPDATE_SPECIFICATION:
            return {
                ...state, specifications: state.specifications.map((e, i) => {
                    if (i === action.payload.index) {
                        return action.payload.package
                    } else {
                        return e
                    }
                })
            }
        case ADD_PRODUCT:
            return { ...state, products: [...state.products, action.payload] }
        case DELETE_PRODUCT:
            return {
                ...state, products: state.products.filter((e, i) => {
                    return i !== action.payload
                })
            }
        case UPDATE_PRODUCT:
            return {
                ...state, products: state.products.map((e, i) => {
                    if (i === action.payload.index) {
                        return action.payload.package
                    } else {
                        return e
                    }
                })
            }
        case ADD_FINAL_CUSTOMER:
            return { ...state, final_customer: action.payload }
        case DELETE_FINAL_CUSTOMER:
            return {
                ...state, final_customer: ""
            }
        case UPDATE_FINAL_CUSTOMER:
            return {
                ...state, final_customer: action.payload
            }
        case ADD_FINAL_PRODUCT:
            return { ...state, final_product: action.payload }
        case DELETE_FINAL_PRODUCT:
            return {
                ...state, final_product: ""
            }
        case UPDATE_FINAL_PRODUCT:
            return {
                ...state, final_customer: action.payload
            }
        case ADD_FINAL_USP:
            return { ...state, final_usp: action.payload }
        case DELETE_FINAL_USP:
            return {
                ...state, final_usp: ""
            }
        case UPDATE_FINAL_USP:
            return {
                ...state, final_usp: action.payload
            }
        case ADD_FINAL_MISSION_STATEMENT:
            return { ...state, final_mission_statement: action.payload }
        case DELETE_FINAL_MISSION_STATEMENT:
            return {
                ...state, final_final_mission_statementcustomer: ""
            }
        case UPDATE_FINAL_MISSION_STATEMENT:
            return {
                ...state, final_mission_statement: action.payload
            }
        default:
            return state
    }
}

export default businessReducer;