import React from "react"
import Carousel from "nuka-carousel"
import {CAROUSEL} from "../../constant/const"
import "./landing.css"
import {IMAGES} from "../../image"

export function Landing() {
  // const bg_pic = {backgroundImage: `url(${images.home.bg_picture})`}
  return (
    <Carousel
      className="wrapAround"
      renderCenterLeftControls={() => null}
      renderCenterRightControls={() => null}
      initialSlideHeight={1080}
      autoplay={true}
      wrapAround={true}>
      {CAROUSEL.map((text, index) => (
        <div
          className="Carousel_slides"
          style={{backgroundImage: `url(${IMAGES.landing.slides[index]})`}}>
          <div className="Carousel_slides_text">{text}</div>
          <button className="Carousel_slides_button">FREE DEMO</button>
        </div>
      ))}
    </Carousel>
  )
}
