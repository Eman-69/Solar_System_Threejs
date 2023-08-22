import React, { useEffect } from 'react';
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import sunImage from "../../Images/sun.jpg"
import mercuryImage from "../../Images/mercury.jpg"
import venusImage from "../../Images/venus.jpg"
import earthImage from "../../Images/earth.jpg"


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
    const textureLoader4=new THREE.TextureLoader();


    const sunTexture=textureLoader1.load(sunImage); 
    const sunGeometry=new THREE.SphereGeometry(100,64,64);
    const sunMaterial=new THREE.MeshBasicMaterial({map:sunTexture});
    const sun=new THREE.Mesh(sunGeometry,sunMaterial);


    const mercuryTexture=textureLoader2.load(mercuryImage); 
    const mercuryGeometry=new THREE.SphereGeometry(4,64,64);
    const mercuryMaterial=new THREE.MeshStandardMaterial({map:mercuryTexture});
    const mercury=new THREE.Mesh(mercuryGeometry,mercuryMaterial);
    const mercuryAxisGeometry = new THREE.RingGeometry( 205, 205.5, 200 ); 
    const mercuryAxisMaterial = new THREE.MeshBasicMaterial( { color: 0xa1a1a1, side: THREE.DoubleSide } );
    const mercuryAxis = new THREE.Mesh( mercuryAxisGeometry, mercuryAxisMaterial );

    const venusTexture=textureLoader3.load(venusImage);
    const venusGeometry=new THREE.SphereGeometry(10,64,64);
    const venusMaterial=new THREE.MeshStandardMaterial({map:venusTexture});
    const venus=new THREE.Mesh(venusGeometry,venusMaterial);
    const venusAxisGeometry = new THREE.RingGeometry( 300, 300.5, 200 ); 
    const venusAxisMaterial = new THREE.MeshBasicMaterial( { color: 0xa1a1a1, side: THREE.DoubleSide } );
    const venusAxis = new THREE.Mesh( venusAxisGeometry, venusAxisMaterial );
    
    const earthTexture=textureLoader4.load(earthImage);
    const earthGeometry=new THREE.SphereGeometry(12,64,64);
    const earthMaterial=new THREE.MeshStandardMaterial({map:earthTexture});
    const earth=new THREE.Mesh(earthGeometry,earthMaterial);
    const earthAxisGeometry = new THREE.RingGeometry( 400, 400.5, 200 ); 
    const earthAxisMaterial = new THREE.MeshBasicMaterial( { color: 0xa1a1a1, side: THREE.DoubleSide } );
    const earthAxis = new THREE.Mesh( earthAxisGeometry, earthAxisMaterial );
    
    const pointLight=new THREE.PointLight(0xEBE0D0,100000);
    pointLight.position.set(0,0,0);
    const lightHelper=new THREE.PointLightHelper(pointLight);
    const controls=new OrbitControls(camera,renderer.domElement);
      
    sun.position.set(0,0,0); 
    mercury.position.set(200,0,50); 
    mercuryAxis.position.set(0,0,0);  
    venus.position.set(300,0,0);
    venusAxis.position.set(0,0,0); 
    earth.position.set(350,0,200);
    earthAxis.position.set(0,0,0);

    mercuryAxis.rotation.set(1.55,0,0);
    venusAxis.rotation.set(1.55,0,0);
    earthAxis.rotation.set(1.55,0,0);


    scene.add(controls);
    scene.add(sun);
    scene.add(mercury);
    scene.add( mercuryAxis );
    scene.add(venus);
    scene.add(venusAxis);
    scene.add(earth);
    scene.add(earthAxis);
    scene.add(pointLight); 
    scene.add(lightHelper);
    camera.position.set(0,0,400);
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