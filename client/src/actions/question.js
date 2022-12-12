import React from 'react'
import * as api from '../api'
export const askQuestion = (questionData,navigate) => async(dispatch)=> {
    try{
        const {data} = await api.postQuestion(questionData)
        dispatch({type:"POST_QUESTION",payload:data})
        dispatch(fetchAllQuestions())
        navigate('/')
    }

    catch(err)
    {
        console.log(err);
    }
  return (
    <div>

    </div>
  )
}

export const fetchAllQuestions = ()=> async (dispatch) =>
{
    try{
        const {data} = await api.getAllQuestions()
        dispatch({type:'FETCH_ALL_QUESTIONS',payload:data})
    }
    catch(err)
    {
        console.log(err);
    }
}
