import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faGithub, faTwitch, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faUser, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'
import UnderHeader from './underHeader/UnderHeader'
import Footer from '../footer/Footer'

function Header({T1,T2,T3,T4,T5}) {

  return (
    <>
      <header id='header'>
        <div className='hMenuContainer'>
          <FontAwesomeIcon icon={faBars}/>
        </div>
        <div className='hLogoContainer'>
          <a href="/home"><img src="/images/header/wweLogo.png" alt=""/></a>
          <nav className='hTextContainer'>
            <ul>
              <li><a href="*">{T1}</a></li>
              <li><a href="*">{T2}</a></li>
              <li><a href="*">{T3}</a></li>
              <li><a href="/tickets">{T4}</a></li>
              <li><a href="*">{T5}</a></li>
            </ul>
          </nav>
        </div>

        <div className='hNetWork'>
          <div className='hIconNetWork'>
              <img src="/images/header/wweMiniLogo.svg" alt="" />
              <p>NETWORK</p>
          </div>
            <div className='separator'> </div>
            <ul>
              <li><FontAwesomeIcon icon={faUser} /></li>
            </ul>
        </div>
      </header>
      <UnderHeader title="Latest Matchest" numContainers={6}/>
    </>
  )
}

export default Header