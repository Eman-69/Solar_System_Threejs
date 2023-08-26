import React, { useEffect } from 'react';
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import sunImage from "../../Images/sun.jpg"
import mercuryImage from "../../Images/mercury.jpg"
import venusImage from "../../Images/venus.jpg"
import earthImage from "../../Images/earth.jpg"
import marsImage from "../../Images/mars.jpg"
import jupiterImage from "../../Images/jupiter.jpg"
import saturnImage from "../../Images/saturn.jpg"
import saturnRingImage from "../../Images/saturnring.png"
import uranusImage from "../../Images/uranus.jpg"
import neptuneImage from "../../Images/neptune.jpg"


const Home = () => {
  useEffect(() => {
    const scene=new THREE.Scene();


    const camera=new THREE.PerspectiveCamera(50,
      window.innerWidth/window.innerHeight,
      0.3,
      3000);

    const canvas=document.querySelector(".homeCanvas");
    const renderer=new THREE.WebGLRenderer({canvas});

    const textureLoader1=new THREE.TextureLoader();
    const textureLoader2=new THREE.TextureLoader();
    const textureLoader3=new THREE.TextureLoader();
    const textureLoader4=new THREE.TextureLoader();
    const textureLoader5=new THREE.TextureLoader();
    const textureLoader6=new THREE.TextureLoader();
    const textureLoader7=new THREE.TextureLoader();
    const textureLoader8=new THREE.TextureLoader();
    const textureLoader9=new THREE.TextureLoader();


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

    const marsTexture=textureLoader5.load(marsImage);
    const marsGeometry=new THREE.SphereGeometry(12,64,64);
    const marsMaterial=new THREE.MeshStandardMaterial({map:marsTexture});
    const mars=new THREE.Mesh(marsGeometry,marsMaterial);
    const marsAxisGeometry = new THREE.RingGeometry( 500, 500.5, 200 ); 
    const marsAxisMaterial = new THREE.MeshBasicMaterial( { color: 0xa1a1a1, side: THREE.DoubleSide } );
    const marsAxis = new THREE.Mesh( marsAxisGeometry, marsAxisMaterial );

    const jupiterTexture=textureLoader6.load(jupiterImage);
    const jupiterGeometry=new THREE.SphereGeometry(18,64,64);
    const jupiterMaterial=new THREE.MeshStandardMaterial({map:jupiterTexture});
    const jupiter=new THREE.Mesh(jupiterGeometry,jupiterMaterial);
    const jupiterAxisGeometry = new THREE.RingGeometry( 600, 600.5, 200 ); 
    const jupiterAxisMaterial = new THREE.MeshBasicMaterial( { color: 0xa1a1a1, side: THREE.DoubleSide } );
    const jupiterAxis = new THREE.Mesh( jupiterAxisGeometry, jupiterAxisMaterial );

    const saturnTexture=textureLoader7.load(saturnImage);
    const saturnGeometry=new THREE.SphereGeometry(15,64,64);
    const saturnMaterial=new THREE.MeshPhongMaterial({map:saturnTexture});
    const saturn=new THREE.Mesh(saturnGeometry,saturnMaterial);   
    const saturnRingTexture=textureLoader7.load(saturnRingImage); 
    const saturnRingGeometry = new THREE.RingGeometry( 20, 30.5, 200 ); 
    const saturnRingMaterial = new THREE.MeshPhongMaterial( {map:saturnRingTexture,side: THREE.DoubleSide} );
    const saturnRing = new THREE.Mesh( saturnRingGeometry, saturnRingMaterial );
    const saturnAxisGeometry = new THREE.RingGeometry( 700, 700.5, 200 ); 
    const saturnAxisMaterial = new THREE.MeshBasicMaterial( { color: 0xa1a1a1, side: THREE.DoubleSide } );
    const saturnAxis = new THREE.Mesh( saturnAxisGeometry, saturnAxisMaterial );

    const uranusTexture=textureLoader8.load(uranusImage);
    const uranusGeometry=new THREE.SphereGeometry(18,64,64);
    const uranusMaterial=new THREE.MeshStandardMaterial({map:uranusTexture});
    const uranus=new THREE.Mesh(uranusGeometry,uranusMaterial);
    const uranusAxisGeometry = new THREE.RingGeometry( 800, 800.5, 200 ); 
    const uranusAxisMaterial = new THREE.MeshBasicMaterial( { color: 0xa1a1a1, side: THREE.DoubleSide } );
    const uranusAxis = new THREE.Mesh( uranusAxisGeometry, uranusAxisMaterial );

    const neptuneTexture=textureLoader9.load(neptuneImage);
    const neptuneGeometry=new THREE.SphereGeometry(18,64,64);
    const neptuneMaterial=new THREE.MeshStandardMaterial({map:neptuneTexture});
    const neptune=new THREE.Mesh(neptuneGeometry,neptuneMaterial);
    const neptuneAxisGeometry = new THREE.RingGeometry( 900, 900.5, 200 ); 
    const neptuneAxisMaterial = new THREE.MeshBasicMaterial( { color: 0xa1a1a1, side: THREE.DoubleSide } );
    const neptuneAxis = new THREE.Mesh( neptuneAxisGeometry, neptuneAxisMaterial );
    
    const pointLight=new THREE.PointLight(0xEBE0D0,1000000);
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
    mars.position.set(490,0,100);
    marsAxis.position.set(0,0,0);
    jupiter.position.set(600,0,-100);
    jupiterAxis.position.set(0,0,0);
    saturn.position.set(670,0,-200);
    saturnRing.position.set(670,0,-200);
    saturnAxis.position.set(0,0,0);    
    uranus.position.set(780,0,-200);
    uranusAxis.position.set(0,0,0);
    neptune.position.set(850,0,-300);
    neptuneAxis.position.set(0,0,0);

    

    mercuryAxis.rotation.set(1.55,0,0);
    venusAxis.rotation.set(1.55,0,0);
    earthAxis.rotation.set(1.55,0,0);
    marsAxis.rotation.set(1.55,0,0);
    jupiterAxis.rotation.set(1.55,0,0);
    saturnAxis.rotation.set(1.55,0,0);
    uranusAxis.rotation.set(1.55,0,0);
    neptuneAxis.rotation.set(1.55,0,0);


    camera.position.set(75.43697937281503, 205.86200585517332, 1179.8008716255406);
    camera.rotation.set(-0.17274958702049947, 0.06290562877026355, 0.010968648369911327);
    scene.add(controls);
    scene.add(sun);
    scene.add(mercury);
    scene.add( mercuryAxis );
    scene.add(venus);
    scene.add(venusAxis);
    scene.add(earth);
    scene.add(earthAxis);
    scene.add(mars);
    scene.add(marsAxis);
    scene.add(jupiter);
    scene.add(jupiterAxis);
    scene.add(saturn);
    scene.add(saturnRing);
    scene.add(saturnAxis);
    scene.add(uranus);
    scene.add(uranusAxis);
    scene.add(neptune);
    scene.add(neptuneAxis);
    scene.add(pointLight); 
    scene.add(lightHelper);




    const animate = () =>{
      requestAnimationFrame(animate);
      mercury.rotation.y+=0.01;
      venus.rotation.y+=0.01;
      venus.rotation.y+=0.01;
      earth.rotation.y+=0.01;
      mars.rotation.y+=0.01;
      jupiter.rotation.y+=0.01;
      saturn.rotation.y+=0.01;
      saturnRing.rotation.z-=0.005;
      uranus.rotation.y+=0.01;
      neptune.rotation.y+=0.01;
      renderer.setSize(window.innerWidth,window.innerHeight);
      renderer.render(scene,camera);

    }
    animate();
  }, [])
  
  return (
    <div className='home'>
      <canvas className="homeCanvas"></canvas>
    </div>
  )
}

export default Home