import React from "react";
import Belts from "./caruselItemsComponents/belts/Belts";
import Items from "./caruselItemsComponents/items/Items";
import Hats from "./caruselItemsComponents/hats/Hats";
import Aaccesories from "./caruselItemsComponents/accesories/Aaccesories";
import "./itemsShop.css";
import "react-multi-carousel/lib/styles.css";

function ItemsShop(){

  return (
    <>
      <main className="shop">
        <nav className="shop-nav">
          <ul>
            <li><a href="">Belts</a></li>
            <li><a href="">Hats</a></li>
            <li><a href="">Accesories</a></li>
            <li><a href="">Shirts</a></li>
          </ul>
        </nav>
        <section className="shop-carusel">
          <h2><span>Latest Products</span></h2>
          <Belts/>
          <Hats/>
          <Aaccesories/>
          <Items/>
        </section>
      </main>
    </>
  );
}

export default ItemsShop;
