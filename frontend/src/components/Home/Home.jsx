import React, { useEffect } from 'react';
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import sunImage from "../../Images/sun.jpg"
import mercuryImage from "../../Images/mercury.jpg"
import venusImage from "../../Images/venus.jpg"

const Home = () => {
  useEffect(() => {
    const scene=new THREE.Scene();


    const camera=new THREE.PerspectiveCamera(50,
      window.innerWidth/window.innerHeight,
      0.3,
      1000);

    const canvas=document.querySelector(".homeCanvas");
    const renderer=new THREE.WebGLRenderer({canvas});

    const textureLoader1=new THREE.TextureLoader();
    const textureLoader2=new THREE.TextureLoader();
    const textureLoader3=new THREE.TextureLoader();


    const sunTexture=textureLoader1.load(sunImage); 
    const sunGeometry=new THREE.SphereGeometry(10,64,64);
    const sunMaterial=new THREE.MeshBasicMaterial({map:sunTexture});
    const sun=new THREE.Mesh(sunGeometry,sunMaterial);


    const mercuryTexture=textureLoader2.load(mercuryImage); 
    const mercuryGeometry=new THREE.SphereGeometry(4,64,64);
    const mercuryMaterial=new THREE.MeshStandardMaterial({map:mercuryTexture});
    const mercury=new THREE.Mesh(mercuryGeometry,mercuryMaterial);
    const mercuryAxisGeometry = new THREE.RingGeometry( 70, 70.5, 200 ); 
    const mercuryAxisMaterial = new THREE.MeshBasicMaterial( { color: 0xa1a1a1, side: THREE.DoubleSide } );
    const mercuryAxis = new THREE.Mesh( mercuryAxisGeometry, mercuryAxisMaterial );

    const venusTexture=textureLoader3.load(venusImage);
    const venusGeometry=new THREE.SphereGeometry(4,64,64);
    const venusMaterial=new THREE.MeshStandardMaterial({map:venusTexture});
    const venus=new THREE.Mesh(venusGeometry,venusMaterial);
    const venusAxisGeometry = new THREE.RingGeometry( 100, 100.5, 200 ); 
    const venusAxisMaterial = new THREE.MeshBasicMaterial( { color: 0xa1a1a1, side: THREE.DoubleSide } );
    const venusAxis = new THREE.Mesh( venusAxisGeometry, venusAxisMaterial );
    
    
    const pointLight=new THREE.PointLight(0xffffff,10000);
    pointLight.position.set(0,0,0);
    const lightHelper=new THREE.PointLightHelper(pointLight);
    const controls=new OrbitControls(camera,renderer.domElement);
      
    sun.position.set(0,0,0); 
    mercury.position.set(50,0,50); 
    mercuryAxis.position.set(0,0,0);  
    venus.position.set(100,0,0);
    venusAxis.position.set(0,0,0);

    mercuryAxis.rotation.set(1.55,0,0);
    venusAxis.rotation.set(1.55,0,0);

    scene.add(sun);
    scene.add(mercury);
    scene.add( mercuryAxis );
    scene.add(venus);
    scene.add(venusAxis);
    scene.add(pointLight); 
    scene.add(lightHelper);
    camera.position.set(0,0,200);
    const animate = () =>{
      requestAnimationFrame(animate);
      mercury.rotation.y+=0.01;
      venus.rotation.y+=0.01;
      renderer.setSize(window.innerWidth,window.innerHeight);
      renderer.render(scene,camera);
    }
    animate();
  }, [])
  
  return (
    <div className='home'>
      <canvas className="homeCanvas"></canvas>nvas
    </div>
  )
}

export default Home