import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import LandingPage from '../../components/main/cLanding/LandingPage';
function Home() {

  return (
    <>
      <Header T1="SUPERSTARTS" T2="SHOP" T3="TICKETS" T4='RSS'/>
        <LandingPage/>
      <Footer/>
    </>
  )
}

export default Home
