import React from 'react'
import Carousel from "react-multi-carousel";
import AccesoriesData from '../../../../../../public/data/shopData/accesoriesData';
import "react-multi-carousel/lib/styles.css";

function Aaccesories() {
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
    <div className="carousel-item-clothes">
      <h4>WWE ACCESORIES</h4>
      <Carousel showDots={false} responsive={responsive}>
      {AccesoriesData.map(accesorie => {
        return(
          <div key={accesorie.id} className="carusel-item-clothes">
            <a href="/shop">
              <div>
                <img src={accesorie.img} alt="" />
                <p>{accesorie.name}</p>
              </div>
            </a>
            <a href="/shop">
              {accesorie.price}
            </a>
          </div>
        )
      })}
    </Carousel>
  </div>
  )
}

export default Aaccesories