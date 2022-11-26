import React from 'react'
import Questions from './Questions'
const QuestionsList = ({questionList}) => {
  return (
    <div>
        <>
        {
            
                questionList.map((question)=>
                {
                    <Questions question={question} key={question.id}/>
                })
        
        }
        </>
    </div>
  )
}

export default QuestionsList