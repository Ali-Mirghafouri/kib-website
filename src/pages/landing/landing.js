import React from "react"
import Carousel from "nuka-carousel"
import {CAROUSEL} from "../../constant/const"
import "./landing.css"
import {IMAGES} from "../../image"
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai"

export function Landing() {
  return (
    <Carousel
      autoplayInterval={5000}
      speed={2000}
      transitionMode="fade"
      className="wrapAround"
      dragging={false}
      renderCenterLeftControls={({previousSlide}) => (
        <AiOutlineLeft color="white" size="2vw" onClick={previousSlide} />
      )}
      renderCenterRightControls={({nextSlide}) => (
        <AiOutlineRight color="white" size="2vw" onClick={nextSlide} />
      )}
      initialSlideHeight={800}
      height
      autoplay={true}
      pauseOnHover={true}
      wrapAround={true}>
      {CAROUSEL.map((text, index) => (
        <div
          className="Carousel_slides"
          style={{backgroundImage: `url(${IMAGES.landing.slides[index]})`}}>
          <div className="Carousel_slides_text">
            {text}
            <button className="Carousel_slides_button">VIEW FEATURES</button>
          </div>
        </div>
      ))}
    </Carousel>
  )
}
