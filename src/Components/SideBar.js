import '../css/SideBar.css'

function SideBar() {
    return (
        <div className="sideBar">
            <h2>
                SideBar for Profile and Settings
            </h2>
            <button className="profile" onClick={() => console.log('Clicked')}>
                Click Me!
            </button>
        </div>
    )
}

export default SideBar