import { Avatar } from '@material-ui/core'
import React from 'react'
import './Story.css'

function Story({ image, profilePicture, title }) {
    return (
        <div className="story" style={{ backgroundImage: `url(${image})` }}>
             <Avatar className="story__avatar" src={profilePicture} />
             <h4>{title}</h4>
        </div>
    )
}

export default Story
