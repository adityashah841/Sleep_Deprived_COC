import '../css/SideBar.css'
import RangeSlider from '../elements/RangeSlider'
import React from 'react'
import DistanceSlider from '../elements/DistanceSlider'

function SideBar() {
    return (
        <div className="sideBar">
            <nav className="nav">
            <button className="profile" /*onClick={() => console.log('Clicked')}*/>
                {/* <img src={"require(../assets/user-regular.svg)"} alt="My profile"/> */}
                Profile!
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
                    <h3>
                        <button>1. Email</button>
                    </h3>
                </div>
                <div>
                    <h3>
                        <button>2. Phone Number</button>
                    </h3>
                </div>
            </div>
            <div classname="discovery settings">
                <h2>Discovery Settings</h2>
                <div>
                    <h3>Age Preference</h3>
                    <RangeSlider />
                </div>
                <div>
                    <h3>Distance Preference</h3>
                    <DistanceSlider />
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