import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Send from './send.jsx'
import Sent from './sent.jsx'
import Rec from './received.jsx'
import Con from './confirmation.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RecordList from './components/RecordList.jsx'
import Record from './components/Record.jsx'
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [{
            path: "/",
            element: <RecordList></RecordList>
        },],
    },
  {
    path: "/",
    element: <Send></Send>
  },
  {
    path: "/sent",
    element: <Sent></Sent>
  },
  {
    path: "/success",
    element: <Con></Con>
  },
  {
    path: "/my-messages",
    element: <Rec></Rec>
  },
  {
    path: "/edit/:id",
    element: <App />,
    children: [
      {
        path: "/edit/:id",
        element: <Record />,
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
