import React from "react";
import "./story.css";

function Story() {
  return (

    <section className="story">
      <section className="superstars-old">
        <h4>WWE LEGENDS</h4>
        <div className="superstars-old-container">
          <div className="superstars-old-image">
            <img src="../../../../../../public/images/main/landing/brunoSamartino.png" alt="" />
          </div>
          <div className="superstars-old-text">
            <h3>Bruno Samartino</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit debitis optio quod nemo consectetur culpa quos eu
              m modi reiciendis perferendis id nihil, architecto explicabo voluptatum possimus molestias nisi. Enim deleniti dicta modi 
              <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/3X4imYUtcYo?si=qan-jpy0gBG7TChj&amp;start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </p>
          </div>
        </div>
        <div className="superstars-old-container reversed">
            <div className="superstars-old-image">
              <img src="../../../../../../public/images/main/landing/brunoSamartino.png" alt="" />
            </div>

          <div className="superstars-old-text">
            <h3>Hulk Hogan</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit debitis optio quod nemo consectetur culpa quos eu
              m modi reiciendis perferendis id nihil, architecto explicabo voluptatum possimus molestias nisi. Enim deleniti dicta modi 
              <div className="video reversed">
                <iframe src="https://www.youtube.com/embed/3X4imYUtcYo?si=qan-jpy0gBG7TChj&amp;start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </p>
          </div>
        </div>
        <div className="superstars-old-container">
          <div className="superstars-old-image">
            <img src="../../../../../../public/images/main/landing/brunoSamartino.png" alt="" />
          </div>
          <div className="superstars-old-text">
            <h3>Andre the Giant</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit debitis optio quod nemo consectetur culpa quos eu
              m modi reiciendis perferendis id nihil, architecto explicabo voluptatum possimus molestias nisi. Enim deleniti dicta modi 
              <div className="video">
                <iframe src="https://www.youtube.com/embed/3X4imYUtcYo?si=qan-jpy0gBG7TChj&amp;start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Story;
