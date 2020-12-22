import React, {useState} from "react"
import DropdownWrapper from "react-dropdown-wrapper"
import {IMAGES} from "../../image"

export function DropDownNav({navIndex, setNavIndex, navbarHover, navbar}) {
  const bg_primary = {
    display: "inline-flex",
    flexDirection: "column",
    maxWidth: "200px",
  }
  const navbarLabels = [
    {label: "Features", link: "#features"},
    {label: "Clients", link: "#clients"},
    {label: "About", link: "#about"},
    {label: "Contact", link: "#contact"},
  ]
  return (
    <DropdownWrapper closeOnEsc onStateChange={console.log} wrapperProps={bg_primary}>
      {({changeStatus, isShow}) => (
        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
          <img
            src={IMAGES.landing.menuIcon}
            alt="menu icon"
            style={{width: "4.5vw"}}
            onClick={() => changeStatus(!isShow)}></img>
          {isShow && (
            <div>
              {navbarLabels.map((item, index) => (
                <div style={{background: "white"}}>
                  <a
                    style={
                      index === navIndex
                        ? {
                            ...navbarHover,
                            width: "20vw",
                          }
                        : {
                            ...navbar,
                            width: "20vw",
                            paddingRight: "10vw",
                          }
                    }
                    href={item.link}
                    key={index}
                    onMouseEnter={() => setNavIndex(index)}
                    onMouseLeave={() => setNavIndex(-1)}>
                    {item.label}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </DropdownWrapper>
  )
}
