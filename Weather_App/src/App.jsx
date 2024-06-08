import React ,{useEffect, useState}from 'react'
import TopButtons from './components/TopButtons'
import Inputs from './components/inputs'
import TimeAndLocation from './components/TimeAndLocation'
import TempAndDetails from './components/TempAndDetails'
import ForeCast from './components/ForeCast'
import getFormattedWeatherData from './services/weatherService'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BgVideo from '../public/bg_video.mp4'



const App = () => {
  const [query, setQuery] = useState({q:'calicut'})
  const [units, setUnits] = useState('metric')
  const [weather,setWeather]=useState(null)

//   function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }
  const getWeather=async()=>{
    const cityName=query.q? query.q:"current location"
    // toast.info(`Search For Weather on ${capitalizeFirstLetter(cityName)}`)
    await getFormattedWeatherData({...query,units})
    .then((data)=>{
      toast.success(`Weather data on ${data.name}, ${data.country}`)
      console.log("teh datat is ",data);
      setWeather(data)
    })
    .catch((error)=>{
      console.log("error is @@>>>###>>>",error)
    })

  }
useEffect(()=>{
  console.log('The Set weather is',weather);
})

  useEffect(()=>{
 
    getWeather()
  },[query,units])

  const formatBackground = () => {
    if (!weather) return 'bg-gradient-to-br from-cyan-600/90 to-blue-700/30';
    const threshold = units === 'metric' ? 20 : 60;
    if (weather.temp <= threshold) return 'bg-gradient-to-br from-cyan-600/90 to-blue-700/30';
    return 'bg-gradient-to-br from-yellow-600/90 to-orange-700/30';
  };

  return (
    <div className="relative  h-full w-full ">
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover -z-10 ">
        <source src={BgVideo} type="video/mp4" />
      </video>
      <div className={`relative mx-auto max-w-screen-lg mt-0 py-1 px-8
        shadow-xl shadow-gray-400 ${formatBackground()} rounded-lg`}>
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} setUnits={setUnits} />
        {weather && (
          <>
            <TimeAndLocation weather={weather} />
            <TempAndDetails weather={weather} units={units} />
            <ForeCast title="3 hour step forecast" data={weather.hourly} />
            <ForeCast title="daily forecast" data={weather.daily} />
          </>
        )}
        <ToastContainer
         position="top-center"
          autoClose={500}
           hideProgressBar={true}
            theme="colored"
            closeOnClick
            draggable
            newestOnTop
             />
      </div>

     
    </div>
   
  )
}

export default App
