import { Component } from "react";
import '../css/SideBar.css'

function SideBar() {
    return (
        <div>
            <nav className="nav">
            <button className="profile" /*onClick={() => console.log('Clicked')}*/>
                Click Me!
            </button>
            <button className="security" /*onClick={() => console.log('Clicked')}*/>
                Security!
            </button>
            <button className="explore" /*onClick={() => console.log('Clicked')}*/>
                Explore!
            </button>
            </nav>
            <h2>
                SideBar for Profile and Settings
            </h2>
            <div className="subscription">
                Cupid Pro
            </div>
            <div className="subscription">
                Cupid Plus
            </div>
            <div className="account settings">
                <h2>Account Settings</h2>
                <div>
                    1. email
                </div>
                <div>
                    2. phone number
                </div>
            </div>
            <div classname="discovery settings">
                <h2>Discovery Settings</h2>
                <div>
                    <input type="range" name="distance within" min="" max=""/>
                </div>
            </div>
            <div classname="global settings">
                <h2>Global Settings</h2>
            </div>
            <div classname="Help & Support">
                <h2>Help & Support</h2>
            </div>
            <div classname="Safety">
                <h2>Safety</h2>
            </div>
            <div classname="Legal">
                <h2>Legal</h2>
            </div>
        </div>
    )
}

export default SideBar