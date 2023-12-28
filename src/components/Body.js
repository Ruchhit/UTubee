import React from 'react'
import Sidebar from '../components/Sidebar'
import MainContainer from '../components/MainConatiner'
const Body = () => {
  return (
    <div className='grid grid-flow-col'>
        <Sidebar/>
        <MainContainer/>
    </div>
  )
}

export default Body