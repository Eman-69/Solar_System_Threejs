import React from 'react'
import {ReactNavbar} from "overlay-navbar"
import {FaUserAlt} from "react-icons/fa"

const Header = () => {
  return (
    <ReactNavbar 
    navColor1="white" 
    navColor2="grey"
    burgerColor="black"
    burgerColorHover="darkgrey"
    nav2justifyContent="space-around"
    nav3justifyContent="space-around"
    logoWidth="250px"
    link1Text="Home"
    link2Text="About"
    link3Text="Projects"
    link4Text="Contact Me"    
    link1Url="/home"
    link2Url="/about"
    link3Url="/projects"
    link4Url="/contact"
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