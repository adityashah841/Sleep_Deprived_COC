import React from 'react'
import '../css/SidebarSwipeMatches.css'
import girl1Img from '../assets/girl1.jpg'
import girl2Img from '../assets/girl2.jpg'
import girl3Img from '../assets/girl3.jpg'
import girl4Img from '../assets/girl4.jpg'

export default function SidebarSwipeMatches() {

  const matched = [
    {
      name: "Jessica",
      img: girl1Img
    },
    {
      name: 'Stephanie',
      img: girl2Img
    },
    {
      name: 'Kareena',
      img: girl3Img
    },
    {
      name: 'Shilpa',
      img: girl4Img
    }]

  const cards = matched.map((item,index) => {

    const styles = {
      backgroundImage: `url(${item.img})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }

    return (
      <div 
        style={styles}
        className="matches-cards"
        key={index}
      >
        <span>{item.name}</span>
      </div>
    )
  })

  return (
    <div className="matches-box">
        {cards}
    </div>
  )
}
