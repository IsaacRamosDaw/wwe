import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Login from '../../components/main/cAccount/Login'

function Account() {
  return (
    <>
      <Header T1='SUPERSTARS' T2='SHOP' T3='TICKETS'/>
        <Login/>
      <Footer/>
    </>
  )
}

export default Account