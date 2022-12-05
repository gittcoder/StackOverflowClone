import react from 'react';
import './HomeMainbar.css';
import {Link,useLocation,useNavigate} from 'react-router-dom';
import QuestionsList from './QuestionsList';
const HomeMainbar=()=>
{
    const user=null;
    const navigate = useNavigate();
    var questionList=[];
    const location = useLocation();
    const redirect = ()=>
    {
        if(user===null)
        {
            alert("Login or Sign Up to ask a question!!");
            navigate("/Auth");
        }
        else
        {
            navigate("/AskQuestion");
        }
    }

    return(
        <div className="main-bar">
            {
                    location.pathname==='/' ? <h1>Top Questions</h1>:<h1>All Questions</h1>
                }
            <div className="main-bar-header">
                
                <button onClick={redirect}>Ask Questions</button>
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