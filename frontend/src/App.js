import './App.css';
import Home from './components/Home/Home';
import Sun from './components/Sun/Sun';
import Header from './components/Header/Header';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>   
        <Route path="/Sun" element={<Sun/>}/>   
      </Routes>
    </Router>
  );
}

export default App;
