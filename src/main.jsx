import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Fighters from './pages/fighters/Fighters.jsx'
import Contact from './pages/contact/Contact.jsx'
import Tickets from './pages/Tickets/Tickets.jsx'
import Shop from './pages/shop/Shop.jsx'
import Account from './pages/account/Account.jsx'
import Cookies from './pages/infoPages/infoCookies/Cookies.jsx'
import Privacy from './pages/infoPages/infoPrivacy/Privacy.jsx'
import Security from './pages/infoPages/Security/Security.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='*' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/fighters' element={<Fighters/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/tickets' element={<Tickets/>}/>
        <Route path='/cookies' element={<Cookies/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path='/security' element={<Security/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
