import React from 'react'
import './Sidebar.css'
import Sidebarrow from './Sidebarrow'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Sidebar = () => {
  return (
    <div  className='sidebar'>
        <Sidebarrow Icon={HomeIcon} title="Home"/>
        <Sidebarrow Icon={WhatshotIcon} title="Trending"/>
        <Sidebarrow Icon={SubscriptionsIcon} title="Subscription"/>
        <hr/>
        <Sidebarrow Icon={VideoLibraryIcon} title="Library"/>
        <Sidebarrow Icon={HistoryIcon} title="History"/>
        <Sidebarrow Icon={OndemandVideoIcon} title="Your videos"/>
        <Sidebarrow Icon={WatchLaterIcon} title="Watch later"/>
        <Sidebarrow Icon={ThumbUpOffAltIcon} title="Liked video"/>
        <Sidebarrow Icon={ExpandMoreIcon} title="See more "/>
        <hr/>
    </div>
  )
}

export default Sidebar