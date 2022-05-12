import ActionTypes from '../contants/ActionTypes'

export const add_target_number = (event) => {
    return {
        type: ActionTypes.ADD_TARGET_NUMBER,
        payload: event
    }
}

export const add_companies = (event) => {
    return {
        type: ActionTypes.ADD_TARGET_NUMBER,
        payload: event
    }
}

export const select_company_products = (event) => {
    return {
        type: ActionTypes.ADD_TARGET_NUMBER,
        payload: event
    }
}

export const set_auth = (event) => {
    return {
        type: ActionTypes.SET_AUTH,
        payload: event
    }
}