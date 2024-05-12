import React from 'react'
import './menuHeader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'

function MenuHeader({condition}){
  return (
    <div className={`h-desplegable-menu-container ${condition ? "active" : ""}`}>
      <div className="menu-items">
        <ul className='items-list'>
          <li className='list-item'><a href="/home" className='header-links'>HOME</a></li>
          <li className='list-item'><a href="/fighters" className='header-links'>SUPERSTARS</a></li>
          <li className='list-item'><a href="/shop" className='header-links'>SHOP</a></li>
          <li className='list-item'><a href="/tickets" className='header-links'>TICKETS</a></li>
        <div>
          <a href="">
            <FontAwesomeIcon icon={faGithub}/>
          </a>
          <p>Follow this project on GitHub</p>
        </div>
        </ul>

      </div>
      <div className='barrita'></div>
    </div>
  )
}

export default MenuHeader