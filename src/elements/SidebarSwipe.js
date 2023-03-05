import '../css/SidebarSwipe.css'
import { useState } from 'react'
import SidebarSwipeMatches from './SidebarSwipeMatches'

export default function SidebarSwipe(){

    const [matches, setMatches] = useState(true)
    const [messages, setMessages] = useState(false)

    const styles = {
        textDecoration: 'underline',
        backgroundColor: 'lightgray'
    }

    function matchesClick() {
        setMatches(true)
        setMessages(false)
    }

    function messagesClick() {
        setMatches(false)
        setMessages(true)
    }

    const style = {
        padding: '1rem',
    }

    return(
        <div className="sidebar-swipe">
            <div className="tabs">
                <button onClick={matchesClick} style={matches? styles: {}}className="matches sidebar-swipe-btn">
                    Matches
                </button>
                <button onClick={messagesClick} style={messages? styles: {}} className="Messages sidebar-swipe-btn">
                    Messages
                </button>
            </div>
            {matches? <SidebarSwipeMatches />: <h1 style={style}>You can find your messages here</h1>}
        </div>
    )
}