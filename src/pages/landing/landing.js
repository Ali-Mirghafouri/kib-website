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
      <div className="our_clients_container">
        <div className="our_clients_text">{HOME.ourClients}</div>
        <div className="our_clients_content">
          {IMAGES.landing.clients.map((src, index) => (
            <Fragment>
              {console.log(index)}
              <img
                src={src}
                alt={src}
                style={{
                  width: index === 0 ? "10vw" : "20vw",
                  height: index === 0 ? "20vh" : "10vh",
                }}></img>
            </Fragment>
          ))}
        </div>
      </div>
      <div className="about_us_container">
        <div className="our_clients_text">{HOME.aboutUs}</div>
        <div className="about_us_content">
          {IMAGES.landing.aboutUs.map((src, index) => (
            <div className="about_us_images">
              {console.log(index)}
              <img
                src={src}
                alt={src}
                style={{
                  width: index === 0 ? "8vw" : "10vw",
                  height: index === 0 ? "16vh" : "16vh",
                }}></img>
              <div className="about_us_text">{HOME.aboutUsLogoName[index]}</div>
              <div className="about_us_description">{HOME.aboutUsDescription[index]}</div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  )
}
