 import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'

function Sidebar() {
    return (
        <div className="sidebar">
           <SidebarRow 
            src="https://avatars.githubusercontent.com/u/9949217?s=60&v=4"
            title="Victor Montoya"
           />
           <SidebarRow 
            title='Covid-19 Information center' 
            Icon={LocalHospitalIcon}
            /> 
           <SidebarRow Icon={EmojiFlagsIcon} title='Pages' /> 
           <SidebarRow Icon={PeopleIcon} title='Friends' /> 
           <SidebarRow Icon={ChatIcon} title='Messenger' /> 
           <SidebarRow Icon={StorefrontIcon} title='Marketplace' /> 
           <SidebarRow Icon={VideoLibraryIcon} title='Videos'/>  
           <SidebarRow Icon={ExpandMoreOutlinedIcon} title='Marketplace'/>  

        </div>
    )

}

export default Sidebar
