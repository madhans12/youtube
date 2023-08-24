import React from 'react'
import  "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
     <div className="header">
    <div className='header-left'>
    <MenuIcon/>
  <Link to='/relatedvid'><img className='header-logo' to='./'src='https://www.sketchappsources.com/resources/source-image/youtube-logo.png' alt='logo'/></Link>
    </div>
    <div className='header-input'>
    <input type='text'  placeholder='search'/>
   <Link to='/search'> <SearchOutlinedIcon className='search-icon'/></Link>
    </div>
    <div className='header-right'>
    
    <VideoCallOutlinedIcon className='header-right'/>
    <AppsOutlinedIcon className='header-right'/>
    <NotificationsActiveOutlinedIcon className='header-right'/>
    <AccountCircleOutlinedIcon/>
    </div>
    </div>
  )
}

export default Header