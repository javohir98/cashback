import { combineReducers } from "redux";
import { getUserData } from "./UserReducer";

const rootReducer = combineReducers({
    user: getUserData
})

export default rootReducer