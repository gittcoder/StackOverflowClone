import React,{useState} from "react"
import './Auth.css'
import icon from '../../assets/logo-stackoverflow.png'
import AboutAuth from "./AboutAuth"
import './Auth.css'
import {signup,login} from "../../actions/auth"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const Auth=()=>
{
    const [isSignup,setIsSignup] = useState(false);
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSwitch=()=>
    {
        setIsSignup(!isSignup);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!email && !password)
        {
            alert("enter email and password to continue!!")
        }
        if(isSignup)
        {
            if(!name)
            {
                alert("enter a name to continue!!")
            }
            dispatch(signup({name,email,password}),navigate)
        }
        else{
            dispatch(login({email,password},navigate))
        }
    }
    return(
        <div>
            <section className="auth-section">
                { isSignup && <AboutAuth/>}
                <div className="auth-container-2">
                    {isSignup&& <img src={icon} alt="stack Overflow" className="login-logo" width="18"></img>}
                    <form onSubmit={handleSubmit}>
                        {
                            isSignup &&
                            (
                                <label htmlFor="name">
                                    <h4> Display Name</h4>
                                    <input type="text " id="name" name="name" onChange={(e)=>{setName(e.target.value)}}/>
                                </label>
                            )
                        }
                        <label htmlFor="email">
                            <h4>Email</h4>
                            <input type="email" name="email" id="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                        </label>
                        <label htmlFor="password">
                            <div style={{display:"flex",justifyContent:"space-between"}}>
                                <h4>Password</h4>
                                {!isSignup && <p style={{color:"#007ac6"}}>forgot Password?</p>}
                            </div>
                            <input type="password" name="password" id="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                            {isSignup && <p>Passwords must contain at least eight <br/> characters, including at least 1 letter and 1<br/> number.</p>}
                        </label>
                        {
                            isSignup && (
                                <label
                                    htmlFor="check">
                                        <input type="checkbox" id ="check"/>
                                        <p>Opt-in to receive occasional<br/>product updates, user research invitations,<br/>company announcements, and digests.</p>
                                </label>)
                        }
                        <button type="submit" className="auth-btn">{isSignup? 'Sign Up':"Login"}</button>
                        {
                            isSignup &&
                            (
                                <p style={{color:"#666767",fontSize:"13px"}}>By clicking “Sign up”, you agree to our 
                                    <span style={{color:"#007ac6"}}> terms of
                                <br/>service</span>,<span style={{color:"#007ac6"}}> privacy policy</span> and <span style={{color:"#007ac6"}}> cookie policy</span></p>
                            )
                        }
                    </form>
                    <p>
                        {isSignup?"already have an account?":"dont have an account?"}
                        <button type="button" className="handle-switch-btn" onClick={handleSwitch}>{isSignup?"Login":"Sign Up"}</button>

                    </p>
                </div>
            </section>
        </div>
        )
}

export default Auth;