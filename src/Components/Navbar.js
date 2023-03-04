import logo from'../assets/logo.jpeg'
import './Navbar.css'
import { NavLink } from'react-router-dom'

export default function Navbar(){

    return(
        <nav className="navbar">
            <img src={logo} alt="logo" />
            <ul className="nav-list">
                <li className="nav-list-item">
                    <NavLink to="/signIn">Sign In</NavLink>
                </li>
            </ul>
        </nav>
    )
}