import React, { useEffect, useState } from 'react'
import { YOUTUBE_API_KEY } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

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
        { videos.map((video)=>(
            <Link key={video.id} to={"/watch?v="+video.id}>
                <VideoCard info={video}/>
            </Link>
        
        ))}
    </div>
  )
}

export default VideoContainer