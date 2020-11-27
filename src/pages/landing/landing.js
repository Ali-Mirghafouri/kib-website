import './landing.css';

import Carousel from 'nuka-carousel';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Particles from 'react-particles-js';

import { HOME } from '../../constant/const';
import { IMAGES } from '../../image';
import { FeatureCard } from './feature';
import { getStyle } from './styles';

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
    setWidth(window.innerWidth - 20);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    setWidth(window.innerWidth - 20);
  }, []);

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

  const Carousel_slides_text = getStyle([
    width,
    height,
    "Carousel_slides_text",
  ]);
  const subHeading_text = getStyle([width, height, "subHeading_text"]);
  const navbarHover = getStyle([width, height, "navbarHover"]);
  const navbar = getStyle([width, height, "navbar"]);
  const Carousel_slides_button = getStyle([
    width,
    height,
    "Carousel_slides_button",
  ]);
  const Carousel_slides = getStyle([width, height, "Carousel_slides"]);

  // let bfs = bpd / 4;
  // if (bfs > 3) bfs = 3;

  // .Carousel_slides_button:focus {
  //   outline: none;
  //   box-shadow: none;
  // }
  // .Carousel_slides_button:hover {
  //   cursor: pointer;
  // }

  let featureS = (width - 400) / 1100;
  if (featureS < 0) {
    featureS = 0;
  }
  featureS += 1.5;
  if (featureS > 2.5) featureS = 2.5;
  let featureS2 = (featureS - 1.5) * 1.75 + 0.8;
  if (featureS2 > 2.5) featureS2 = 2.5;

  let carh = width - 400;
  if (carh < 0) carh = 0;
  carh = 400 + carh / 3.4;
  if (carh > 600) carh = height - 10;
  let parD = carh - 400;
  if (parD < 0) parD = 0;
  parD = parD / 15;
  if (parD > 10) parD = 10;

  const featureContainer = {
    width: "45%",
    // todo width: "36%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px 0",
  };

  let parN = width / 10;
  if (width < 600) {
    parN -= 10;
  }

  let iw = (width - 400) / 32;
  if (iw < 0) iw = 0;
  iw += 25;
  if (iw > 50) console.log(iw);

  const featureIconStyle = {
    width: `${iw}px`,
    height: `${iw}px`,
    margin: "15px",
  };

  const featureTitleStyle = {
    fontWeight: 900,
    color: "#595959",
    fontSize: `${featureS2}rem`,
    marginBottom: "20px",
    fontFamily: "Questrial, Sans-serif",
    textAlign: "center",
  };
  let feafs = featureS / 2.3;
  if (feafs < 0.6) feafs = 0.6;
  if (feafs > 1) feafs = 1;

  const featureTextStyle = {
    fontWeight: "normal",
    color: "#7a7a7a",
    fontSize: `${feafs}rem`,
    padding: "0 20px",
    lineHeight: 1.5,
    textAlign: "center",
  };

  const topHeading = {
    fontSize: `${featureS}rem`,
    color: "#595959",
    textAlign: "center",
    // margin: "100px 0 50px 0",
    margin: width < 600 ? "50px 0 25px 0" : "100px 0 50px 0",
    fontFamily: "Questrial, Sans-serif",
    fontWeight: 900,
  };

  const our_clients_content = {
    display: "flex",
    height: "80px",
    // height: "300px",
    columnGap: "24vw",
    marginBottom: "50px",
    // marginBottom: "80px",
    alignItems: "center",
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
          style={{marginRight: "3vw", height: "4vw"}}
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
              backgroundSize: `${width + 100}px auto`,
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
          backgroundSize: `${width}px`,
          position: "relative",
          height: `${carh - 200}px`,
        }}
      >
        <Particles
          style={{
            backgroundColor: "#0000",
            position: "absolute",
            left: 0,
          }}
          width={`${width}px`}
          height={`${carh - 200 - parD}px`}
          params={{
            particles: {
              number: {
                value: parN,
                max: -1,
                density: {
                  enable: false,
                  area: 1200,
                },
              },
              size: {
                value: width < 600 ? 2 : 4,
              },
              color: {
                value: "#F00",
              },
              stroke: {
                width: 0,
                color: "#0F0",
              },
            },
            opacity: {
              value: 0.4,
              random: false,
              maximumValue: 0.6,
            },
          }}
        />
        <div style={subHeading_text}>{HOME.subheading}</div>
      </div>
      <div id="features" style={topHeading}>
        Our Features
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          paddingBottom: "30px",
        }}
      >
        {HOME.features.map((item, index) => (
          <FeatureCard
            key={index}
            item={item}
            containerStyle={featureContainer}
            titleStyle={featureTitleStyle}
            textStyle={featureTextStyle}
            iconStyle={featureIconStyle}
          />
        ))}
      </div>
      <div className="our_clients_container">
        <div id="clients" style={topHeading}>
          {HOME.ourClients}
        </div>
        <div style={our_clients_content}>
          {IMAGES.landing.clients.map((src, index) => (
            // <img key={index} src={src} alt={src} width="200px" />
            <img key={index} src={src} alt={src} width="100px" />
          ))}
        </div>
      </div>
      {/* <div className="about_us_container" style={{backgroundColor: "#f9f9f9"}}> */}
      <div style={{...topHeading, backgroundColor: "#f9f9f9"}}>
        <div id="about" className="our_clients_text">
          {HOME.aboutUs}
        </div>
        <div className="about_us_content">
          {IMAGES.landing.aboutUs.map((src, index) => (
            <div key={index} className="about_us_images">
              {/* <img src={src} alt={src}></img> */}
              <img src={src} alt={src} width="100px"></img>
              <div className="about_us_text">{HOME.aboutUsLogoName[index]}</div>
              {/* <div className="about_us_description"> */}
              <div style={featureTextStyle}>
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
