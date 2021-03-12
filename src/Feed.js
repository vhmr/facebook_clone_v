import React, { useState, useEffect} from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessengerSender from './MessengerSender'
import Post from './Post'
import db from './firebase'

function Feed() {

    const [posts, setPost] = useState([])

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPost(snapshot.docs.map((doc) =>({ id: doc.id, data: doc.data() })))
        })
    }, [])

    return (
        <div className="feed">
           <StoryReel />
           <MessengerSender />

        {posts.map((post) => (
           <Post 
                key={post.data.id}
                profilePic={post.data.profilePic}
                message={post.data.message}
                image={post.data.image}
                username={post.data.username}
                timestamp={post.data.timestamp}
            /> 
        ))}

        </div>
    )
}

export default Feed
