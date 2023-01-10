import react from 'react';
import './LeftSidebar.css';
import {Link} from 'react-router-dom';
import Globe from '../../assets/globe-solid.svg'
const LeftSidebar=()=>
{
    return(
        <div className="left-sidebar">
            <nav className="side-nav">
        <Link to="/" className="side-nav-links" activeClass="active">
            <p>Home</p>
            </Link>
            <div className="side-nav-div">
                <div><p>PUBLIC</p></div>
                <Link to="/Questions" className="side-nav-links" activeClass="active" >
                    <img src={Globe} alt="Globe" width="20"></img>
                    <p style={{paddingLeft:"10px"}}>Questions</p>
                </Link>
                
                <Link to="/Tags" className="side-nav-links" activeClass="active" style={{padding:"10px"}}>
                    <p>Tags</p>
                </Link>
                <Link to="/Users" className="side-nav-links" activeClass="active" style={{padding:"10px"}}>
                    <p>Users</p>
                </Link>
                

            </div>
            </nav>

        </div>
    )
}

export default LeftSidebar;