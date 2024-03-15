//import { useState } from 'react'
import './App.css'
import bg from './assets/bg.jpg'
import Rec from './send.jsx'
//import Outlet from "react-router-dom";

//import ping from "./assets/ping.mp3"


function App() {
  //const [count, setCount] = useState(0)
  return (
    <>
      <Rec></Rec>
    </>
    
  )
  /*let audio = new Audio("/ping.mp3")

  const start = () => {
    audio.play()
  }

  return (
    <div className="main" style=
    {{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', width: '100vw',
    height: '100vh', margin: 0}}
    >
    <h1>Write a note</h1>
     <div className="note center">
      <textarea type="text" name="" id="" cols="30" rows="10"></textarea>
      <div className="send" onClick={start}>Send</div>
     </div>
    </div>
  )*/
}

export default App
