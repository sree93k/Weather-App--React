import React from 'react'
import {FaThermometerEmpty} from 'react-icons/fa'
import {BiSolidDropletHalf } from 'react-icons/bi'
import {FiWind} from 'react-icons/fi'
import {GiSunrise,GiSunset} from 'react-icons/gi'
import {MdKeyboardArrowUp,MdKeyboardArrowDown} from 'react-icons/md'
const TempAndDetails = () => {

    const verticalDetails=[
        {
            id:1,
            Icon: FaThermometerEmpty,
            title:"Real,Feel",
            value:"25°C"
        },
        {
            id:2,
            Icon: BiSolidDropletHalf,
            title:"Humidity",
            value:"346%"
        },
        {
            id:3,
            Icon: FiWind,
            title:"Wind",
            value:"11 km/hr"
        },
    ]

    const horizontalDetails=[
        {
            id:1,
            Icon: GiSunrise,
            title:"Sunrise",
            value:"05:33AM"
        },
        {
            id:2,
            Icon: GiSunset,
            title:"Sunset",
            value:"06:44PM"
        },
        {
            id:3,
            Icon: MdKeyboardArrowUp,
            title:"High",
            value:"37°"
        },
        {
            id:4,
            Icon: MdKeyboardArrowDown,
            title:"Low",
            value:"7°"
        },
    ]
  return (
   <div>
    hi
     <div className=' flex items-center justify-center py-6 text-xl text-cyan-300'>
      <p className=''>Rain</p>
      </div>
      <div className='flex flex-row items-center justify-between py-3'>
        <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="weather icon"  className='w-20'/>
        <p className='text-5xl'>34°</p>

        <div className='flex flex-col space-y-3 items-start'>
        {
                    verticalDetails.map(({id,Icon,title,value})=>(
                        <div key={id} className='flex font-light text-sm items-center justify-center'>
                        <Icon className='mr-1' size={18}/>
                        {title} <span className='font-medium ml-1'>{value}</span>
                    </div>  
                    ))
                }
           
        </div>


      </div>
   </div>
  )
}

export default TempAndDetails
