import { SET_USER_ID, ADD_BUSINESS_IDS, SIGN_IN, SIGN_OUT, ADD_CUSTOMER_EMAIL, ADD_CUSTOMER_SESSION_ID, CUSTOMER_PURCHASE_FAILED, CUSTOMER_PURCHASE_SUCCESSFUL, ADD_CUSTOMER_NAME } from "../actiontypes"

export const AddCustomerEmail = (customer_email) => ({
    type: ADD_CUSTOMER_EMAIL,
    payload: customer_email
})
export const AddCustomerSessionID = (customer_id) => ({
    type: ADD_CUSTOMER_SESSION_ID,
    payload: customer_id
})

export const CustomerPurchaseSuccessful = () => ({
    type: CUSTOMER_PURCHASE_SUCCESSFUL,
})

export const CustomerPurchaseFailed = () => ({
    type: CUSTOMER_PURCHASE_FAILED,

})


export const AddCustomerName = (customer_name) => ({
    type: ADD_CUSTOMER_NAME,
    payload: customer_name
})
export const SignIn = () => ({
    type: SIGN_IN,

})
export const SignOut = () => ({
    type: SIGN_OUT,

})
export const AddBusinessIDs = (ids) => ({
    type: ADD_BUSINESS_IDS,
    payload: ids
})

export const SetUserID = (id) => ({
    type: SET_USER_ID,
    payload: id
})


