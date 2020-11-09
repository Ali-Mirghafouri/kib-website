import React, {useState} from "react"
import Carousel from "nuka-carousel"
import {CAROUSEL} from "../../constant/const"
import "./landing.css"
import {IMAGES} from "../../image"

export function Landing() {
  const [autoPlay, setAutoPlay] = useState(true)
  // const bg_pic = {backgroundImage: `url(${images.home.bg_picture})`}
  return (
    <Carousel
      className="wrapAround"
      renderCenterLeftControls={() => null}
      renderCenterRightControls={() => null}
      initialSlideHeight={1080}
      autoplay={autoPlay}
      wrapAround={true}>
      {CAROUSEL.map((text, index) => (
        <div
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
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
