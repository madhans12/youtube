import React from 'react'
import './Relatedvideos.css'
import Videocard from './Videocard'
import img from './youtube-logo.png'
import Sidebar from './Sidebar'


const Relatedvideos = () => {
  return (
    <div className='r1'>
        <Sidebar/>
    <div className='relatedvideos'>
      <h2>Recommended </h2>
      <div className='relatedvideos-videos'>
 <Videocard 
    title="Let's Build a YouTube Clone with REACT JS for Beginners"
    views="2M Views"
    timestamp="1 week ago"
    channelimage=''
    channelname="Clever Programmer"
    image={img}/>
<Videocard 
    title="Let's Build a YouTube Clone with REACT JS for Beginners"
    views="2M Views"
    timestamp="1 week ago"
    channelimage=''
    channelname="Clever Programmer"
    image={img}
/>
<Videocard 
    title="Let's Build a YouTube Clone with REACT JS for Beginners"
    views="2M Views"
    timestamp="1 week ago"
    channelimage=''
    channelname="Clever Programmer"
    image={img}
/>
<Videocard 
    title="Let's Build a YouTube Clone with REACT JS for Beginners"
    views="2M Views"
    timestamp="1 week ago"
    channelimage=''
    channelname="Clever Programmer"
    image={img}
/>
<Videocard 
    title="Let's Build a YouTube Clone with REACT JS for Beginners"
    views="2M Views"
    timestamp="1 week ago"
    channelimage=''
    channelname="Clever Programmer"
    image={img}
/>
<Videocard 
    title="Let's Build a YouTube Clone with REACT JS for Beginners"
    views="2M Views"
    timestamp="1 week ago"
    channelimage=''
    channelname="Clever Programmer"
    image={img}
/>
<Videocard 
    title="Let's Build a YouTube Clone with REACT JS for Beginners"
    views="2M Views"
    timestamp="1 week ago"
    channelimage=''
    channelname="Clever Programmer"
    image={img}
/>
    </div>
    </div>
    </div>
    )
}

export default Relatedvideos