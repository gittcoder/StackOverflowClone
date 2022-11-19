import react from 'react'
import { Link } from 'react-router-dom'
import search from '../../assets/magnifying-glass-solid.svg'
import logo from '../../assets/logo-stackoverflow.png'
const Navbar = ()=>{
    return (
        <nav>
            <div className="navbar">
                <Link to='/' className="navicon">
                    <img src ={logo} alt="logo"></img>
                </Link>
                <Link to='/' className="nav-button">About</Link>
                <Link to='/' className="nav-button">Products</Link>
                <Link to='/' className="nav-button">For Teams</Link>
                <form>
                    <input type="text" placeholder="search...."></input>
                    <img src={search} width="18" ></img>
                </form>
            </div>
        </nav>
        
    )
}

export default Navbar;