//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './cpy.css'
import bg from './assets/bg.jpg'
import Nav from './pages/nav.jsx'
import Note from './pages/note.jsx'
import { useState } from 'react'
import { useEffect } from 'react'
//import ping from "./assets/ping.mp3"

//map from data list towards array of notes + group render
  //1. u-data base
  //2. indiv-recieved
  //3. sent database
  
function App() {
  const [open, setOpen] = useState(false)
  let open1 = true;
  let open2 = true;

  function click(){
    setOpen(!open)
  }

  let def = "https://images.unsplash.com/photo-1476249202953-93ec0d185ab7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUxfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D"
  return (
    <div className="body">
    <div className="main" style=
    {{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', width: '100vw',
    height: '100vh', margin: 0}}
    >
      <Nav open={open} bttn={open2} toggleSidebar={click}></Nav>
      <div className="notes">
      <Note text="lorem ipsum delo..." img={def}></Note>
      <Note text="lorem ipsum delo..." img={def}></Note>
      <Note text="lorem ipsum delo..." img={def}></Note>
      <Note text="add note redirect || add in note || view note redirect || preview" img="https://images.unsplash.com/photo-1519731076138-ad173250029a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYxfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D"></Note>
      <Note text="lorem ipsum delo..."></Note>
      </div>
      
    </div>
    </div> 
  )
}

export default App
