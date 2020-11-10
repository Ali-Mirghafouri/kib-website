import React from "react"
import Carousel from "nuka-carousel"
import {CAROUSEL} from "../../constant/const"
import "./landing.css"
import {IMAGES} from "../../image"

export function Landing() {
  return (
    <Carousel
      autoplayInterval={5000}
      speed={2000}
      transitionMode="fade"
      className="wrapAround"
      dragging={false}
      renderCenterLeftControls={() => null}
      renderCenterRightControls={() => null}
      initialSlideHeight={900}
      he
      autoplay={true}
      pauseOnHover={true}
      wrapAround={true}>
      {CAROUSEL.map((text, index) => (
        <div
          className="Carousel_slides"
          style={{backgroundImage: `url(${IMAGES.landing.slides[index]})`}}>
          <div className="Carousel_slides_text">
            {text}
            <button className="Carousel_slides_button">FREE DEMO</button>
          </div>
        </div>
      ))}
    </Carousel>
  )
}
