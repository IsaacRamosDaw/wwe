import React from 'react'
import './productsContainer.css'
function ProductsContainer() {
  return (
    <>
    <section className='productsLinks'>
        <div className='buy-it-container'>
          <a href="/shop">
            <div>
              <img className='img-product' src="/images/main/landing/HulkHogan.jpg" alt="" />
              <p className='hogan'>Hulk Jogan POP</p>
            </div>
          </a>
          <a className='va' href="/shop">Get it</a>
        </div>

        <div className='buy-it-container'>
          <a href="/shop">
            <div>
              <img src="/images/main/landing/belt.png" alt="" />
              <p>WWE Tilte</p>
            </div>
          </a>
          <a className='va' href="/shop">Get it</a>
        </div>

        <div className='buy-it-container'>
          <a href="/shop">
            <div>
              <img src="/images/main/landing/cartel.png" alt="" />
              <p>Wrestlemania Cartel</p>
            </div>
          </a>
          <a className='va' href="/shop">Get it</a>
        </div>
    </section>
    </>
  )
}

export default ProductsContainer