//import { useState } from 'react'
import '../cpy.css'
import bg from '../assets/sk.png'
//import ping from "./assets/ping.mp3"

const App = props => {
  //const [count, setCount] = useState(0)
  let audio = new Audio("/ping.mp3")

  const start = () => {
    audio.play()
  }

  return (
    <div className="main2" style=
    {{ backgroundImage: `url(${props.img})`}}
    >
        <p>{props.text}</p>
        <p>hello</p>
    </div> 
  )
}

export default App
