import React from 'react'
import Banner from './lPComponents/banner/Banner'
import Story from './lPComponents/story/Story'
import ProductsContainer from './lPComponents/productsContainer/ProductsContainer'
import Comments from './lPComponents/comments/Comments'

function LandingPage() {
  return (
    <>
      <Banner/>
      <Story/>
      <ProductsContainer/>
      <Comments/>
    </>
  )
}

export default LandingPage