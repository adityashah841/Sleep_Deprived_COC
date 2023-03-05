import '../css/SwipeMain.css'
import likeImg from '../assets/like.svg'
import dislikeImg from '../assets/cancel.svg'
import data from '../../src/data.js'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function SwipeMain() {

    const [index, setIndex] = useState(0)
    const [dataF, setDataF] = useState()

    function incrementIndex() {
        if(index === data.length-1){
            setIndex(0)
        }
        setIndex(prev => prev + 1)
    }

    let navigate = useNavigate()

    useEffect(()=>{

        const handleSubmit = async (event) => {
            try {
              const data = {
                'user_id': '1'
              };
              axios.post(
                "http://127.0.0.1:8000/final/rec",
                data
              ).then((response) => {
                console.log(Object.values(response.data))
                setDataF(Object.values(response.data))
            })
            } catch (error) {
                console.log(error);
            }
          };
    
        handleSubmit()
    })

    if(!dataF){
        console.log("hi");
        return <h1>Loading</h1>
    }


    return(
        <> 
    
    
        <div className="swipe-main">
            <div className="people-cards">
                <img src={data[`${index}`].img} alt="profile-images" />
                <div className="profile-desc">
                    <div className="profile-desc-main">
                        <div className="name-age">{dataF[`${index}`].name}, {dataF[`${index}`].age}</div>
                        <div className="college-name">{data[index].college}</div>
                    </div>
                    <div className="profile-desc-about">
                        <div className="about-title">About {dataF[`${index}`].name}</div>
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
                        <div className="location-title">{dataF[index].name} Location</div>
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
    }
        </>
    )
}