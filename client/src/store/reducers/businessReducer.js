import {
    SET_SERVER_DATA_LOADED,
    POPULATE_PRODUCTS, POPULATE_SPECIFICATIONS, POPULATE_VALUES, POPULATE_STRUGGLES, POPULATE_MOTIVATIONS, POPULATE_CUSTOMERS, POPULATE_INTERESTS,
    START_EDIT_MODE, STOP_EDIT_MODE,
    ADD_BUSINESS_NAME, DELETE_BUSINESS_NAME, UPDATE_BUSINESS_NAME,
    EMPTY_INTERESTS, EMPTY_CUSTOMERS, EMPTY_MOTIVATIONS, EMPTY_STRUGGLES, EMPTY_VALUES, EMPTY_SPECIFICATIONS, EMPTY_PRODUCTS,
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
    UPDATE_INTEREST, UPDATE_MOTIVATION, UPDATE_PRODUCT, UPDATE_SPECIFICATION, UPDATE_STRUGGLE, UPDATE_VALUE, RESET_BUSINESS, SET_INITIAL_CUSTOMER
} from "../actiontypes";

const initialState = {
    server_data_loaded: false,
    initial_customer: "",
    business_name: "New Project",
    selected_data: [],
    interests: [], customers: [], motivations: [],
    struggles: [], values: [], specifications: [], products: [],
    final_customer: "", final_product: "", final_usp: "", final_mission_statement: "", edit_mode: { isInEditMode: false, business_id: "" }

}

const businessReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_INTERESTS:

            return { ...state, selected_data: state.interests }


        case SELECT_CUSTOMERS:

            return { ...state, selected_data: state.customers }

        case SELECT_MOTIVATIONS:

            return { ...state, selected_data: state.motivations }

        case SELECT_STRUGGLES:

            return { ...state, selected_data: state.struggles }

        case SELECT_VALUES:

            return { ...state, selected_data: state.values }

        case SELECT_SPECIFICATIONS:

            return { ...state, selected_data: state.specifications }

        case SET_INITIAL_CUSTOMER:
            return { ...state, initial_customer: action.payload }
        case ADD_INTEREST:
            if ((state.interests.length ? state.interests.length : 0) < 20) {
                return { ...state, interests: [...state.interests, action.payload] }
            }
        case DELETE_INTEREST:
            if (Number.isInteger(action.payload)) {
                return {
                    ...state, interests: state.interests.filter((e, i) => {
                        return i !== action.payload
                    })
                }
            }
        case UPDATE_INTEREST:
            if (action.payload.package) {
                return {
                    ...state, interests: state.interests.map((e, i) => {
                        if (i === action.payload.index) {
                            return action.payload.package
                        } else {
                            return e
                        }
                    })
                }
            }
        case EMPTY_INTERESTS:
            return { ...state, interests: [], selected_data: [] }
        case ADD_CUSTOMER:

            if ((state.customers.length ? state.customers.length : 0) < 20) {
                return { ...state, customers: [...state.customers, action.payload] }
            }
        case DELETE_CUSTOMER:
            if (Number.isInteger(action.payload)) {
                return {
                    ...state, customer: state.customers.filter((e, i) => {
                        return i !== action.payload
                    })
                }
            }
        case UPDATE_CUSTOMER:
            if (action.payload.package) {
                return {
                    ...state, customers: state.customers.map((e, i) => {
                        if (i === action.payload.index) {
                            return action.payload.package
                        } else {
                            return e
                        }
                    })
                }
            }
        case EMPTY_CUSTOMERS:
            return { ...state, customers: [], selected_data: [] }
        case ADD_MOTIVATION:

            if ((state.motivations.length ? state.motivations.length : 0) < 20) {
                return { ...state, motivations: [...state.motivations, action.payload] }
            }
        case DELETE_MOTIVATION:
            if (Number.isInteger(action.payload)) {
                return {
                    ...state, motivations: state.motivations.filter((e, i) => {
                        return i !== action.payload
                    })
                }
            }
        case UPDATE_MOTIVATION:
            if (action.payload.package) {
                return {
                    ...state, motivations: state.motivations.map((e, i) => {
                        if (i === action.payload.index) {
                            return action.payload.package
                        } else {
                            return e
                        }
                    })
                }
            }
        case EMPTY_MOTIVATIONS:
            return { ...state, motivations: [], selected_data: [] }
        case ADD_STRUGGLE:
            if ((state.struggles.length ? state.struggles.length : 0) < 20) {
                return { ...state, struggles: [...state.struggles, action.payload] }
            }
        case DELETE_STRUGGLE:
            if (Number.isInteger(action.payload)) {
                return {
                    ...state, struggles: state.struggles.filter((e, i) => {
                        return i !== action.payload
                    })
                }
            }
        case UPDATE_STRUGGLE:
            if (action.payload.package) {
                return {
                    ...state, struggles: state.struggles.map((e, i) => {
                        if (i === action.payload.index) {
                            return action.payload.package
                        } else {
                            return e
                        }
                    })
                }
            }
        case EMPTY_STRUGGLES:
            return { ...state, struggles: [], selected_data: [] }
        case ADD_VALUE:
            if ((state.values.length ? state.values.length : 0) < 20) {
                return { ...state, values: [...state.values, action.payload] }
            }
        case DELETE_VALUE:
            if (Number.isInteger(action.payload)) {
                return {
                    ...state, values: state.values.filter((e, i) => {
                        return i !== action.payload
                    })
                }
            }
        case UPDATE_VALUE:
            if (action.payload.package) {
                return {
                    ...state, values: state.values.map((e, i) => {
                        if (i === action.payload.index) {
                            return action.payload.package
                        } else {
                            return e
                        }
                    })
                }
            }
        case EMPTY_VALUES:
            return { ...state, values: [], selected_data: [] }
        case ADD_SPECIFICATION:
            if ((state.specifications.length ? state.specifications.length : 0) < 20) {
                return { ...state, specifications: [...state.specifications, action.payload] }
            }
        case DELETE_SPECIFICATION:
            if (Number.isInteger(action.payload)) {
                return {
                    ...state, specifications: state.specifications.filter((e, i) => {
                        return i !== action.payload
                    })
                }
            }
        case UPDATE_SPECIFICATION:
            if (action.payload.package) {
                return {
                    ...state, specifications: state.specifications.map((e, i) => {
                        if (i === action.payload.index) {
                            return action.payload.package
                        } else {
                            return e
                        }
                    })
                }
            }
        case EMPTY_SPECIFICATIONS:
            return { ...state, specifications: [], selected_data: [] }
        case ADD_PRODUCT:
            if ((state.products.length ? state.products.length : 0) < 20) {
                return { ...state, products: [...state.products, action.payload] }
            }
        case DELETE_PRODUCT:
            if (Number.isInteger(action.payload)) {
                return {
                    ...state, products: state.products.filter((e, i) => {
                        return i !== action.payload
                    })
                }
            }
        case UPDATE_PRODUCT:
            if (action.payload.package) {
                return {
                    ...state, products: state.products.map((e, i) => {
                        if (i === action.payload.index) {
                            return action.payload.package
                        } else {
                            return e
                        }
                    })
                }
            }
        case EMPTY_PRODUCTS:
            return { ...state, products: [], selected_data: [] }
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
        case ADD_BUSINESS_NAME:
            return { ...state, business_name: action.payload }
        case DELETE_BUSINESS_NAME:
            return {
                ...state, business_name: ""
            }
        case UPDATE_BUSINESS_NAME:
            return {
                ...state, business_name: action.payload
            }
        case START_EDIT_MODE:
            return {
                ...state, edit_mode: { isInEditMode: true, business_id: action.payload }
            }
        case STOP_EDIT_MODE:
            return {
                ...state, edit_mode: { isInEditMode: false, business_id: "" }
            }
        case RESET_BUSINESS:
            return {
                state
            }
        case POPULATE_INTERESTS:
            return {
                ...state, interests: action.payload
            }
        case POPULATE_CUSTOMERS:
            return {
                ...state, customers: action.payload
            }
        case POPULATE_MOTIVATIONS:
            return {
                ...state, motivations: action.payload
            }
        case POPULATE_STRUGGLES:
            return {
                ...state, struggles: action.payload
            }
        case POPULATE_VALUES:
            return {
                ...state, values: action.payload
            }
        case POPULATE_SPECIFICATIONS:
            return {
                ...state, specifications: action.payload
            }
        case POPULATE_PRODUCTS:
            return {
                ...state, products: action.payload
            }

        case SET_SERVER_DATA_LOADED:
            return {
                ...state, server_data_loaded: action.payload
            }
        default:
            return state
    }
}

// POPULATE_PRODUCTS, POPULATE_SPECIFICATIONS, POPULATE_VALUES, POPULATE_STRUGGLES, 
// POPULATE_MOTIVATIONS, POPULATE_CUSTOMERS, POPULATE_INTERESTS,

export default businessReducer;