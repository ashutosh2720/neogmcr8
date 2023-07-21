import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from './App.jsx'
import './index.css'
import { MeetupProvider } from './contexts/meetupContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MeetupProvider>
        <App />
      </MeetupProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
