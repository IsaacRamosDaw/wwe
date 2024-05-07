import React from 'react'
import './menuHeader.css'
function MenuHeader({condition}){
  return (
    <div className={`h-desplegable-menu-container ${condition ? "active" : ""}`}>
      <div className="menu-items">
        <ul className='items-list'>
          <li className='list-item'><a href="/home">HOME</a></li>
          <li className='list-item'><a href="/fighters">SUPERSTAR</a></li>
          <li className='list-item'><a href="/shop">SHOP</a></li>
          <li className='list-item'><a href="/tickets">TICKETS</a></li>
        </ul>
      </div>
    </div>
  )
}

export default MenuHeader