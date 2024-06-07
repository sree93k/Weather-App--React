import React from 'react'
import TopButtons from './components/TopButtons'
import Inputs from './components/inputs'
import TimeAndLocation from './components/TimeAndLocation'
import TempAndDetails from './components/TempAndDetails'
import ForeCast from './components/ForeCast'
import getFormattedWeatherData from './services/weatherService'

const App = () => {

  const getWeather=async()=>{
    const data=await getFormattedWeatherData({q:'berlin'})
    console.log("app datda is",data);
  }
  getWeather()
  return (
    <div className='mx-auto mac-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br 
      shadow-xl shadow-gray-400 from-cyan-600 to-blue-700'>
      <TopButtons />
      <Inputs />
      <TimeAndLocation />
      <TempAndDetails />
      <ForeCast />
      <ForeCast />
    </div>

  )
}

export default App
