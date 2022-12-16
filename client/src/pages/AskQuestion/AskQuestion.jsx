import React,{useState} from 'react'
import './AskQuestion.css'
import {useDispatch,useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {askQuestion} from '../../actions/question';
const AskQuestion = () => {

  const [questionTitle,setQuestionTitle] = useState('')
  const [questionBody,setQuestionBody] = useState('')
  const [questionTags,setQuestionTags] = useState('')
  const dispatch = useDispatch()
  const User= useSelector((state)=>(state.currentUserReducer))
  const navigate = useNavigate()
const handleSubmit = (e)=>
 {
  e.preventDefault()
  dispatch(askQuestion({questionTitle,questionBody,questionTags,userPosted:User.result.name,userId:User?.result._id},navigate))
 }
  const handleEnter=(e)=>
  {
    if(e.key==='Enter')
    {
      setQuestionBody(questionBody+"\n");
    }
  }
    
  return (
    <div>
       <div className="ask-question">
        <div className="ask-ques-container">
          <h1>Ask a public Question</h1>
          <form onSubmit={handleSubmit}>
            <div className="ask-form-container">
              <label htmlFor="ask-ques-title" >
                <h1>Title</h1>
                <p>Be specific and imagine you are asking a question to another person</p>
                <input type="text" name="questionTitle" id="ask-ques-title" onChange={(e)=>{setQuestionTitle(e.target.value)}} placeholder="Enter Text"/>
              </label>
              <label htmlFor="ask-ques-body">
                <h1>Body</h1>
                <p>Include all information smeone would need to answer your question</p>
                <textarea name="questionTitle" id="ask-ques-body" onChange={(e)=>{setQuestionBody(e.target.value)}} cols="30" rows="10" onKeyPress={handleEnter}></textarea>
                
              </label>
              <label htmlFor="ask-ques-tags">
                <h1>Tags</h1>
                <p>Add upto 5 tags to describe what your question is about</p>
                <input type="text" name="questionTitle" id="ask-ques-tags" onChange={(e)=>{setQuestionTags(e.target.value.split(" "))}} placeholder="Enter Text"/>
              </label>
              
            </div>
            <input type="submit" value="Review you question" className="review-btn"/>
          </form>
        </div>
       </div>
    </div>
  )
}

export default AskQuestion