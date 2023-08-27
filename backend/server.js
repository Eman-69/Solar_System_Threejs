const express=require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");
const SolarsystemModel=require("./model/Solarsystem.js");
app.use(cors())
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/solarsystem");

app.get('/getPlanets',(req,res) => {
    SolarsystemModel.find()
    .then(planets=>res.json(planets))
    .catch(err=>res.json(err))
})
app.get('/getPlanets/:planet',(req,res) => {
     SolarsystemModel.findById(req.params.planet)
    .then(planets=>{res.json(planets); console.log(planets.name)})
    .catch(err=>res.json(err))
})
app.listen(3001,()=>{
    console.log("backend running at 3001");
})