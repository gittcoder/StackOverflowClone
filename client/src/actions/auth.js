import * as api from '../api'

export const signup=(authData,navigate) => async (dispatch) =>{
    try {
        
            const {data} = await api.signUp(authData)
            dispatch({type:"AUTH",data})
            dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
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
            navigate("/");
    }
    catch(err)
    {
        console.log(err);
    }
}
