import logo from '../assets/logo-no-background.png'
import '../css/Navbar.css'
import { NavLink } from'react-router-dom'

export default function Navbar(){

    return(
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-list-item">
                    <NavLink to="/">Products</NavLink>
                </li>
                <li className="nav-list-item">
                    <NavLink to="/">Support</NavLink>
                </li>
                <li className="nav-list-item">
                    <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
                </li>
                <li className="nav-list-item">
                    <NavLink to="/">Safety</NavLink>
                </li>
                <li className="nav-list-item">
                    <NavLink to="/">About Us</NavLink>
                </li>
            </ul>
        </nav>
    )
}