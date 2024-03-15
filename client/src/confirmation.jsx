//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './cpy.css'
import { Outlet, Link } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import bg from './assets/bg.jpg'
import react from "react"
//import ping from "./assets/ping.mp3"

function App() {
  //const [count, setCount] = useState(0)
  let audio = new Audio("/ping.mp3")

  const start = () => {
    audio.play()
  }

  return (
    <div className="main" style=
    {{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', width: '100vw',
    height: '100vh', margin: 0}}
    >
    <div className="con">
        <div className="title">
        <h1>Congratulations! You just sent a message.</h1>
        </div>
    </div>
    <div className="btns">
        <div className="btn" onClick={start} >
        <Link to={`/`}>Write Another Note</Link>
        </div>
        <div className="btn" onClick={start} >
        <Link to={`/sent`}>See your notes</Link>
        </div>
    </div>
    </div> 
  )
}

export default App
