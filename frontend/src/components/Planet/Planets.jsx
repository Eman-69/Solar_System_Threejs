import React from 'react'
import axios from "axios"
import Planet from "./Planet"
import "./Planet.css"
const Planets = () => {
    const [planets,setPlanets]=React.useState([]);
    React.useEffect(()=>{
        const fetchPlanets=()=>
        {
            const options={
                method:'GET',
                url:'https://solarsytem.onrender.com/getPlanets',
                
            };
            axios.request(options).then(function(response)
            {
                setPlanets(response.data);
            }).catch(function(err){
                console.error(err);
            })

        }
        fetchPlanets();
    },[]);
  return (
    <div className='planets'>
        {
            <div className="planetsContainer">{
            planets.map((planet)=>{
                return (
                    <Planet key={planet._id.$oid} planet={planet} /> 
                   
                    )

            })}
             </div>  
        }
    </div>
  )
}

export default Planets