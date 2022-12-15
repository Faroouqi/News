import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import './App.css';
import Navbar from './Navbar';
import News from './News';
import About from './About';
import Home from './Home';
import Info from './Info';
function App() {
  return (
    <>
      <Router>
      
      <div className="App">
        <header className="App-header">
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
            <Route exact path="/News" element={<News/>}/>
            <Route exact path="/About"  element={<Info/>}/>
            <Route exact path="/Sports" element={<About key="sports" Category="sports"/>}/>
            <Route exact path="/Business" element={<About key="business" Category="business"/>}/>
            <Route exact path="/Health" element={<About key="health" Category="health"/>}/>
            <Route exact path="/Science" element={<About key="science" Category="science"/>}/>
            <Route exact path="/Technology" element={<About key="technology" Category="technology"/>}/>
            <Route exact path="/General" element={<About  key="general" Category="general"/>}/>
          </Routes>
        </header>
      </div>
      </Router>
    </>
  );
}

export default App;
