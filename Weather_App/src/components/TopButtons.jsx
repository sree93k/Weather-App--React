import React from 'react'
import { FaReact } from "react-icons/fa";
const TopButtons = () => {

    const cities=[
        {
            id:1,
            name:"New York"
        },
        {
            id:2,
            name:"Paris"
        },
        {
            id:3,
            name:"Toronto"
        },
        {
            id:4,
            name:"Mumbai"
        }

    ]
  return (
    <div className='flex items-center justify-around my-6'>
        {cities.map((city)=>(
                <button key={city.id} className='text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounde tranis ease-in'>{city.name}</button>
            ))
        }
     

      
    </div>
  )
}

export default TopButtons
