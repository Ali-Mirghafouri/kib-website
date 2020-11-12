import React, {Fragment} from "react"
import Carousel from "nuka-carousel"
import {HOME} from "../../constant/const"
import "./landing.css"
import {IMAGES} from "../../image"
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai"

export function Landing() {
  return (
    <Fragment>
      <Carousel
        autoplay={true}
        autoplayInterval={5000}
        className="wrapAround"
        dragging={false}
        height
        initialSlideHeight={800}
        pauseOnHover={true}
        speed={2000}
        transitionMode="fade"
        wrapAround={true}
        renderCenterLeftControls={({previousSlide}) => (
          <AiOutlineLeft color="white" size="2vw" onClick={previousSlide} />
        )}
        renderCenterRightControls={({nextSlide}) => (
          <AiOutlineRight color="white" size="2vw" onClick={nextSlide} />
        )}>
        {HOME.carousel.map((text, index) => (
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
      <div className="our_clients_text">{HOME.ourClients}</div>
      <div></div>
    </Fragment>
  )
}
