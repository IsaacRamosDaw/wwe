import React from "react";
import "./superstars.css";
import SuperStarsData from "../../../../public/data/superStarsData/superStarsData";

function Superstars() {
  return (
    <main className="wrestler-info-container">
      {SuperStarsData.map(superStar => {
        return(
      <div key={superStar.id} className="wrestler-info-content">
        <div className="wrestler-image">
          <div className="wrestler-image-name">
            <h3>{superStar.name}</h3>
          </div>
          <img
            src={superStar.img}
          />
        </div>

        <div className="wrestler-details">
          <div className="wrestler-details-h-p-container">
            <div className="wrestler-details-h">
              <span className="details-top"></span>
              <div>
                <p>ORIGIN</p> <span>{superStar.origin}</span>
              </div>
              <div>
                <p>HEIGHT</p> <span>{superStar.height}</span>
              </div>
              <div>
                <p>CHAMPIONS</p> <span>{superStar.Champion}</span>
              </div>
              <div>
                <p>FIGHTS</p> <span>{superStar.Fights}</span>
              </div>
              <div>
                <p>NICKNAME</p> <span>{superStar.nickname}</span>
              </div>
            </div>
          </div>

          <div className="wrestler-details-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
              laudantium, ducimus inventore cupiditate 
              laudantium, ducimus inventore cupiditate 
              laudantium, ducimus inventore cupiditate 
              laudantium, ducimus inventore cupiditate 
              laudantium, ducimus inventore cupiditate 
              quibusdam error, maiores ex eveniet libero perspiciatis et,.
            </p>
            <small>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
              laboriosam numquam!"
              laboriosam numquam!"
              laboriosam numquam!"
            </small>
          </div>
        </div>
      </div>
        )
      })}
    </main>
  )
}

export default Superstars;
