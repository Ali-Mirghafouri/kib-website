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

  let fs18 = width - 330;
  if (fs18 < 0) {
    fs18 = 20;
  } else {
    fs18 = 18 + fs18 / 100;
  }
  if (fs18 > 32) {
    fs18 = 32;
  }
  let csw = width - 100;
  if (csw < 300) {
    csw = 300;
  } else {
    csw = 300 + csw / 12;
  }
  if (csw > 440) csw = 440;

  const Carousel_slides_text = {
    color: "white",
    display: "flex",
    flexDirection: "column",
    fontSize: `${fs18}px`,
    fontFamily: "Questrial, Sans-serif",
    fontWeight: "500",
    height: "100%",
    justifyContent: "center",
    // marginBottom: "35vh",
    // marginBottom: "25vh",
    textShadow: "2px 2px 4px #0009",
    marginRight: "30vw",
    width: `${csw}px`,
  };

  let fs = width - 1120;
  if (fs < 0) {
    fs = 2.5;
  } else {
    fs = 1.5;
  }
  let pd = (width - 880) / 20;
  if (pd < 0) pd = 0;

  const navbarHover = {
    textDecoration: "none",
    color: "#fff",
    padding: `0 ${15 + pd}px`,
    fontSize: `${fs}vw`,
    backgroundColor: "#dddddd66",
    borderRadius: "8px",
    transition: "background-color 0.2s ease",
  };
  const navbar = {
    textDecoration: "none",
    color: "#fff",
    padding: `0 ${15 + pd}px`,
    fontSize: `${fs}vw`,
  };

  let bh = width - 330;
  if (bh < 0) bh = 0;
  bh = 29 + bh / 140;
  if (bh > 39) bh = 39;

  let bpd = (width - 400) / 170;
  if (bpd < 0) bpd = 0;
  if (bpd > 8) bpd = 8;

  let bfs = bpd / 4;
  if (bfs > 3) bfs = 3;

  const Carousel_slides_button = {
    alignSelf: "flex-start",
    height: `${bh}px`,
    width: "auto",
    borderRadius: `${10 + bpd}px`,
    border: "none",
    marginTop: "30px",
    marginRight: "10%",
    padding: `0px ${16 + bpd}px`,
    backgroundColor: "#fd0000",
    color: "white",
    fontSize: `${12 + bpd}px`,
    fontWeight: "bold",
    fontFamily: "Questrial, Sans-serif",
    textShadow: "2px 2px 4px #0009",
  };

  let carh = width - 400;
  if (carh < 0) carh = 0;
  carh = 400 + carh / 3.4;
  console.log(carh);
  if (carh > 600) carh = height - 10;
  const Carousel_slides = {
    overflowY: "visible",
    // height: height.toString().concat("px"),
    display: "flex",
    flexDirection: "column",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingLeft: "10vw",
    height: `${carh}px`,
  };
  // .Carousel_slides_button:focus {
  //   outline: none;
  //   box-shadow: none;
  // }
  // .Carousel_slides_button:hover {
  //   cursor: pointer;
  // }

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
        style={{height: `${carh}px`}}
        autoplay={false}
        autoplayInterval={2000}
        className="wrapAround"
        dragging={false}
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
              backgroundSize: `${width + 190}px auto`,
            }}
            key={index}
          >
            <div style={Carousel_slides_text}>
              {text}
              <button style={Carousel_slides_button} onClick={executeScroll}>
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
          backgroundSize: `${width + 50}px`,
          position: "relative",
          border: "1px solid red",
          height: `${carh - 160}px`,
        }}
      >
        <Particles
          style={{
            backgroundColor: "#0000",
            position: "absolute",
            left: 0,
            // marginLeft: "-300px",
          }}
          color="#ff0"
          width={`${width + 70}px`}
          // height={`${carh}px`}
          params={{
            particles: {
              number: {
                value: width / 10,
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
        <div className="subHeading_text" style={{padding: "0 10vw"}}>
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
