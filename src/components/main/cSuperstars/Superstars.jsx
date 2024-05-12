import React from "react";
import "./superstars.css";

const Superstars = ({
  imageUrl,
  name,
  surname,
  origin,
  height,
  fights,
  championships,
  bio,
}) => {
  return (
    <main className="wrestler-info-container">
      <div className="wrestler-info-content">
        <div className="wrestler-image">
          <div className="wrestler-image-name">
            <h3>The Rock</h3>
          </div>
          <img
            src="https://media.gettyimages.com/id/142809003/es/foto/miami-gardens-fl-dwayne-the-rock-johnson-looks-on-during-his-match-against-john-cena-during.jpg?s=612x612&w=0&k=20&c=TQXOHAWfIboQlAuq8BxZwIZpyNtQO9X6V2iXAbVw6sU="
            alt={`${name}`}
          />
        </div>

        <div className="wrestler-details">
          <div className="wrestler-details-h-p-container">
            <div className="wrestler-details-h">
              <span className="details-top"></span>
              <div>
                <p>ORIGIN</p> <span>PALABRA</span>
              </div>
              <div>
                <p>HEIGHt</p> <span>PALABRA</span>
              </div>
              <div>
                <p>CHAMPIONS</p> <span>PALABRA</span>
              </div>
              <div>
                <p>FIGHTS</p> <span>PALABRA</span>
              </div>
              <div>
                <p>NICKNAME</p> <span>PALABRA</span>
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
    </main>
  );
};

export default Superstars;
