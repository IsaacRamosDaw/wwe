import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ItemsShop from '../../components/main/cShop/ItemsShop'

function Shop() {
  return (
    <>
      {/* <Header T1='SUPERSTARS' T2='SHOP' T3='TICKETS'/> */}
        <ItemsShop/>
      <Footer/>
    </>
  )
}

export default Shop