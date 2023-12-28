import React from 'react'

const Header = () => {
  return (
    <div className='w-full grid grid-flow-col p-2 pb-6 m-2 shadow-xl'>
        <div className='flex col-span-2'>
            <img alt='logo' src='https://i.pngimg.me/thumb/f/720/5014052573020160.jpg' className='mr-12 w-8 h-6 mt-4'></img>
            <img alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1024px-Logo_of_YouTube_%282015-2017%29.svg.png'className='w-32 h-14'></img>
        </div>
        <div className='col-span-8'>
            <input type='text' className='border border-black w-2/3 h-10 rounded-lg mt-4 shadow-lg'></input>
            <button className='border border-black font-semibold p-2 rounded-full cursor-pointer ml-2 text-xl bg-black text-white'>Search</button>
        </div>
        <div className='flex justify-end'>
            <img alt='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&usqp=CAU'className=' w-12 h-12 mt-2 mr-4' ></img>
        </div>
    </div>
  )
}

export default Header