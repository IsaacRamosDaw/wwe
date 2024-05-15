import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ItemsShopData from '../../../../../../public/data/shopData/itemsData';

function Items() {
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
    <div className="carousel-item-items">
      <h4>Collection</h4>
      <Carousel showDots={false} responsive={responsive}>
      {ItemsShopData.map(item => {
        return(
          <div key={item.id} className="carusel-item-clothes">
            <a href="/shop">
              <div>
                <img
                  src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                  alt=""
                />
                <p>{item.nameItems}</p>
              </div>
            </a>
            <a className="va" href="/shop">
              {item.price}
            </a>
          </div>
        )
      })}
    </Carousel>
  </div>
  )
}

export default Items