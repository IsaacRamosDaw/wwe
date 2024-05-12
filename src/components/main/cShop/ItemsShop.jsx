import React from "react";
import "./itemsShop.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ItemsShop() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1400 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 599, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <main>
        <nav className="shop-nav"></nav>
        <section className="shop">
          <h2>Latest Products</h2>
          <div className="carousel-item-belts">
            <h4>Title belts</h4>
            <Carousel showDots={false} responsive={responsive}>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
            </Carousel>
          </div>
          <div className="carousel-item-belts">
            <h4>Title belts</h4>
            <Carousel showDots={false} responsive={responsive}>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
            </Carousel>
          </div>
          <div className="carousel-item-belts">
            <h4>Title belts</h4>
            <Carousel showDots={false} responsive={responsive}>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
            </Carousel>
          </div>
          <div className="carousel-item-belts">
            <h4>Title belts</h4>
            <Carousel showDots={false} responsive={responsive}>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
            </Carousel>
          </div>
          <div className="carousel-item-belts">
            <h4>Title belts</h4>
            <Carousel showDots={false} responsive={responsive}>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
              <div className="carusel-item-belts">
                <a href="/shop">
                  <div>
                    <img
                      src="../../../../../../public/images/main/landing/HulkHogan.jpg"
                      alt=""
                    />
                    <p>Hulk Jogan</p>
                  </div>
                </a>
                <a className="va" href="/shop">
                  Get it
                </a>
              </div>
            </Carousel>
          </div>
        </section>
      </main>
    </>
  );
}

export default ItemsShop;
