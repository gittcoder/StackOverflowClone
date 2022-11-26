import react from 'react';
import './HomeMainbar.css';
import {Link,useLocation} from 'react-router-dom';
import Questions from './Questions';
import QuestionsList from './QuestionsList';
const HomeMainbar=()=>
{
    var questionList=[];
    const location = useLocation();
    return(
        <div className="main-bar">
            <div className="main-bar0header">
                {
                    location.pathname==='/' ? <h1>Top Questions</h1>:<h1>All Questions</h1>
                }
                <Link to ="/AskQuestion">Ask Questions</Link>
        </div>
        <div>
            {
                questionList===null?
                <h1>Loading....</h1>:
                <>
                <p>{questionList.length} Questions</p>
                <QuestionsList questionList={questionList}/>
                </>
            }
            </div>
        </div>
    )
}

export default HomeMainbar;