import SideBar from "./SideBar";
import '../css/Main.css';
import React from 'react'

export default function Main(){
    return(
        <div className="main">
            <SideBar/>
            <div className="cards">
                <img className="card" src={require("../assets/girl_img.jpg")} />
            </div>
        </div>
        
    )
}