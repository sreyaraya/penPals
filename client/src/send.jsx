import { useState } from 'react'
import './App.css'
import { Outlet, Link, useParams, useNavigate } from "react-router-dom";
import { ChakraProvider, PopoverBody } from '@chakra-ui/react'
import bg from './assets/bg.jpg'
import Confirmation from './confirmation.jsx'
//import ping from "./assets/ping.mp3"
import axios from "axios"
import { useEffect } from 'react';

function Record() {
  const [note, setNote] = useState({
    name: "",
    entry: ""
  });

  const[isNew, setIsNew] = useState(true);
  const[curr, setCurr] = useState("")
  const params = useParams()
  const navigate = useNavigate();

  async function onSubmit(e) {
    console.log(curr)
    let elem = {
      name: "sreya",
      record: "first"
    }
    e.preventDefault();
    const person = { ...note };
    try {
      let response;
      if (isNew) {
        // if we are adding a new record we will POST to /record.
        response = await fetch("http://localhost:5052/record", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(elem),
        });
      } else {
        // if we are updating a record we will PATCH to /record/:id.
        response = await fetch(`http://localhost:5052/record/${params.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: person,
        });
      }
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('A problem occurred adding or updating a record: ', error);
    } finally {
      setNote({ name: "", position: "", level: "" });
      navigate("/");
    }
  }

  const onChange = (e) => {
    setCurr(e.target.value)
    //setNote(e.target.value);
    console.log(note)
  };

  return (
    <div className="main" style=
    {{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', width: '100vw',
    height: '100vh', margin: 0}}
    >
    <h1>Write a note</h1>
     <div className="note center">
      <textarea type="text" value={curr} onChange={onChange} id="text" cols="30" rows="10" placeholder=''></textarea>
      <div className="send" onClick={onSubmit}><Link to={`/success`}>Send</Link></div>
     </div>
    </div>
  )
}

function App() {
  const [note, setNote] = useState("")
  let audio = new Audio("/ping.mp3")

  const start = () => {
    audio.play()
    console.log(note)

    if(!note){
      //setError(<p>Please type in a message</p>)
      console.log("no note")
    }

    postData()
    //post this value
  }

  //post this on 
  const onChange = (e) => {
    setNote(e.target.value);
    console.log(note)
  };

  const axiosPostData = async() =>{
    const postData = {
      //add user
      text: note
    }

    await axios.post('http://localhost:4000/send', postData)
    //.then(res = setError(<p>res.data</p>))
  }


  return (
    <div className="main" style=
    {{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', width: '100vw',
    height: '100vh', margin: 0}}
    >
    <h1>Write a note</h1>
     <div className="note center">
      <textarea type="text" value={note} onChange={onChange} id="text" cols="30" rows="10"></textarea>
      <div className="send" onClick={start}><Link to={`/success`}>Send</Link></div>
     </div>
    </div>
  )
}

export default Record
