import React,{useState} from 'react'
import {useParams} from 'react-router-dom';
import upvote from '../../assets/arrow-up-solid.svg'
import downvote from '../../assets/arrow-down-solid.svg'
import './QuestionDetails.css'
import { Link ,useNavigate,useLocation} from 'react-router-dom';
import Avatar from "../../components/Avatar/Avatar"
import DisplayAnswers from './DisplayAnswers'
import {useSelector,useDispatch} from 'react-redux'
import {postAnswer,deleteQuestion,voteQuestion} from '../../actions/question'

import  moment from 'moment'
import copy from 'copy-to-clipboard'
const QuestionDetails = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const[Answer,setAnswer] = useState("");
    const User = useSelector((state)=>(state.currentUserReducer))
    const url='http://localhost:3000'
const handleSubmit=(e,answerLength)=>
{
    e.preventDefault();
    if(User===null)
    {
        alert("Login or Signup to answer a question!!")
        navigate('/Auth')
    }
    else
    {
        if(Answer==="")
        {
            alert("Enter an Answer before submitting")
        }
        else
        {
            dispatch(postAnswer({id,noOfAnswers:answerLength+1,answerBody:Answer,userAnswered:User.result.name,userId:User.result._id}))
        }
    }
}


const handleShare=()=>
{
    copy(url+location.pathname)
    alert("Copied url : " +url+location.pathname)
}

const handleDelete=()=>
{
    dispatch(deleteQuestion(id,navigate))
    
}

const handleDownVote =() =>
{
    dispatch(voteQuestion(id,"downVote",User.result._id))
}

const handleUpVote = ()=>
{
    dispatch(voteQuestion(id,"upVote",User.result._id))
}


    const {id} = useParams();
    const questionsList=useSelector(state=>state.questionReducer);
  return (
    <div>
        <h1>Question Details</h1>
        <div className="question-details-page">
    {
        questionsList.data===null?
        <h1>Loading....</h1>:
        <>
            {
                questionsList.data.filter(question=>question._id===id).map((question)=>{
                
                    <div key={question._id}>
                        <section className="question-details-container">
                            <h1>{question.questionTitle}</h1>
                            <div className="question-details-container-2">
                                <div className="question-votes">
                                    <img src={upvote} alt="" width="18" className="vote-icon" onClick={handleUpVote}></img>
                                    <p>{question.upVotes.length-question.downVotes.length}</p>
                                    <img src={downvote} alt="" width="18" className="vote-icon" onClick={handleDownVote}></img>
                                </div>
                                <div style={{width:"100%"}} >
                                    <p className="question-body">{question.questionBody}</p>
                                    <div className="question-details-tags">
                                        {
                                            question.questionTags.map((tag)=>
                                                {
                                                    <p key={tag}>{tag}</p>
                                                })
                                        }
                                    </div>
                                    <div className="question-action-user">
                                        <button type="button" onClick = {handleShare}>Share</button>
                                        {
                                            User?.result?._id=== question?.userId &&(
                                                <button type="button" onClick={handleDelete}>Delete</button>)
                                        }
                                        
                                    </div>
                                    <div>
                                        <p>asked {moment(question.askedOn).fromNow()}</p>
                                        <Link to={`/Users/${question.userId}`} className="user-link" style={{color:"#0086d8"}}>
                                            <Avatar  backgroundColor="orange" px="8px" py="5px">{question.userPoster.charAt(0).toUpperCase()}</Avatar>
                                            <div>
                                                {question.userPosted}
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {
                            question.noOfAnswers !==0 &&(
                                <section>
                                <h3>
                                    {question.noOfAnswers}
                                </h3>
                                <DisplayAnswers key={question._id} question={question}  handleShare={handleShare} handleDelete={handleDelete}/>
                                </section>
                            )
                        }
                        <section className="post-ans-container" >
                            <h3>
                        Your Answer
                            </h3>
                            <form onSubmit={(e)=>{handleSubmit(e,question.answer.length)}}>
                                <textarea name=""  id="" cols="30" rows="10" onChange={e=>setAnswer(e.target.value)}></textarea>
                                <input type="submit" className="post-ans-btn" value="Post Your Answer"></input>                            
                                </form>
                                <p>
                                    Browse Another Question tagged 
                                    {
                                        question.questionTags.map((tag)=>{
                                            <Link to="/Tags" key={tag} className="ans-tag">{tag}</Link>
                                        })
                                    }or
                                    <Link to ="/AskQuestion" style={{textDecoration:"none",color:"#009dff"}}>Ask Question</Link>
                                </p>
                        </section>
                    </div>
                    
                })
            }
        </>
    }
        </div>
    </div>
  )
}

export default QuestionDetails