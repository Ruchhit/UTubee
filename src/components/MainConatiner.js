import React from 'react'
import Button from './Button'
import VideoContainer from './VideoContainer'

const MainConatiner = () => {
  return (
    <div className='col-span-11 p-2 m-2 overflow-x-hidden overflow-y-auto'>
        <div className='flex gap-2 overflow-x-scroll'>
            <Button name="All"/>
            <Button name="Music"/>
            <Button name="News"/>
            <Button name="World"/>
            <Button name="WebD"/>
            <Button name="Java"/>
            <Button name="Movies"/>
            <Button name="National"/>
            <Button name="Music"/>
            <Button name="News"/>
            <Button name="World"/>
            <Button name="International"/>
            <Button name="Java"/>
            <Button name="Movies"/>
            <Button name="All"/>
            <Button name="Music"/>
            <Button name="News"/>
            <Button name="World"/>
            <Button name="WebD"/>
            <Button name="Java"/>
            <Button name="Movies"/>
            <Button name="National"/>
            <Button name="Music"/>
        </div>
        <div>
            <VideoContainer/>
        </div>
    </div>
  )
}

export default MainConatiner