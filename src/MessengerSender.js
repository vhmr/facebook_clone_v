import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './MessengerSender.css'
import VideocamIcon from '@material-ui/icons/Videocam'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import { useStateValue } from './StateProvider'


function MessengerSender() {

    const [input, setInput] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
    }
    const [{user}, dispatch] = useStateValue()

    return (
        <div className="messengerSender">
            <div  className="messengerSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="messengerSender__input" 
                        type="text"
                        placeholder={`what's on your mind? ${user.displayName}`}
                    />
                    <input  
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="image URL (Opcional)"
                    />
                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>
            <div className="messengerSender__bottom">
                <div className="messengerSender__option">
                    <VideocamIcon style={{ color: "red" }}/>
                    <h3>Live Video</h3>
                </div>
                <div className="messengerSender__option">
                    <PhotoLibraryIcon style={{ color: "green" }}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messengerSender__option">
                    <InsertEmoticonIcon style={{ color: "orange" }}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessengerSender
