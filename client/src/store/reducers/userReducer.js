import { ADD_FIREBASE_ID, ADD_BUSINESS_IDS, SET_USER_ID, SIGN_IN, SIGN_OUT, ADD_CUSTOMER_EMAIL, ADD_CUSTOMER_SESSION_ID, CUSTOMER_PURCHASE_SUCCESSFUL, CUSTOMER_PURCHASE_FAILED, ADD_CUSTOMER_NAME } from "../actiontypes";

const initialState = {
    customer_email: "",
    customer_purchase_success: false,
    purchase_session_id: "",
    user_id: "",
    firebase_id: "",
    customer_name: "",
    signed_in: false,
    business_ids: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CUSTOMER_EMAIL:
            return { ...state, customer_email: action.payload }
        case SET_USER_ID:
            return { ...state, user_id: action.payload }
        case ADD_CUSTOMER_NAME:
            return { ...state, customer_name: action.payload }
        case ADD_CUSTOMER_SESSION_ID:
            return { ...state, purchase_session_id: action.payload }
        case ADD_FIREBASE_ID:
            return { ...state, firebase_id: action.payload }
        case CUSTOMER_PURCHASE_SUCCESSFUL:
            return { ...state, customer_purchase_success: true }
        case CUSTOMER_PURCHASE_FAILED:
            return { ...state, customer_purchase_success: false }
        case SIGN_IN:
            return { ...state, signed_in: true }
        case SIGN_OUT:
            return { ...state, signed_in: false }
        case ADD_BUSINESS_IDS:
            return { ...state, business_ids: action.payload }
        default:
            return state
    }
}

export default userReducer;