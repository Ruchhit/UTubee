import React from 'react'

const VideoCard = ({info}) => {

    const{snippet, statistics } = info;
    const{channelTitle ,title,thumbnails} = snippet;
    const{viewCount} = statistics;
  
    return (
    <div className='pb-2 cursor-pointer shadow-lg rounded-tr-lg rounded-tl-lg'>
         <img src={thumbnails.medium.url} alt='thumb' className='rounded-tl-lg rounded-tr-lg'/>
         <h3 className='text-lg font-bold pl-2 pt-2'>{ title}</h3>
         <h3 className='text-sm pl-2 pt-2'>{ channelTitle}</h3>
         <h6 className='pl-2'>View Count : {viewCount}</h6>
    </div>
  )
}

export default VideoCard