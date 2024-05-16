import React from "react";
import Belts from "./caruselItemsComponents/belts/Belts";
import Items from "./caruselItemsComponents/items/Items";
import Hats from "./caruselItemsComponents/hats/Hats";
import Aaccesories from "./caruselItemsComponents/accesories/Aaccesories";
import Shirts from "./caruselItemsComponents/shirts/Shirts";
import "./itemsShop.css";
import "react-multi-carousel/lib/styles.css";

function ItemsShop(){

  return (
    <>
      <main className="shop">
        <nav className="shop-nav">
          <ul>
            <li><a href="#belts">Belts</a></li>
            <li><a href="#hats">Hats</a></li>
            <li><a href="#accesories">Accesories</a></li>
            <li><a href="#shirts">Shirts</a></li>
            <li><a href="#items">Items</a></li>
          </ul>
        </nav>
        <section className="shop-carusel">
          <h2><span>Latest Products</span></h2>
          <Belts/>
          <Hats/>
          <Aaccesories/>
          <Shirts/>
          <Items/>
        </section>
      </main>
    </>
  );
}

export default ItemsShop;
