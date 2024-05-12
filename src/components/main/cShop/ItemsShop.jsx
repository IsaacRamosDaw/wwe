import React from "react";
import "./itemsShop.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Header from "../../header/Header";
import Belts from "./caruselItemsComponents/belts/Belts";
import Items from "./caruselItemsComponents/items/Items";
import Clothes from "./caruselItemsComponents/clothes/Clothes";

function ItemsShop() {
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
    <>
      <Header T1="SUPERSTARS" T2="SHOP" T3="TICKETS" />
      <main className="shop">
        <nav className="shop-nav">
          <ul>
            <li><a href="">Belts</a></li>
            <li><a href="">Belts</a></li>
            <li><a href="">Belts</a></li>
            <li><a href="">Belts</a></li>
            <li><a href="">Belts</a></li>
          </ul>
        </nav>
        <section className="shop-carusel">
          <h2><span>Latest Products</span></h2>
          <Belts/>
          <Items/>
          <Clothes/>
        </section>
      </main>
    </>
  );
}

export default ItemsShop;
