import * as api from '../api'

export const fetchAllUsers=()=> async (dispatch)=>
{
    try
    {
        const {data} = await api.fetchAllUsers()
        dispatch({type:"FETCH_USERS",patload:data})
    }
    catch(err)
    {
    console.log(err)
    }
}

export const updateProfile = (id,updateData)=>async (dispatch)=>
{
    try{
        const {data} =await api.updateProfile(id,updateData)
        dispatch({type:"UPDATE_CURRENT_USER",payload:data})
    }
    catch(err)
    {
        console.log(err);
    }
}