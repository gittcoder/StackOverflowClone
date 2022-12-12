const newState={
    data:null,
}

const authReducer = (state=newState,action)=>
{
    switch(action.type)
    {
        case "AUTH":
            localStorage.setItem("Profile",JSON.stringify({...action?.data}))
            return {...state,data:action?.data};
        default:return state;
    }

    return state;
}

export default authReducer;