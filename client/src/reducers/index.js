import {combineReducers} from "redux"
import authReducer from "./auth"
const newState={
    data:null,
}

export default combineReducers({
    authReducer
})