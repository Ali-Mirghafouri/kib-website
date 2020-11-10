import React from "react"
import Carousel from "nuka-carousel"
import {CAROUSEL} from "../../constant/const"
import "./landing.css"
import {IMAGES} from "../../image"

export function Landing() {
  // const bg_pic = {backgroundImage: `url(${images.home.bg_picture})`}
  return (
    <Carousel
      speed={1000}
      transitionMode="fade"
      className="wrapAround"
      dragging={false}
      renderCenterLeftControls={() => null}
      renderCenterRightControls={() => null}
      initialSlideHeight={900}
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
