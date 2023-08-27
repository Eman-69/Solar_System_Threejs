const mongoose=require('mongoose');


const SolarsystemSchema=new mongoose.Schema({
    name:String,
    distance_from_sun_km:Number,
    radius_km:Number,
    gravitational_force:Number,
    temperature_celsius:Number,
    src:String,
    des:String,
})

const SolarsystemModel=mongoose.model("planets",SolarsystemSchema);
module.exports=SolarsystemModel;