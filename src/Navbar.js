import React, { Component } from 'react'
import {Link} from "react-router-dom";
import './App.css';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">News</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
              <Link to="/" className="nav-link active" aria-current="page"> Home</Link> 
            </li>

            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="#">About</a> */}
              <Link to="/About" className="nav-link active" aria-current="page"> About</Link>             
            </li>
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="#">News</a> */}
              <Link to="/News" className="nav-link active" aria-current="page"> News</Link> 
            </li>
           
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="#">News</a> */}
              <Link to="/Sports" className="nav-link active" aria-current="page"> Sports</Link> 
            </li>
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="#">News</a> */}
              <Link to="/Technology" className="nav-link active" aria-current="page"> Technology</Link> 
            </li>
           
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="#">News</a> */}
              <Link to="/General" className="nav-link active" aria-current="page"> General</Link> 
            </li>
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="#">News</a> */}
              <Link to="/Health" className="nav-link active" aria-current="page"> Health</Link> 
            </li>
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="#">News</a> */}
              <Link to="/Science" className="nav-link active" aria-current="page"> Science</Link> 
            </li>
            
           
         
            
          </ul>
          
        </div>
      </div>
    </nav>
    
    )
  }
}
