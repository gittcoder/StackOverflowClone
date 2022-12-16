import * as api from '../api'
import {currentUser} from './currentUser'
export const signup=(authData,navigate) => async (dispatch) =>{
    try {
        
            const {data} = await api.signUp(authData)
            dispatch({type:"AUTH",data})
            dispatch(currentUser(JSON.parse(localStorage.getItem('Profile'))))
            navigate("/");
    }
    catch(err)
    {
        console.log(err);
    }
}
export const login=(authData,navigate) => async (dispatch) =>{
    try {
        
            const {data} = await api.logIn(authData)
            dispatch({type:"AUTH",data})
            dispatch(currentUser(JSON.parse(localStorage.getItem('Profile'))))
            navigate("/");
    }
    catch(err)
    {
        console.log(err);
    }
}
