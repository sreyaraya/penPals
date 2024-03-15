//import { useState } from 'react'
import '../nav.css'
import {Link } from "react-router-dom";

//import ping from "./assets/ping.mp3"

const SideBar = props => {
  const sidebarClass = props.open ? "sidebar open" : "sidebar";
  return (
    <div className={sidebarClass}>
      <div className="div">
      <div><Link to={`/`}>PenPals</Link></div>
      <div><Link to={`/sent`}>Pens</Link></div>
      <div><Link to={`/my-messages`}>Pals</Link></div>
      </div>
      <button onClick={props.toggleSidebar} className="sidebar-toggle">
        Toggle Sidebar
      </button>
    </div>
  );
};
export default SideBar;

function App(props) {
  //const [count, setCount] = useState(0)
  const toggleOpen = props.open ? "open" : "collapsed"
  const btnOpen = props.bttn ? "sidebar-open" : "sidebar-collapsed"
  return (
    <div className={toggleOpen}>
        <div className="nav">
        <h1>PenPals</h1>
        <h1>Pens</h1>
        <h1>Pals</h1>
        </div>
        <button onClick={props.toggleSidebar} className={btnOpen}>
        Toggle Sidebar
      </button>
    </div>
    

  )
}

