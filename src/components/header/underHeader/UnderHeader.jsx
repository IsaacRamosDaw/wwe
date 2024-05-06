import React from 'react'
import './UnderHeader.css'

function UnderHeader({title, numContainers}) {
  const containers = Array.from({ length: numContainers }, (_, index) => index);

  return (
    <div className='underHeader'>
      <div className='uHeaderTitle'>
        <h2>{title}</h2>
      </div>

      <div className='uHeaderImgContainer'>
        {containers.map((_, index) => (
          <div className='uHeaderContainers' key={index}>
            <p>10:00</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UnderHeader