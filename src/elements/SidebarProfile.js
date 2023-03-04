import '../css/SidebarProfile.css'
import RangeSlider from '../elements/RangeSlider'
import DistanceSlider from '../elements/DistanceSlider'

export default function SidebarProfile(){
    return(
        <div className="sidebar-profile">
            <div className="subscription">
                    Cupid Pro
            </div>
            <div className="subscription">
                Cupid Plus
            </div>
            <div className="account-settings">
                <h2>Account Settings</h2>
                <div className="box">1. Email</div>
                <div className="box">2. Phone Number</div>
            </div>
            <div className="discovery settings">
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
            <div className="global settings">
                <h2>Global Settings</h2>
            </div>
            <div className="Help & Support">
                <h2>Help & Support</h2>
            </div>
            <div className="Safety">
                <h2>Safety</h2>
            </div>
            <div className="Legal">
                <h2>Legal</h2>
            </div>
        </div>
    )
}