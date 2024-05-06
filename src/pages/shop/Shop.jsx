import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Clothes from '../../components/main/cShop/clothes/Clothes'

function Shop() {
  return (
    <>
      <Header T1='SUPERSTARS' T2='SHOP' T3='TICKETS'/>
        <Clothes/>
      <Footer/>
    </>
  )
}

export default Shop