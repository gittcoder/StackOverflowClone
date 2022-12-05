import React from 'react'
import './AskQuestion.css'

const AskQuestion = () => {

    
  return (
    <div>
       <div className="ask-question">
        <div className="ask-ques-container">
          <h1>Ask a public Question</h1>
          <form>
            <div className="ask-form-container">
              <label htmlFor="ask-ques-title">
                <h1>Title</h1>
                <p>Be specific and imagine you are asking a question to another person</p>
                <input type="text" name="questionTitle" id="ask-ques-title"/>
              </label>
            </div>
          </form>
        </div>
       </div>
    </div>
  )
}

export default AskQuestion