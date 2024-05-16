import React from 'react'
import HatShopData from '../../../../../../public/data/shopData/hatsShopData'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Hats() {
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
    <div id='hats' className="carousel-item-hats">
    <h4>WWE HATS</h4>
    <Carousel showDots={false} responsive={responsive}>
    {HatShopData.map(hat => {
      return(
        <div key={hat.id} className="carusel-item-clothes">
          <a href="/shop">
            <div>
              <img
                src={hat.img}
                alt=""
              />
              <p>{hat.name}</p>
            </div>
          </a>
          <a href="/shop">
            {hat.price}
          </a>
        </div>
      )
    })}
  </Carousel>
</div>
  )
}

export default Hats