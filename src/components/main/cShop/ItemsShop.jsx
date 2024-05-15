import React from "react";
import "./itemsShop.css";
import "react-multi-carousel/lib/styles.css";
import Header from "../../header/Header";
import Belts from "./caruselItemsComponents/belts/Belts";
import Items from "./caruselItemsComponents/items/Items";
import Clothes from "./caruselItemsComponents/clothes/Clothes";

function ItemsShop() {

  return (
    <>
      <Header T1="SUPERSTARS" T2="SHOP" T3="TICKETS" />
      <main className="shop">
        <nav className="shop-nav">
          <ul>
            <li><a href="">Belts</a></li>
            <li><a href="">Clothes</a></li>
            <li><a href="">Belts</a></li>
          </ul>
        </nav>
        <section className="shop-carusel">
          <h2><span>Latest Products</span></h2>
          <Belts/>
          <Clothes/>
          <Items/>
        </section>
      </main>
    </>
  );
}

export default ItemsShop;
