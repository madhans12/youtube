import { Avatar } from '@mui/material'
import React from 'react'
import './Videocard.css'

const Videocard = ({image,channelname,timestamp,views,channelimage,title}) => {
  return (
    <div className='videocard'>
        <img className='videocard-thumbnail' src={image} alt='image' />
        <div className='videocard-info'>
            <Avatar 
            className='videocard-avatar'
            alt={channelimage}
            src={channelimage}
            />
            <div className='videocard-text'>
                <h4>{title}</h4>
                <p>{channelname}</p>
                <p>{views}.{timestamp}</p>

            </div>

        </div>
    </div>
  )
}

export default Videocard