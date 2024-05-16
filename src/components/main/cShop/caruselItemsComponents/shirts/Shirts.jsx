import React from 'react'
import Carousel from "react-multi-carousel";
import ShirtsShopData from '../../../../../../public/data/shopData/shirtsData'
import "react-multi-carousel/lib/styles.css";

function Shirts() {
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
    <div id='shirts' className="carousel-item-shirt">
      <h4>WWE SHIRTS</h4>
      <Carousel showDots={false} responsive={responsive}>
        {ShirtsShopData.map(shirts => {
          return(
            <div key={shirts.id} className="carusel-item-clothes">
              <a href="/shop">
                <div>
                  <img src={shirts.img} alt=""/>
                  <p>{shirts.name}</p>
                </div>
              </a>
              <a href="/shop">
                {shirts.price}
              </a>
            </div>
          )
        })}
      </Carousel>
  </div>
  )
}

export default Shirts