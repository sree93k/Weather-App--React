import React, { useState } from 'react'
import {BiSearch,BiCurrentLocation} from 'react-icons/bi'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

const inputs = ({setQuery,setUnits}) => {
  const [city,setCity]=useState('')
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSearchClick=()=>{
    if(city!==''){
    setQuery({q:city})
    clearSuggestions();
    }
  }

  const handleLocationClick=()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position=>{
        const {latitude,longitude}=position.coords
        setQuery({lat:latitude,lon:longitude})
        clearSuggestions();
      })
    }
  }

  const handleChange=(e)=>{
    setValue(e.currentTarget.value)
    setCity(e.currentTarget.value)
    console.log("value",value);
  }
  return (
    <div className=' flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input
            value={city}
            onChange={handleChange}
             type="text"
              placeholder='search by city...'
               className='text-gray-500 text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase '
                />
            <BiSearch 
            size={30}
            className='cursor-pointer transistion ease-out hover:scale-125'
            onClick={handleSearchClick}
            />
            <BiCurrentLocation
            size={30}
            className='cursor-pointer transistio ease-out hover:scale-125'
            onClick={handleLocationClick}
            />
        
        <div className=' flex flex-row w-1/4 items-center justify-center'>
            <button className=' text-2xl font-medium transition ease-out
            hover:scale-125' onClick={()=>setUnits('metric')}>°C</button>
            <p className='text-2xl font-medium mx-1'>|</p>
             <button className=' text-2xl font-medium transition ease-out
            hover:scale-125' onClick={()=>setUnits('imperial')}>°F</button>
        </div>
        </div>
        
    </div>

  )
}

export default inputs
