import React from 'react'
import TopButtons from './components/TopButtons'
import Inputs from './components/inputs'
const App = () => {
  return (
      <div className='mx-auto mac-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br 
      shadow-xl shadow-gray-400 from-cyan-600 to-blue-700'>
        <TopButtons/>  
        <Inputs/>
    </div>
  )
}

export default App