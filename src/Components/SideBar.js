import { Component } from "react";
import '../css/SideBar.css'

function SideBar() {
    return (
        <div>
            <h2>
                SideBar for Profile and Settings
            </h2>
            <button id="Profile" onClick={() => console.log('Clicked')}>
                Click Me!
            </button>
        </div>
    )
}

export default SideBar