import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,  faBars } from '@fortawesome/free-solid-svg-icons'
import MenuHeader from './desplegableMenu/MenuHeader'
import { useState } from 'react'

function Header({T1,T2,T3,T4}){
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