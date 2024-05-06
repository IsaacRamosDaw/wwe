import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faGithub, faTwitch, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faUser, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'
import UnderHeader from './underHeader/UnderHeader'
import MenuHeader from './desplegableMenu/MenuHeader'

function Header({T1,T2,T3,T4}){
  return (
    <>
      <header id='header'>
        <div className='hMenuContainer'>
          <FontAwesomeIcon icon={faBars}/>
        </div>
        <MenuHeader/>
        <div className='hLogoContainer'>
          <a href="/home"><img src="/images/header/wweLogo.png" alt=""/></a>
          <nav className='hTextContainer'>
            <ul>
              <li><a href="/fighters">{T1}</a></li>
              <li><a href="/shop">{T2}</a></li>
              <li><a href="/tickets">{T3}</a></li>
            </ul>
          </nav>
        </div>
        <div className='hNetWork'>
          <div className='hIconNetWork'>
              <a href="https://www.wwe.com/"><img src="/images/header/wweMiniLogo.svg" alt="" />
              <p>NETWORK</p></a>
          </div>
            <div className='separator'> </div>
            <ul>
              <a href="/account"><li><FontAwesomeIcon icon={faUser}/></li></a>
            </ul>
        </div>
      </header>
      {/* <UnderHeader title="Latest Matchest" numContainers={6}/> */}
    </>
  )
}

export default Header