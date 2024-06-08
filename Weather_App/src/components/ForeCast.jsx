import React from 'react'

const ForeCast = ({title,data}) => {

  return (
    <div>
      <div className='flex items-center justify-start mt-6'>
        <p className=' font-medium uppercase'>{title}</p>
      </div>
      <hr className='my-1'/>
      <div className='flex items-center justify-between'>
        {data.map((item,index)=>(
            <div key={index} className='flex flex-col justify-center'>
                <p className='font-light text-sm'>{item.title}</p>
                <img
                 src={item.icon} 
                alt="weather icon"
                className='w-12 my-1' 
                />

                <p className='font-medium'>{`${item.temp.toFixed()}°C`}</p>

            </div>
        ))}

      </div>
    </div>
  )
}

export default ForeCast
