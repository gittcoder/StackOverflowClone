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

const Navbar = () => {
    const dispatch = useDispatch()
    var User = useSelector((state) => (state.currentUserReducer))
    console.log(User);
    const navigate = useNavigate();
    
    const handleLogout = () => {
        dispatch({ type: 'LOGOUT'});
        navigate('/')
        dispatch(currentUser(null))
    }
    
    useEffect(() => {
        const token = User?.token 
        if(token){
            const decodedToken = decode(token)
            if(decodedToken.exp * 1000 < new Date().getTime()){
                handleLogout()
            }
        }
        dispatch(currentUser( JSON.parse(localStorage.getItem('Profile'))))
    },[User?.token, dispatch])

    return (
        <nav className='main-nav'>
            <div className='navbar'>
                <Link to='/' className='nav-item nav-logo'>
                    <img src={logo} alt='logo' width="180" />
                </Link>
                <Link to='/' className='nav-item nav-btn'>About</Link>
                <Link to='/' className='nav-item nav-btn'>Products</Link>
                <Link to='/' className='nav-item nav-btn'>For Teams</Link>
                <form>
                    <input type="text" placeholder='Search...'/>
                    <img src={search} alt="search" width="18" className='search-icon'/>
                </form>
                { User === undefined ? 
                    <Link to='/Auth' className='nav-item nav-links'>Log in</Link> : 
                    <>
                        <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color='white'><Link to={`/Users/${User?.result?._id}`} style={{color:"white", textDecoration:'none'}}>{User?.result?.name.charAt(0).toUpperCase()}</Link></Avatar>
                        <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>
                    </>
                }
            </div>
        </nav>
    )
}

export default Navbar