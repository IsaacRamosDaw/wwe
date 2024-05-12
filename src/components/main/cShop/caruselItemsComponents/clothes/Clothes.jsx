import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";

function Clothes() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
      <h4>Title clothes</h4>
     <Carousel showDots={false} responsive={responsive}>
      <div className="carusel-item-clothes">
        <a href="/shop">
          <div>
            <img
              src="../../../../../../public/images/main/landing/HulkHogan.jpg"
              alt=""
            />
            <p>Hulk Jogan</p>
          </div>
        </a>
        <a className="va" href="/shop">
          Get it
        </a>
      </div>
    </Carousel>
  </div>
  )
}

export default Clothes