import React from 'react'

const inputs = () => {
  return (
    <div className=' flex flex-row justify-center my-6'>
        <div className=''>
            <input type="text" placeholder='search by city...' className='text-gray-500 text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase' />
        </div>
    </div>
  )
}

export default inputs
