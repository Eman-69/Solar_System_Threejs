import React from 'react'
import { Link } from "react-router-dom"
import "./Planet.css"

const Planet = ({planet}) => {
    
    const Image=`../../Images/${planet.name}bg.jpg`;
    const style = {backgroundImage: `url(${Image})`};
    console.log(Image)
  return (
    <div key={planet._id.$oid} className='planetContainer' style={style}>

    <Link to={`./${planet._id}`} className='planetTitle' >{planet.name}</Link>
    </div>

  )
}

export default Planet