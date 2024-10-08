import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import About from './Components/About'
import LoginSignup from './Components/LoginSignup'

function App() {
       const [count, setCount] = useState(0)
       const [showLogin, setShowLogin] = useState(false)

  return (
    <>
       
       <Navbar setShowLogin = {setShowLogin}/>
      {showLogin?<LoginSignup setShowLogin = {setShowLogin}/>:<></>}
        <About/>
        
     
      
    </>
  )
}

export default App
