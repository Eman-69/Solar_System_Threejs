import './App.css';
import Home from './components/Home/Home';
import Sun from './components/Sun/Sun';
import Planets from './components/Planet/Planets';
import Planet from './components/Planet/Planett';
import Header from './components/Header/Header';
import {BrowserRouter as Route,Routes} from "react-router-dom"
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>   
        <Route path="/Sun" element={<Sun/>}/>   
        <Route path="/Planets" element={<Planets/>}/>   
        <Route path="/Planets/:planetId" element={<Planet/>}/>   
      </Routes>
      </>
  );
}

export default App;
