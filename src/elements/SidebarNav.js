import '../css/SidebarNav.css'

export default function SidebarNav(props){
    return(
        <nav className="sidebar-nav">
            <button className="profile" onClick={props.toggleProfile}>
                Profile!
            </button>
            <button className="security" /*onClick={() => console.log('Clicked')}*/>
                Security!
            </button>
            <button className="explore" /*onClick={() => console.log('Clicked')}*/>
                Explore!
            </button>
        </nav>
    )
}