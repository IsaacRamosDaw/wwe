import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClothesShopData from '../../../../../../public/data/shopData/clothesData';

function Clothes() {
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
      <h4>WWE CLOTHES</h4>
      <Carousel showDots={false} responsive={responsive}>
      {ClothesShopData.map(clothes => {
        return(
          <div key={clothes.id} className="carusel-item-clothes">
            <a href="/shop">
              <div>
                <img
                  src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                  alt=""
                />
                <p>{clothes.nameClothes}</p>
              </div>
            </a>
            <a href="/shop">
              {clothes.price}
            </a>
          </div>
        )
      })}
    </Carousel>
  </div>
  )
}

export default Clothes