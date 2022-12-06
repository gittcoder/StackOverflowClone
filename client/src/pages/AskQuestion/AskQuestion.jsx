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
                <input type="text" name="questionTitle" id="ask-ques-title" placeholder="Enter Text"/>
              </label>
              <label htmlFor="ask-ques-body">
                <h1>Body</h1>
                <p>Include all information smeone would need to answer your question</p>
                <textarea name="questionTitle" id="ask-ques-title" cols="30" rows="10"></textarea>
                
              </label>
              <label htmlFor="ask-ques-tags">
                <h1>Tags</h1>
                <p>Add upto 5 tags to describe what your question is about</p>
                <input type="text" name="questionTitle" id="ask-ques-title" placeholder="Enter Text"/>
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