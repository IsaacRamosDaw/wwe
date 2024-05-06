import React from "react";
import ticketsCard from "../../../services/images/tickets/tickets";
import "./card.css";

function Card() {
  return (
    <>
      <main className="t-main">
          <details>
            <summary>
        <div className="t-card">
              <div className="t-card-info">
                <div className="t-card-info-date">
                  <span className="t-card-info-date-text">
                    {ticketsCard[0].date}
                  </span>
                </div>
                <div className="t-card-info-logo">
                  <img className="logoTitle" src={ticketsCard[0].logo} alt="" />
                </div>
              </div>
              <div className="t-card-day">
                <span>
                  <h4 className="">{ticketsCard[0].day}</h4>
                </span>
              </div>
        </div>
            </summary>
            <div className="t-card-new-container">
              <div className="t-card-show">
                <div className="t-card-show-info"></div>
                <div className="t-card-show-img"></div>
              </div>
            </div>
          </details>
      </main>
    </>
  );
}

export default Card;
