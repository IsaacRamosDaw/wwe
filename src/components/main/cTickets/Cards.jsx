import React, { useState } from "react";
import "./card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import TicketsData from '../../../../public/data/ticketsData/ticketsData'

function Card() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="t-main">
        {TicketsData.map(ticket => {
          return (
        <details>
          <summary>
            <div style={{backgroundImage: `${ticket.background}`}} className="t-card-info">

              <div className="t-card-info-date">
                <span className="t-card-info-date-text">
                  {ticket.day}
                </span>
              </div>

              <div className="t-card-info-mainEvent">
                <p>{ticket.mainEventFirstFighter}</p>
                <p>vs</p>
                <p>{ticket.mainEventSecondFighter}</p>
              </div>

              <div style={{backgroundColor: `${ticket.brandColor}`}} className="t-card-info-brand">
                <p>{ticket.brand}</p>
              </div>
            </div>
          </summary>

          <div class="t-card-new-container">
            <div class="t-card-show">
              <div className="t-card-show-fights">
                <h4 id="fights">Fights</h4>
                <ul>
                  <li>
                    <p id="text">{ticket.firstFightFighter_1}</p>
                    <span> VS </span>
                    <p id="text">{ticket.firstFightFighter_2}</p>
                  </li>
                  <li>
                    <p id="text">{ticket.secondFightFighter_1}</p>
                    <span> VS </span>
                    <p id="text">{ticket.secondFightFighter_2}</p>
                  </li>
                  <li>
                    <p id="text">{ticket.thirdFightFighter_1}</p>
                    <span> VS </span>
                    <p id="text">{ticket.thirdFightFighter_2}</p>
                  </li>
                </ul>
              </div>

              <div className="t-card-show-tickets">
                <div className="t-card-show-tickets-inputs">
                <button onClick={() => setCount(count+1)}><FontAwesomeIcon icon={faArrowUp}/></button>
                <div className="number-tickets">
                  {count}
                </div>
                <button onClick={() => setCount(count-1)}><FontAwesomeIcon icon={faArrowDown}/></button>
                </div>
                <a href="/home" className="buy-tickets">Buy Tickets</a>
              </div>
            </div>
          </div>
        </details>
          )
        })}
      </main>
    </>
  );
}

export default Card;
