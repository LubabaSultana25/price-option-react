import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Daisynav from './Components/DaisyNav/DaisyNav'
import NavBar from './Components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar></NavBar>
   <Daisynav></Daisynav>
    
      <h1 className='text-7xl'>React by Lubaba</h1>
      
     
    </>
  )
}

export default App
