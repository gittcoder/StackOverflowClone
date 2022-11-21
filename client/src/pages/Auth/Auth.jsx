import React,{useState} from "react"
import './Auth.css'
import icon from '../../assets/logo-stackoverflow.png'
const Auth=()=>
{
    const [isSignup,setIsSignup] = useState(false);
    const handleSwitch=()=>
    {
        setIsSignup(!isSignup);
    }
    return(
        <div>
            <section className="auth-section">
                <div className="auth-container">
                    {isSignup&& <img src={icon} alt="stack Overflow" className="login-logo"></img>}
                    <form>
                        <label htmlFor="email">
                            <h4>Email</h4>
                            <input type="email" name="email" id="email"/>
                        </label>
                        <label htmlFor="password">
                            <div>
                                <h4>Password</h4>
                                <h4>forgot Password?</h4>
                            </div>
                            <input type="password" name="password" id="password"/>
                        </label>
                        <button type="submit" className="auth-btn">{isSignup? 'Sign Up':"Login"}</button>
                        
                    </form>
                    <p>
                        {isSignup?"already have an account?":"dont have an account?"}
                        <button type="button" className="handle-switch-btn">{isSignup?"Login":"Sign Up"}</button>
                    </p>
                </div>
            </section>
        </div>
        )
}

export default Auth;