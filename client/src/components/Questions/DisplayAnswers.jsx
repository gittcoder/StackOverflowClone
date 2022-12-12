import React from 'react'
import QuestionDetails from './QuestionDetails'
import { Link } from 'react-router-dom'
import Avatar from '../Avatar/Avatar'
const DisplayAnswers = ({question}) => {
  return (
    <div>
        {
            QuestionDetails.answer.map((ans)=>
            {
                <div className="display-ans" key={ans._id}>
                    <p>{ans.body}</p>
                    <div className="question-actions-user">
                        <button type="button">Share</button>
                        <button type="button">Delete</button>
                    </div>
                    <div>
                        <p>answered {ans.answeredOn}</p>
                        <Link to={`/User/${ans.userId}`} className="user-link" style={{color:"#0086d8"}}>
                                            <Avatar  backgroundColor="orange" px="8px" py="5px">{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                                            <div>
                                                {ans.userAnswered}
                                            </div>
                                        </Link>
                    </div>
                </div>
            })
        }
    </div>
  )
}

export default DisplayAnswers