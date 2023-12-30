import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='bg-gray-400 hover:bg-gray-500 text-black font-bold py-2 px-4 border rounded'>
            {name}
        </button>
    </div>
  )
}

export default Button