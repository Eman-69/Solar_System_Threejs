import React from 'react'
import "../planet.css"
import * as THREE from "three"
import sunImage from '../../Images/sun.jpg'

const Sun = () => {
  React.useEffect(()=>{
    const scene=new THREE.Scene();
    
    const camera=new THREE.PerspectiveCamera(50,
      window.innerWidth/window.innerHeight,
      10,
      400);

    const canvas=document.querySelector(".sunCanvas");
    const renderer=new THREE.WebGLRenderer({canvas});

    const textureLoader1=new THREE.TextureLoader();

    const sunTexture=textureLoader1.load(sunImage); 
    const sunGeometry=new THREE.SphereGeometry(100,64,64);
    const sunMaterial=new THREE.MeshStandardMaterial({map:sunTexture});
    const sun=new THREE.Mesh(sunGeometry,sunMaterial);

    const pointLight=new THREE.PointLight(0xEBE0D0,500000);
    pointLight.position.set(0,0,400);
    const lightHelper=new THREE.PointLightHelper(pointLight,0);
    // lightHelper.matrix=false;
    
    sun.position.set(-150,0,0); 
    camera.position.set(0,0,400);

    scene.add(sun);
    scene.add(pointLight); 
    scene.add(lightHelper);
  

    const animate = () =>{
      requestAnimationFrame(animate);
      sun.rotation.y+=0.005;
      renderer.setSize(window.innerWidth,window.innerHeight);
      renderer.render(scene,camera);

    }
    animate();
  },[])
  return (
    <div className='sun'>

      <canvas className='sunCanvas'></canvas>


      <div className='page'>
      <div className="gridcontainer">
          <div></div>
          <div className="text">
            <div className="title">Sun<hr/></div>
            <div className='info'><br/>The Sun is a type of star, primarily composed of hydrogen and helium.</div>
          </div>
        </div>
      </div>


      <div  className='page'>
        <div className="gridcontainer">
          <div></div>
          <div className='text'>
            <div className="title">Sun<hr/></div>
            <div className="info">
              <br/>
                <ul>
                  <li><b>Size:</b>It is a large, roughly spherical object with a diameter of about 1.4 million kilometers</li>
                  <li><b>Temperature:</b>27 million degrees Fahrenheit</li>
                </ul>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Sun