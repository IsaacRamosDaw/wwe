import React from "react";
import "./story.css";

function Story() {
  return (
    <main className="story">
      <div className="superstars-old">
        <h4>WWE LEGENDS</h4>
        <div className="superstars-old-container">
          <div className="superstars-old-image">
            <img src="/images/main/landing/brunoSamartino.png" alt="" />
          </div>
          <div className="superstars-old-text">
            <h3>Bruno Samartino</h3>
            <p>
              was a legend of professional wrestling, known as "The Italian Strongman." 
              He dominated the WWF in the 60s and 70s, holding the world title for nearly 8 years, an unmatched record. 
              Famous for his strength and charisma, Sammartino left an indelible mark on the world of wrestling.
              <div className="video">
                <iframe src="https://www.youtube.com/embed/3X4imYUtcYo?si=qan-jpy0gBG7TChj&amp;start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </p>
          </div>
        </div>
        <div className="superstars-old-container reversed">
          <div className="superstars-old-image">
            <img src="/images/main/landing/HulkHigan.png" alt="" />
          </div>

          <div className="superstars-old-text">
            <h3>Hulk Hogan</h3>
            <p>
            born Terry Gene Bollea, is a legend of professional wrestling. 
            Known for his "Hulkamania" catchphrase and his distinctive image with a 
            bandana and blonde mustache, Hogan became an icon of the WWF in the
             80s. His finishing move, the "Leg Drop," and his charisma made him a central figure in wrestling, 
             leaving a lasting legacy in the sport.

              <div className="video reversed">
                <iframe src="https://www.youtube.com/embed/4f5VI7PVz3E?si=I3dOAcVwpa3sxKQt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </p>
          </div>
        </div>
        <div className="superstars-old-container">
          <div className="superstars-old-image">
            <img src="/images/main/landing/fotoUndertaker.png" alt="" />
          </div>
          <div className="superstars-old-text">
            <h3>The Undertaker</h3>
            <p>
              whose real name is Mark Calaway, is a legend of professional wrestling. Known for his dark presence and eerie entrance,
              he dominated WWF/WWE since the 90s. His undefeated streak at WrestleMania and his finishing move, the "Tombstone Piledriver,"
              made him an iconic and respected figure in the world of wrestling.
              <div className="video">
                <iframe src="https://www.youtube.com/embed/6d9n2l7KKa8?si=MFmQyivkfVx3l69D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Story;
