import react from 'react';
import './HomeMainbar.css';
import {Link,useLocation,useNavigate} from 'react-router-dom';
import QuestionsList from './QuestionsList';
import { useSelector } from 'react-redux';
const HomeMainbar=()=>
{
    const user=1;
    const navigate = useNavigate();
    const questionList=useSelector(state=>state.questionsReducer);
    console.log(questionList);
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
                questionList.data===null?
                <h1>Loading....</h1>:
                <>
                <p>{questionList.data.length} Questions</p>
                <QuestionsList questionList={questionList.data}/>
                </>
            }
            </div>
        </div>
    )
}

export default HomeMainbar;