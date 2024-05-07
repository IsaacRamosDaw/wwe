import React from "react";
import ticketsCard from "../../../services/images/tickets/tickets";
import "./card.css";

function Card() {
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
                <p>BROCK LESNAR <br /> VS <br/>JOHN CENA</p>
              </div>

              <div className="t-card-info-brand">
                <p>Raw</p>
              </div>
            </div>

          </summary>

          <div class="t-card-new-container">
            <div class="t-card-show">
              <div class="t-card-show-info"></div>
            </div>
          </div>

        </details>
      </main>
    </>
  );
}

export default Card;
