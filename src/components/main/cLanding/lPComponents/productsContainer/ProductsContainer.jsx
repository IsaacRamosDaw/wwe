import React from 'react'
import './productsContainer.css'
function ProductsContainer() {
  return (
    <>
    <section className='productsLinks'>
        <div className='buy-it-container'>
          <a href="/shop">
            <div>
              <img className='img-product' src="../../../../../../public/images/main/landing/HulkHogan.jpg" alt="" />
              <p className='hogan'>Hulk Jogan</p>
            </div>
          </a>
          <a className='va' href="/shop">Get it</a>
        </div>

        <div className='buy-it-container'>
          <a href="/shop">
            <div>
              <img src="../../../../../../public/images/main/landing/HulkHogan.jpg" alt="" />
              <p>Hulk Jogan</p>
            </div>
          </a>
          <a className='va' href="/shop">Get it</a>
        </div>

        <div className='buy-it-container'>
          <a href="/shop">
            <div>
              <img src="../../../../../../public/images/main/landing/HulkHogan.jpg" alt="" />
              <p>Hulk Jogan</p>
            </div>
          </a>
          <a className='va' href="/shop">Get it</a>
        </div>
    </section>
    </>
  )
}

export default ProductsContainer