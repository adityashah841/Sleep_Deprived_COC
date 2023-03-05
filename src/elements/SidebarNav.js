import '../css/SidebarNav.css'
import profileImg from "../assets/user-regular.svg"
import exploreImg from "../assets/magnifying-glass-solid.svg"
import secureImg from "../assets/shield-solid.svg"
import logo from "../assets/logo-no-background.png"

export default function SidebarNav(props){
    return(
        <nav className="sidebar-nav">
            <button className="profile" onClick={props.toggleProfile}>
                {props.profile? <img src={logo}/>:<img className="navButton" src={profileImg} />}
            </button>
            <button className="security" /*onClick={() => console.log('Clicked')}*/>
            <img className="navButton" src={secureImg} />
            </button>
            <button className="explore" /*onClick={() => console.log('Clicked')}*/>
            <img className="navButton" src={exploreImg} />
            </button>
        </nav>
    )
}