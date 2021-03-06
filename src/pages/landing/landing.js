import "./landing.css"

import Carousel from "nuka-carousel"
import React, {Fragment, useEffect, useRef, useState} from "react"
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai"
// import Particles from "react-particles-js"

import {HOME} from "../../constant/const"
import {IMAGES} from "../../image"
import {FeatureCard} from "./feature"
import {getStyle} from "./styles"
import {DropDownNav} from "../../component"

export const SCROLL_DIRECTION_DOWN = "SCROLL_DIRECTION_DOWN"
export const SCROLL_DIRECTION_UP = "SCROLL_DIRECTION_UP"
export const SCROLL_DIRECTION_NONE = "SCROLL_DIRECTION_NONE"

export function Landing() {
  const contacts = useRef()
  const executeScroll = () => {
    contacts.current.scrollIntoView({behavior: "smooth"})
  }

  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  const [navIndex, setNavIndex] = useState(-1)
  const updateDimensions = () => {
    setWidth(window.innerWidth - 20)
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    setWidth(window.innerWidth - 20)
  }, [])

  useEffect(() => {
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  const navbarLabels = [
    {label: "Features", link: "#features"},
    {label: "Clients", link: "#clients"},
    {label: "About", link: "#about"},
    {label: "Contact", link: "#contact"},
  ]

  const Carousel_slides_text = getStyle([width, height, "Carousel_slides_text"])
  const subHeading_text = getStyle([width, height, "subHeading_text"])
  const navbarHover = getStyle([width, height, "navbarHover"])
  const navbar = getStyle([width, height, "navbar"])
  const Carousel_slides_button = getStyle([width, height, "Carousel_slides_button"])
  const Carousel_slides = getStyle([width, height, "Carousel_slides"])
  const featureTitleStyle = getStyle([width, height, "featureTitleStyle"])
  const featureTextStyle = getStyle([width, height, "featureTextStyle"])
  const topHeading = getStyle([width, height, "topHeading"])
  const featureIconStyle = getStyle([width, height, "featureIconStyle"])
  const our_clients_content = getStyle([width, height, "our_clients_content"])
  const clientImageWidth = getStyle([width, height, "clientImageWidth"])
  const about_us_text = getStyle([width, height, "about_us_text"])
  const contact_us_button = getStyle([width, height, "contact_us_button"])
  const contact_us_input = getStyle([width, height, "contact_us_input"])
  const contact_us_textarea = getStyle([width, height, "contact_us_textarea"])
  const about_us_container = getStyle([width, height, "about_us_container"])

  let carh = width - 400
  if (carh < 0) carh = 0
  carh = 400 + carh / 3.4
  if (carh > 600) carh = height - 10
  if (width <= 373) carh = carh - 15
  let parD = carh - 400
  if (parD < 0) parD = 0
  parD = parD / 15
  if (parD > 10) parD = 10

  const featureContainer = {
    width: width > 600 ? "34%" : "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px 0",
  }

  let parN = width / 10
  if (width < 600) {
    parN -= 10
  }

  return (
    <Fragment>
      <div
        style={{
          background: "white",
          position: "fixed",
          fontSize: "28px",
          fontFamily: "Questrial, Sans-serif",
          fontWeight: 500,
          zIndex: "100",
          opacity: 0.5,
          height: width > 1100 ? "9%" : "5%",
          width: "100%",
        }}
      />
      <div
        style={{
          position: "fixed",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          fontFamily: "Questrial, Sans-serif",
          fontWeight: 500,
          zIndex: "100",
          height: width > 1100 ? "9%" : "5%",
          width: "100%",
        }}>
        <img
          src={IMAGES.landing.aboutUs[0]}
          alt="logo"
          style={{
            marginRight: "3vw",
            height: width < 750 ? "5vw" : "2.5vw",
            marginLeft: "17vw",
          }}
        />
        <div
          style={{
            color: "#61CE70",
            fontWeight: "bold",
            fontSize: width < 750 ? "2.8vw" : "2.3vw",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.54)",
          }}>
          RICHA
        </div>
        <div style={{flexGrow: 1}} />
        {width < 600 ? (
          <div style={{position: "fixed", right: "10px", top: "2.5vw"}}>
            <DropDownNav
              navIndex={navIndex}
              navbar={navbar}
              navbarHover={navbarHover}
              setNavIndex={setNavIndex}
            />
          </div>
        ) : (
          <div
            style={{
              marginRight: "17vw",
            }}>
            {navbarLabels.map((item, index) => (
              <a
                style={
                  index === navIndex
                    ? {...navbarHover, marginRight: index === navbarLabels.length - 1 ? "" : "2vw"}
                    : {...navbar, marginRight: index === navbarLabels.length - 1 ? "" : "2vw"}
                }
                href={item.link}
                key={index}
                onMouseEnter={() => setNavIndex(index)}
                onMouseLeave={() => setNavIndex(-1)}>
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>

      <Carousel
        height={`${carh - 90}px`}
        autoplay={true}
        autoplayInterval={2000}
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
        )}>
        {HOME.carousel.map((text, index) => (
          <div
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              top: width <= 373 ? "-55px" : "-45px",
              display: "flex",
            }}>
            <div
              style={{
                ...Carousel_slides,
                backgroundImage: `url(${IMAGES.landing.slides[index]})`,
                backgroundSize: `${width + 100}px auto`,
              }}
              key={index}>
              <div style={Carousel_slides_text}>
                {text}
                <button style={Carousel_slides_button} onClick={executeScroll}>
                  {HOME.slidesButtons[index]}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <div
        className="subHeading"
        style={{
          backgroundImage: `url(${IMAGES.landing.subheading})`,
          backgroundSize: "cover",
          position: "relative",
          height: `${carh - 200}px`,
        }}>
        <div style={subHeading_text}>{HOME.subheading}</div>
      </div>

      <div id="features" style={topHeading}>
        Our Features
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: width > 600 ? "row" : "column",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "30px",
        }}>
        {HOME.features.map((item, index) => (
          <FeatureCard
            key={index}
            item={item}
            containerStyle={featureContainer}
            titleStyle={featureTitleStyle}
            textStyle={{...featureTextStyle, height: ""}}
            iconStyle={featureIconStyle}
          />
        ))}
      </div>
      <div className="our_clients_container">
        <div
          id="clients"
          style={{
            ...topHeading,
            marginBottom: "50px",
          }}>
          {HOME.ourClients}
        </div>
        <div style={our_clients_content}>
          {IMAGES.landing.clients.map((src, index) => (
            <img key={index} src={src} alt={src} width={`${clientImageWidth}px`} />
          ))}
        </div>
      </div>
      <div style={{...topHeading, backgroundColor: "#f9f9f9"}}>
        <div id="about" style={topHeading}>
          {HOME.aboutUs}
        </div>
        <div className="about_us_content" style={{flexDirection: width > 600 ? "row" : "column"}}>
          {IMAGES.landing.aboutUs.map((src, index) => (
            <div
              key={index}
              className="about_us_images"
              style={{
                width: width > 600 ? "32%" : "80%",
                marginBottom: width > 600 ? "0px" : "20px",
              }}>
              <img
                src={src}
                alt={src}
                height={`${clientImageWidth / 1.5}px`}
              />
              <div style={about_us_text}>{HOME.aboutUsLogoName[index]}</div>
              <div style={{...featureTextStyle, width: width > 600 ? "90%" : "100%"}}>
                {HOME.aboutUsDescription[index]}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={about_us_container} ref={contacts}>
        <div id="contact" style={{...topHeading, marginBottom: "50px"}}>
          Contact Us
        </div>
        <div style={{width: "70%"}}>
          <input
            placeholder="Name"
            style={{
              ...contact_us_input,
            }}
          />
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              flexDirection: width > 600 ? "row" : "column",
              margin: "10px 0",
            }}>
            <input
              placeholder="Email"
              style={{
                ...contact_us_input,
                marginRight: "20px",
                marginBottom: width > 600 ? "0px" : "10px",
              }}
            />
            <input placeholder="Mobile" style={contact_us_input} />
          </div>
          <textarea className="textarea" placeholder="Message" style={contact_us_textarea} />
          <input type="button" style={contact_us_button} value="Send" />
        </div>
      </div>
    </Fragment>
  )
}
