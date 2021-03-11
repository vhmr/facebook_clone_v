import React from 'react'
import './Widget.css'

function Widget() {
    return (
        <div className="widget">
            <iframe 
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdualosx%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=130674224005025"
                width="400"
                height="100%"
                scrolling="no"
                frameBorder="0"
                allowTransparency="true"
                allow="encrypted-media"
                style={{ border: "none", overflow: "hidden"}}
            ></iframe>
        </div>
    )
}

export default Widget
