import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessengerSender from './MessengerSender'

function Feed() {
    return (
        <div className="feed">
           <StoryReel />
           <MessengerSender />
        </div>
    )
}

export default Feed
