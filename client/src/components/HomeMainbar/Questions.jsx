import React from 'react'
import {Link} from 'react-router-dom'
import moment from "moment"
const Questions = ({question}) => {
  return (
    <div className="display-ans-container">
      <div className="display-vote-ans">
        <p>{question.upVotes.length-question.downVotes.length}</p>
        </div>
        <div className="display-vote-ans">
        <p>{question.noOfAnswers}</p>
        <p>answers</p>
        </div>
        <div className="display-question-details">
          <Link to={`/Questions/${question.id}`} className="question-title-link"></Link>
          <div className="display-tags">
            {
              question.tags.map((tag)=>{
                <p key={tag}>{tag}</p>
              })
            }
          </div>
          <p className="display-time">
            asked {moment(question.askedOn).fromNow()} {question.userPosted}
          </p>
        </div>
    </div>
  )
}

export default Questions