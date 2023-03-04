import '../css/SidebarSwipe.css'
import { useState } from 'react'

export default function SidebarSwipe(){

    const [matches, setMatches] = useState(true)
    const [messages, setMessages] = useState(false)

    const styles = {
        textDecoration: 'underline'
    }

    function matchesClick() {
        setMatches(true)
        setMessages(false)
    }

    function messagesClick() {
        setMatches(false)
        setMessages(true)
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
            {matches? <h1>Here you can see your matches</h1>: <h1>Your messages appear here</h1>}
        </div>
    )
}