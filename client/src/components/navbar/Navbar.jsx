import react,{useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import search from '../../assets/magnifying-glass-solid.svg'
import logo from '../../assets/logo-stackoverflow.png'
import Avatar from '../Avatar/Avatar'
import Button from '../Button/Button'
import './Navbar.css'
import decode from 'jwt-decode'
import {currentUser} from '../../actions/currentUser'
import {useSelector,useDispatch} from 'react-redux'
const Navbar = ()=>{
    const dispatch=useDispatch()
    let User=useSelector((state)=>(state.currentUserReducer))
    useEffect(()=>{
        const token=User?.token
        if(token)
        {
            const decodeToken=decode(token)
            if(decodeToken.exp*1000<new Date().getTime())
            {
                handleLogout()
            }
        }
        dispatch(currentUser(JSON.parse(localStorage.getItem('Profile'))))
    })
    const navigate = useNavigate();
    const handleLogout=()=>
    {
        dispatch({type:"LOGOUT"})
        navigate('/')
        dispatch(currentUser(null))
    }

    return (
        <nav className="main-nav">
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
                <Link to="/" style={{color:"white",textDecoration:"none"}}>
                    {User?.result?.name.charAt(0).toUpperCase()}
                    <Avatar 
                backgroundColor="#009dff"
                px="10px" py="7px" borderRadius="50%"
                >
                    <Link to={`/Users/${User?.result?._id}`} style={{color:"white",textDecoration:"none"}}>{User?.result?.name.charAt(0).toUpperCase()}</Link>
                </Avatar>
                </Link>
                <button className="nav-button nav-links" onClick={handleLogout}>Log Out</button>
                </>
                }
            </div>
        </nav>
        
    )
}

export default Navbar;