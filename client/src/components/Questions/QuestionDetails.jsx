import React from 'react'
import {useParams} from 'react-router-dom';
import upvote from '../../assets/arrow-up-solid.svg'
import downvote from '../../assets/arrow-down-solid.svg'
import './QuestionDetails.css'
import { Link } from 'react-router-dom';
import Avatar from "../../components/Avatar/Avatar"
import DisplayAnswers from './DisplayAnswers'
const QuestionDetails = () => {
    const {id} = useParams();
    const questionsList=[];
  return (
    <div>
        <h1>Question Details</h1>
        <div className="question-details-page">
    {
        questionsList===null?
        <h1>Loading....</h1>:
        <>
            {
                questionsList.filter(question=>question._id===id).map((question)=>{
                
                    <div key={question._id}>
                        <section className="question-details-container">
                            <h1>{question.questionTitle}</h1>
                            <div className="question-details-container-2">
                                <div className="question-votes">
                                    <img src={upvote} alt="" width="18"></img>
                                    <p>{question.upVotes-question.downVotes}</p>
                                    <img src={downvote} alt="" width="18"></img>
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
                                        <button type="button">Share</button>
                                        <button type="button">Delete</button>
                                    </div>
                                    <div>
                                        <p>asked {question.askedOn}</p>
                                        <Link to={`/User/${question.userId}`} className="user-link" style={{color:"#0086d8"}}>
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
                                <DisplayAnswers key={question._id} question={question}/>
                                </section>
                            )
                        }
                        <section className="post-ans-container" >
                            <h3>
                        Your Answer
                            </h3>
                            <form>
                                <textarea name=""  id="" cols="30" rows="10" ></textarea>
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