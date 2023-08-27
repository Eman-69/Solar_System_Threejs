import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import "../celestialbody.css"
import * as THREE from "three"
import Mercury from "../../Images/mercury.jpg"
import Venus from "../../Images/venus.jpg"
import Earth from "../../Images/earth.jpg"
import Mars from "../../Images/mars.jpg"
import Jupiter from "../../Images/jupiter.jpg"
import Saturn from "../../Images/saturn.jpg"
import Uranus from "../../Images/uranus.jpg"
import Neptune from "../../Images/neptune.jpg"

import saturnRingImage from "../../Images/saturnring.png"

const Planett = () => {
  const { planetId } = useParams();
  const [step,setStep]=React.useState(false);
  const [ planet, setPlanets ] = React.useState({});

React.useEffect(() => {
  const fetchPlanets = () => {
    const options = {
      method: 'GET',
      url: `https://solarsytem.onrender.com/getPlanets/${planetId}`,
    };
    axios.request(options).then(function(response){
      setPlanets(response.data);
      console.log(options);
    }).catch(function (error) {
      console.error(error);
    })
  }
  fetchPlanets();
  setStep(true);  
}, [ step,planetId ])

  // var planetname,planetdist,planetsrc,planetradius,planetgravity,planettemperature;
  var planetname=planet.name;
  var planetdist=Math.round(planet.distance_from_sun_km/1000000);
  var planetradius=planet.radius_km;
  var planetgravity=planet.gravitational_force;
  var planettemperature=planet.temperature_celsius;
  var planetsrc=planet.src;
  var planetdes=planet.des;
  React.useEffect(()=>{
    
    console.log(step);
    const scene=new THREE.Scene();
    
    const camera=new THREE.PerspectiveCamera(50,
      window.innerWidth/window.innerHeight,
      10,
      400);

    const canvas=document.querySelector(".sunCanvas");
    const renderer=new THREE.WebGLRenderer({canvas});
    const textureLoader1=new THREE.TextureLoader();
    var sunTexture;
    var saturnring=false;
      console.log(planetname);
      if(planetname==="Mercury")
      sunTexture=textureLoader1.load(Mercury); 
      else if(planetname==="Venus")
      sunTexture=textureLoader1.load(Venus); 
      else if(planetname==="Earth")
      sunTexture=textureLoader1.load(Earth); 
      else if(planetname==="Mars")
      sunTexture=textureLoader1.load(Mars); 
      else if(planetname==="Jupiter")
      sunTexture=textureLoader1.load(Jupiter); 
      else if(planetname==="Saturn")
      {
      sunTexture=textureLoader1.load(Saturn); 
      saturnring=true;
      }
      else if(planetname==="Uranus")
      sunTexture=textureLoader1.load(Uranus); 
      else if(planetname==="Neptune")
      sunTexture=textureLoader1.load(Neptune); 

   
    const sunGeometry=new THREE.SphereGeometry(100,64,64);
    const sunMaterial=new THREE.MeshStandardMaterial({map:sunTexture});
    const sun=new THREE.Mesh(sunGeometry,sunMaterial);

    const pointLight=new THREE.PointLight(0xEBE0D0,500000);
    pointLight.position.set(0,0,400);
    const lightHelper=new THREE.PointLightHelper(pointLight,0);
    // lightHelper.matrix=false;
    
    sun.position.set(-150,0,40); 
    camera.position.set(0,0,400);
    
    var saturnRing;
    if(saturnring)
    {
      const saturnRingTexture=textureLoader1.load(saturnRingImage); 
      const saturnRingGeometry = new THREE.RingGeometry( 100, 140, 200 ); 
      const saturnRingMaterial = new THREE.MeshStandardMaterial( {map:saturnRingTexture,side: THREE.DoubleSide} );
      saturnRing = new THREE.Mesh( saturnRingGeometry, saturnRingMaterial );
      saturnRing.position.set(-120,10,110);
      saturnRing.rotation.set(-20,-0,0);
      scene.add(saturnRing);
    }

    scene.add(sun);
    scene.add(pointLight); 
    scene.add(lightHelper);
  

    const animate = () =>{
      requestAnimationFrame(animate);
      sun.rotation.y+=0.005;
      if(saturnring)
        saturnRing.rotation.z+=0.005;
      renderer.setSize(window.innerWidth,window.innerHeight);
      renderer.render(scene,camera);

    }
    animate();
  
  },[step,planetname,planetdist,planetsrc,planetradius,planetgravity,planettemperature,planetdes])
  return (
    <div className='sun'>

      <canvas className='sunCanvas'></canvas>


      <div className='page'>
      <div className="gridcontainer">
          <div></div>
          <div className="text">
            <div className="title">{planetname}<hr/></div>
            <div className='info'><br/>{planetdes}</div>
          </div>
        </div>
      </div>


      <div  className='page'>
        <div className="gridcontainer">
          <div></div>
          <div className='text'>
            <div className="title">{planetname}<hr/></div>
            <div className="info">
              <br/>
                <ul>
                  <li><b>Radius:</b>&nbsp;&nbsp;{planetradius}km</li>
                  <br />
                  <li><b>Distance from Sun:</b>&nbsp;&nbsp;{planetdist} Million km</li>
                  <br />
                  <li><b>Temperature:</b>&nbsp;&nbsp;{planettemperature} °C</li>
                  <br />
                  <li><b>Gravitional Force in m/s2:</b>&nbsp;&nbsp;{planetgravity}</li>
                  <br />
                </ul>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Planett