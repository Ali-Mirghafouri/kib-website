import './landing.css';

import Carousel from 'nuka-carousel';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Particles from 'react-particles-js';

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

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const [navIndex, setNavIndex] = useState(-1);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // const handleScroll = () => {
  //   // console.log(window.pageYOffset);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // });

  const navbarLabels = [
    {label: "Features", link: "#features"},
    {label: "Clients", link: "#clients"},
    {label: "About", link: "#about"},
    {label: "Contact", link: "#contact"},
  ];

  let pd = (width - 880) / 15;
  let fs = width - 1120;
  if (fs < 0) {
    fs = 2;
  } else {
    fs = 1.5;
  }
  if (pd < 0) pd = 0;

  const navbarHover = {
    textDecoration: "none",
    color: "#fff",
    padding: `0 ${20 + pd}px`,
    fontSize: `${fs}vw`,
    backgroundColor: "#dddddd66",
    borderRadius: "8px",
    transition: "background-color 0.2s ease",
  };
  const navbar = {
    textDecoration: "none",
    color: "#fff",
    padding: `0 ${20 + pd}px`,
    fontSize: `${fs}vw`,
  };

  const Carousel_slides = {
    overflowY: "visible",
    height: height.toString().concat("px"),
    display: "flex",
    flexDirection: "column",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingLeft: "10vw",
  };

  return (
    <Fragment>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          color: "red",
          zIndex: 10,
        }}
      >
        {width}x{height}
      </div>
      <div
        style={{
          position: "absolute",
          display: "flex",
          top: "15px",
          color: "#FFF",
          paddingLeft: "10vw",
          fontSize: "28px",
          fontFamily: "Questrial, Sans-serif",
          fontWeight: 500,
          alignItems: "center",
          zIndex: "1000",
        }}
      >
        <img
          src={IMAGES.landing.aboutUs[0]}
          alt="logo"
          style={{marginRight: "3vw", height: "3vw"}}
        />
        <div
          style={{
            color: "rgb(152, 240, 73)",
            fontWeight: "bold",
            fontSize: "3vw",
          }}
        >
          RICHA
        </div>
        {navbarLabels.map((item, index) => (
          <a
            style={index === navIndex ? navbarHover : navbar}
            href={item.link}
            key={index}
            onMouseEnter={() => setNavIndex(index)}
            onMouseLeave={() => setNavIndex(-1)}
          >
            {item.label}
          </a>
        ))}
      </div>
      <Carousel
        autoplay={true}
        autoplayInterval={2000}
        className="wrapAround"
        dragging={false}
        initialSlideHeight={800}
        height={"800"}
        pauseOnHover={true}
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
            style={{
              ...Carousel_slides,
              backgroundImage: `url(${IMAGES.landing.slides[index]})`,
            }}
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
        style={{
          backgroundImage: `url(${IMAGES.landing.subheading})`,
          backgroundSize: "1920px auto",
          position: "relative",
        }}
      >
        <Particles
          style={{
            backgroundColor: "#0000",
            position: "absolute",
            marginLeft: "-100px",
          }}
          color="#ff0"
          width="2000px"
          params={{
            particles: {
              number: {
                value: 140,
              },
              size: {
                value: 2,
              },
              color: {
                value: "#aaa",
              },
              shape: {
                strole: {
                  width: 0,
                  color: "#555",
                },
              },
            },
            opacity: {
              value: 0.1,
              random: false,
              maximumValue: 0.3,
            },
          }}
        />
        <div className="subHeading_text" style={{padding: "0 70px"}}>
          {HOME.subheading}
        </div>
      </div>
      <div
        id="features"
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
        <div id="clients" className="our_clients_text">
          {HOME.ourClients}
        </div>
        <div className="our_clients_content">
          {IMAGES.landing.clients.map((src, index) => (
            <img key={index} src={src} alt={src} />
          ))}
        </div>
      </div>
      <div className="about_us_container" style={{backgroundColor: "#f9f9f9"}}>
        <div id="about" className="our_clients_text">
          {HOME.aboutUs}
        </div>
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
      <div className="about_us_container pad200" ref={contacts}>
        <div id="contact" className="our_clients_text ver50">
          Contact Us
        </div>
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
            backgroundColor: "#fd0000",
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
