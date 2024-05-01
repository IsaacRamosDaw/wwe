import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
function Home() {

  return (
    <>
      <Header 
      T1="WWE NETWORK" T2="SHOWS" T3="SUPERSTARTS" T4="TICKETS" T5="SHOP"
      />

      <Footer numContainers={3}/>
    </>
  )
}

export default Home
