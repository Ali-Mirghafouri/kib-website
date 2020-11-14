import './landing.css';

import Carousel from 'nuka-carousel';
import React, { Fragment, useEffect, useRef } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import { HOME } from '../../constant/const';
import { IMAGES } from '../../image';
import { FeatureCard } from './feature';

export const SCROLL_DIRECTION_DOWN = "SCROLL_DIRECTION_DOWN";
export const SCROLL_DIRECTION_UP = "SCROLL_DIRECTION_UP";
export const SCROLL_DIRECTION_NONE = "SCROLL_DIRECTION_NONE";

export function Landing() {
  const contacts = useRef();
  const executeScroll = () => {
    contacts.current.scrollIntoView({behavior: "smooth"});
  };

  // const handleScroll = () => {
  //   // console.log(window.pageYOffset);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // });

  return (
    <Fragment>
      <Carousel
        autoplay={false}
        autoplayInterval={2000}
        className="wrapAround"
        dragging={false}
        initialSlideHeight={1000}
        // pauseOnHover={true}
        speed={2000}
        transitionMode="fade"
        wrapAround={true}
        renderCenterLeftControls={({previousSlide}) => (
          <AiOutlineLeft color="white" size="40px" onClick={previousSlide} />
        )}
        renderCenterRightControls={({nextSlide}) => (
          <AiOutlineRight color="white" size="40px" onClick={nextSlide} />
        )}
      >
        {HOME.carousel.map((text, index) => (
          <div
            className="Carousel_slides"
            style={{backgroundImage: `url(${IMAGES.landing.slides[index]})`}}
            key={index}
          >
            <div className="Carousel_slides_text">
              {text}
              <button
                className="Carousel_slides_button"
                onClick={executeScroll}
              >
                {HOME.slidesButtons[index]}
              </button>
            </div>
          </div>
        ))}
      </Carousel>
      <div
        className="subHeading"
        style={{backgroundImage: `url(${IMAGES.landing.subheading})`}}
      >
        <div className="subHeading_text">{HOME.subheading}</div>
      </div>
      <div
        style={{
          fontSize: "2.5rem",
          color: "#595959",
          textAlign: "center",
          margin: "100px 0 50px 0",
          fontFamily: "Questrial, Sans-serif",
          fontWeight: 900,
        }}
      >
        Our Features
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {HOME.features.map((item, index) => (
          <FeatureCard key={index} item={item} />
        ))}
      </div>
      <div className="our_clients_container">
        <div className="our_clients_text">{HOME.ourClients}</div>
        <div className="our_clients_content">
          {IMAGES.landing.clients.map((src, index) => (
            <Fragment key={index}>
              <img
                src={src}
                alt={src}
                style={
                  {
                    // height: index === 0 ? "40" : "10vh",
                  }
                }
              />
            </Fragment>
          ))}
        </div>
      </div>
      <div className="about_us_container">
        <div className="our_clients_text">{HOME.aboutUs}</div>
        <div className="about_us_content">
          {IMAGES.landing.aboutUs.map((src, index) => (
            <div key={index} className="about_us_images">
              <img src={src} alt={src}></img>
              <div className="about_us_text">{HOME.aboutUsLogoName[index]}</div>
              <div className="about_us_description">
                {HOME.aboutUsDescription[index]}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="about_us_container pad50" ref={contacts}>
        <div className="our_clients_text ver50">Contact Us</div>
        <input
          placeholder="Name"
          style={{
            width: "100%",
            height: 40,
            padding: "0 20px",
            boxSizing: "border-box",
            fontFamily: "Questrial, Sans-serif",
            fontWeight: 600,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            margin: "10px 0",
          }}
        >
          <input
            placeholder="Email"
            style={{
              flex: 1,
              height: 40,
              boxSizing: "border-box",
              padding: "0 20px",
              fontFamily: "Questrial, Sans-serif",
              fontWeight: 600,
            }}
          />
          <div style={{width: "20px", height: "1px"}} />
          <input
            placeholder="Mobile"
            style={{
              flex: 1,
              height: 40,
              boxSizing: "border-box",
              padding: "0 20px",
              fontFamily: "Questrial, Sans-serif",
              fontWeight: 600,
            }}
          />
        </div>
        <textarea
          className="textarea"
          placeholder="Message"
          style={{
            resize: "none",
            width: "100%",
            height: 120,
            boxSizing: "border-box",
            padding: "20px",
            textAlign: "start",
            fontFamily: "Questrial, Sans-serif",
            fontWeight: 600,
          }}
        />
        <input
          type="button"
          style={{
            width: "100%",
            height: 40,
            marginTop: "20px",
            backgroundColor: "#16B6B2",
            border: "none",
            borderRadius: "4px",
            outline: "none",
            color: "#FFF",
            cursor: "pointer",
            fontFamily: "Questrial, Sans-serif",
            fontSize: "1rem",
            fontWeight: 600,
          }}
          value="Send"
        />
      </div>
    </Fragment>
  );
}
