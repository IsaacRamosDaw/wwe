import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Card from '../../components/main/cTickets/Cards'

function Tickets() {
  return (
    <>
      <Header T1='SUPERSTARS' T2='SHOP' T3='TICKETS'/>
        <Card/>
      <Footer/>
    </>
  )
}

export default Tickets