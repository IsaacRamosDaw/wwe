import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,  faBars, faRss } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import MenuHeader from './desplegableMenu/MenuHeader'

function Header({T1,T2,T3}){
  const [menu, setMenu] = useState(false);


  return (
    <>
      <header id='header'>
        <div className='hMenuContainer'>
        <FontAwesomeIcon icon={faBars} onClick={() => setMenu(menu ? false : true)}/>
        </div>
        <MenuHeader condition={menu}/>
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
          <a href="https://www.wwe.com/">
            <div className='hIconNetWork'>
                <a>
                  <img src="/images/header/wweMiniLogo.svg" alt="" />
                </a>
                <p>NETWORK</p>
            </div>
          </a>
            <div className='separator'> </div>
            <ul>
              <li className='rss'><a className='header-icons' href="/account"><FontAwesomeIcon icon={faUser}/></a><a href="/rss/rss.xml"><FontAwesomeIcon icon={faRss}/></a></li>
            </ul>
        </div>
      </header>
    </>
  )
}

export default Header