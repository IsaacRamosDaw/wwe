import React from 'react'
import './header.css'

function Header({T1,T2,T3,T4,T5}) {
  return (
    <header id='header'>
      <div className='hlogoContainer'>
        <img src="/images/header/wweLogo.png" alt=""/>
      </div>
      <div className='hTextContainer'>
        <ul>
          <li>{T1}</li>
          <li>{T2}</li>
          <li>{T3}</li>
          <li>{T4}</li>
          <li>{T5}</li>
        </ul>
      </div>
      <div className='hNetWork'>
        <div className='hIconNetWork'>
          <img src="/images/header/wweMiniLogo.svg" alt="" />
          <p>NETWORK</p>
        </div>
      </div>
    </header>
  )
}

export default Header