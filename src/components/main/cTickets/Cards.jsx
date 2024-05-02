import React from 'react'
import ticketsCard from '../../../services/images/tickets/tickets'
import './card.css'

function Card({day = 'Sunday', date = '4/27'}) {
  return (
    <>
        <main className='t-main'>
          <div className='t-card'>
            <a href="" className='t-card-link'>
              <div className='t-card-info'>
                <div className='t-card-info-date'>
                  <span className='t-card-info-date-text'>{ticketsCard[0].date}</span>
                </div>
                <div className='t-card-info-logo'>
                  <img className='logoTitle' src={ticketsCard[0].logo} alt="" />
                </div>
              </div>
            <div className='t-card-day'>
              <span><h4 className=''>{ticketsCard[0].day}</h4></span>
            </div>
            </a>
          </div>
        </main>
    </>

  )
}

export default Card