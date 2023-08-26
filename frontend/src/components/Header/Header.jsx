import React from 'react'
import {ReactNavbar} from "overlay-navbar"
import {FaUserAlt} from "react-icons/fa"
import logo from "../../Images/logo.png"

const Header = () => {
  return (
    <ReactNavbar 
    navColor1="darkgrey" 
    navColor2="black"
    burgerColor="grey"
    burgerColorHover="grey"
    nav2justifyContent="space-around"
    nav3justifyContent="space-around"
    logoWidth="250px"
    logo={logo}
    link1Text="Home"
    link2Text="Sun"
    link3Text="Planets"
    link4Text="About Me"  
    link1Url="/"
    link2Url="/sun"
    link3Url="/planet"
    link4Url="/about"
    link1ColorHover="white"
    link1Color="darkgrey"
    link1Size="1.5rem"
    link1Padding="3vmax"   
    profileIcon={true}
    ProfileIconElement={FaUserAlt}
    profileIconColor="darkgrey"
    profileIconColorHover="white"
    />
  )
}

export default Header