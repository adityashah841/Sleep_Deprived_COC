import '../css/SwipeMain.css'
import likeImg from '../assets/like.svg'
import dislikeImg from '../assets/cancel.svg'
import data from '../../src/data.js'
import { useState } from 'react'

export default function SwipeMain() {

    const [index, setIndex] = useState(0)

    function incrementIndex() {
        if(index === data.length-1){
            setIndex(0)
        }
        setIndex(prev => prev + 1)
    }

    console.log(index);
    console.log(data);

    return(
        <div className="swipe-main">
            <div className="people-cards">
                <img src={data[index].img} alt="profile-images" />
                <div className="profile-desc">
                    <div className="profile-desc-main">
                        <div className="name-age">{data[index].name}, {data[index].age}</div>
                        <div className="college-name">{data[index].college}</div>
                    </div>
                    <div className="profile-desc-about">
                        <div className="about-title">About {data[index].name}</div>
                        <div>
                            {data[index].about.map((item,index) => {
                                return(
                                    <button className="about-btns" key={index}>
                                        {item}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                    <div className="profile-desc-location">
                        <div className="location-title">{data[index].name} Location</div>
                        <div className="location">{data[index].location}</div>
                        <div className="distance">{data[index].dist}km Away</div>
                    </div>
                </div>
            </div>
            <div className="swipe-btns">
                <button onClick={incrementIndex} className="dislike">
                    <img src={dislikeImg} alt="" />
                </button>
                <button onClick={incrementIndex} className="like">
                    <img src={likeImg} alt="" />
                </button>
            </div>
        </div>
    )
}