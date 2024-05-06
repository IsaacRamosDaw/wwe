import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Superstars from '../../components/main/cSuperstars/Superstars'

function Fighters() {
  return (
    <>
      <Header T1='SUPERSTARS' T2='SHOP' T3='TICKETS'/>
        <Superstars/>
      <Footer/>
    </>
  )
}

export default Fighters