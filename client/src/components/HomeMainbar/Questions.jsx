import React from 'react'

const Questions = ({question}) => {
  return (
    <div className="display-ans-container">
      <div className="display-vote-ans">
        <p>{question.votes}</p>
        
        </div>
    </div>
  )
}

export default Questions