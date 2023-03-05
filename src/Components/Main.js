import '../css/Main.css';
import React from 'react'
import ProfileMain from "../elements/ProfileMain";
import SidebarProfile from '../elements/SidebarProfile';
import SidebarSwipe from '../elements/SidebarSwipe';
import SwipeMain from '../elements/SwipeMain';
import { useState } from 'react'
import SidebarNav from '../elements/SidebarNav';

export default function Main(){

    const [profile, setProfile] = useState(true)

    function toggleProfile(){
        setProfile(prevState => !prevState)
    }

    return(
        <div className="main">
            <div className="sidebar">
                <SidebarNav 
                    profile = {profile}
                    toggleProfile = {toggleProfile}
                />
                {profile? <SidebarProfile/>: <SidebarSwipe/>}
            </div>
            {profile?
                <>
                    <ProfileMain/>
                </>
                :
                <> 
                    <SwipeMain/>
                </>
            }
        </div>
        
    )
}