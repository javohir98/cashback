import ActionTypes from '../contants/ActionTypes'

const initialState = {
    target_number: '',
    companies: [],
    select_company_products: [],
    isAuth: false
}

export const getUserData = (state=initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.ADD_TARGET_NUMBER:
            return {
                ...state,
                target_number: payload
            }

        case ActionTypes.ADD_COMPANIES:
            return {
                ...state,
                companies: payload
            }
        
        case ActionTypes.SELECT_COMPANY_PRODUCTS:
            return {
                ...state,
                companies: payload
            }   

        case ActionTypes.SET_AUTH:
            return {
                ...state,
                isAuth: payload
            }

        default:
            return state
    }
}