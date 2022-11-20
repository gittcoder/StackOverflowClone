import react from 'react'
import { Link } from 'react-router-dom'
import search from '../../assets/magnifying-glass-solid.svg'
import logo from '../../assets/logo-stackoverflow.png'
import Avatar from '../../components/Avatar/Avatar'
import Button from '../../components/Button/Button'
import './Navbar.css'
const Navbar = ()=>{

    const User=null;
    // const User=123;


    return (
        <nav>
            <div className="navbar">
                <Link to='/' className="nav-button nav-logo">
                    <img src ={logo} alt="logo" width="180"></img>
                </Link>
                <Link to='/' className="nav-button">About</Link>
                <Link to='/' className="nav-button">Products</Link>
                <Link to='/' className="nav-button">For Teams</Link>
                <form>
                    <input type="text" placeholder="search...."></input>
                    <img src={search} width="18" className="search-icon" ></img>
                </form>
                {User===null?
                <Link to="/Auth" className='nav-button nav-links'>Log in</Link>:
                <>
                <Link to="/" style={{color:"white",textDecoration:"none"}}><Avatar 
                backgroundColor="#009dff"
                px="10px" py="7px" borderRadius="50%"
                >
                    M
                </Avatar>
                </Link>
                <button className="nav-button nav-links">Log Out</button>
                </>
                }
            </div>
        </nav>
        
    )
}

export default Navbar;