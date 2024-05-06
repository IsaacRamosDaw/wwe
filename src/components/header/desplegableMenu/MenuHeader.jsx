import React from 'react'
import './menuHeader.css'
function MenuHeader() {
  return (
    <div className='h-desplegable-menu-container hiddenMenu'>
      <div className="menu-items">
        <ul className='items-list'>
          <li className='list-item'><a href="">Top</a></li>
          <li className='list-item'><a href="">Superstars</a></li>
          <li className='list-item'><a href="">History</a></li>
          <li className='list-item'><a href="">Top</a></li>
          <li className='list-item'><a href="">Bottom</a></li>
          <li className='list-item closeMenu'>Close Me</li>
        </ul>
      </div>
    </div>
  )
}

export default MenuHeader