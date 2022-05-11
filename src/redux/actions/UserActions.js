import ActionTypes from '../contants/ActionTypes'

export const add_target_number = (event) => {
    return {
        type: ActionTypes.ADD_TARGET_NUMBER,
        payload: event
    }
}