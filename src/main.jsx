import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Fighters from './pages/fighters/Fighters.jsx'
import Contact from './pages/contact/Contact.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='*' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/fighters' element={<Fighters/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
