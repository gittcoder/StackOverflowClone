import React,{useState} from "react"
import './Auth.css'
import icon from '../../assets/logo-stackoverflow.png'
import AboutAuth from "./AboutAuth"

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
                    {isSignup&& <img src={icon} alt="stack Overflow" className="login-logo" width="18"></img>}
                    <form>
                        {
                            isSignup &&
                            (
                                <label htmlFor="name">
                                    <h4> Display Name</h4>
                                    <input type="text " id="name" name="name"/>
                                </label>
                            )
                        }
                        <label htmlFor="email">
                            <h4>Email</h4>
                            <input type="email" name="email" id="email"/>
                        </label>
                        <label htmlFor="password">
                            <div>
                                <h4>Password</h4>
                                {!isSignup && <h4>forgot Password?</h4>}
                            </div>
                            <input type="password" name="password" id="password"/>
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