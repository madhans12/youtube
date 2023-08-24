import React from 'react'
import './Sidebarrow.css'

const Sidebarrow = ({Icon,title }) => {
  return (
    <div className='sidebar-row'>
        <Icon className='sidebarrow-icon'/>
        <h2 className='sidebarrow-title'>{title }</h2>
    </div>
  )
}

export default Sidebarrow;