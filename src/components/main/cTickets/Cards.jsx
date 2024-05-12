import React, { useState } from "react";
import ticketsCard from "../../../services/images/tickets/tickets";
import "./card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
function Card() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="t-main">
        <details>

          <summary>

            <div className="t-card-info">

              <div className="t-card-info-date">
                <span className="t-card-info-date-text">
                  {ticketsCard[0].date}
                </span>
              </div>

              <div className="t-card-info-mainEvent">
                <p>Brock</p>
                <p>vs</p>
                <p>Lesnar</p>
              </div>

              <div className="t-card-info-brand">
                <p>aew</p>
              </div>
            </div>

          </summary>

          <div class="t-card-new-container">
            <div class="t-card-show">
              <div className="t-card-show-fights">
                <h4>Fights</h4>
                <ul>
                  <li>
                    <p>Jorge masvidal</p>
                    <span> VS </span>
                    <p>Inio Asano</p>
                  </li>
                  <li>
                    <p>Jorge masvidal</p>
                    <span> VS </span>
                    <p>Inio Asano</p>
                  </li>
                  <li>
                    <p>Jorge masvidal</p>
                    <span> VS </span>
                    <p>Inio Asano</p>
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
                <a href="/home" className="buy-tickets">
                  Buy Tickets
                </a>
              </div>
            </div>
          </div>

        </details>
      </main>
    </>
  );
}

export default Card;
