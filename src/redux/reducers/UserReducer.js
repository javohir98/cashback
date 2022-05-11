import ActionTypes from '../contants/ActionTypes'

const initialState = {
    target_number: ''
}

export const getUserData = (state=initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.ADD_TARGET_NUMBER:
            return {
                ...state,
                target_number: payload
            }

        default:
            return state
    }
}