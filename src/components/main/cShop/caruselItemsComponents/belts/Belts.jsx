import React from 'react'
import BeltsShopData from '../../../../../../public/data/shopData/beltsData';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Belts() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1400 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 599, min: 0 },
      items: 1,
    },
  }

  return (
    <div className="carousel-item-belts">
      <h4>TITLE BELTS</h4>
      <Carousel showDots={false} responsive={responsive}>
      {BeltsShopData.map(belt => {
        return(
          <div key={belt.id} className="carusel-item-belts">
            <a href="/shop">
              <div>
                <img
                  src={belt.img}
                  alt=""
                />
                <p>{belt.nameBelt}</p>
              </div>
            </a>
            <a className="va" href="/shop">
              {belt.price}
            </a>
          </div>
        )
      })}
    </Carousel>
  </div>
  )
}

export default Belts