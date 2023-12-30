import React, { useEffect, useState } from 'react'
import { YOUTUBE_API_KEY } from '../utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {

       const [videos ,setVideoes]= useState([]);
       const getVideoes = async () => {
                  const response = await fetch(YOUTUBE_API_KEY);
                  const data = await response.json();
                  console.log(data.items);
                  setVideoes(data.items);
              }
    useEffect(()=>{
        getVideoes();
    },[])
  return (
    <div className='rounded-lg grid grid-cols-5 grid-flow-row gap-2 p-2 m-2'>
        {/* <VideoCard info={videos[0]}/> */}
        { videos.map((video)=>(
            <VideoCard key={video.id} info={video}/>
        ))}
    </div>
  )
}

export default VideoContainer