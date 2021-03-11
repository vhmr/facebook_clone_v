import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessengerSender from './MessengerSender'
import Post from './Post'

function Feed() {
    return (
        <div className="feed">
           <StoryReel />
           <MessengerSender />

           <Post 
                profilePic="https://scontent.fmyc1-1.fna.fbcdn.net/v/t1.0-1/cp0/p40x40/139871845_10224100534770621_3731086448194564377_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=7206a8&_nc_ohc=bTWNvHavVGoAX-70Ja5&_nc_oc=AQk4RhJVqvxvoyhXvJlUX3_BrCGZ4FyAeRN03un6-dAZEMi9Nalzuafj4PI0feD1bNc&_nc_ht=scontent.fmyc1-1.fna&tp=27&oh=db8a41979c2b787da6a9ccf9f6b68599&oe=606EFB9F"
                message="Oink"
                image="https://scontent.fmyc1-1.fna.fbcdn.net/v/t1.0-0/p480x480/159245315_10224520319304972_7971585722756943441_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_ohc=0W13cuE5OgIAX-lTfFQ&_nc_ht=scontent.fmyc1-1.fna&tp=6&oh=993fca0b1ece46d58f4ecff0a7df3018&oe=606DE34C"
                username="Maria Montoya"
                timestamp="8h"
            /> 

            <Post 
                profilePic="https://scontent.fmyc1-1.fna.fbcdn.net/v/t1.0-1/cp0/p40x40/128401495_103420484962746_6759569473384799337_n.png?_nc_cat=109&ccb=1-3&_nc_sid=1eb0c7&_nc_ohc=q0XnI1ZBAAoAX8TIpTL&_nc_ht=scontent.fmyc1-1.fna&_nc_tp=30&oh=eba010f7987dbfd3fb127cbb0808b6cb&oe=606DCA29"
                message="Learn why Top developers choose Remotely.Works to start working for US StartUps. 
                High Salaries. Long Term Contracts."
                image=""
                username="Remotely Latam"
                timestamp="8h"
            /> 
        </div>
    )
}

export default Feed
