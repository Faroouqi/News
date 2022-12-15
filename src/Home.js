import React, { Component } from 'react'
import './App.css';

export default class Home extends Component {
  render() {
    let url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2JB6khCW4urTwrBzQbUzaeeI4a-R_vD6Mhw&usqp=CAU"
    return (
        <div className='in'>
             <img className="image" src={url}/>
            <div className='container'>

      <h1 className='welcome' >Welcome to News Home Page</h1>
      <p className='quotes'>When trials come people can be weak, negative feelings can rise within.</p>

<p className='quotes1'>They may lack clarity on the will of God or the path that's best for them to practice.</p>
      </div>
      </div>
    )
  }
}
