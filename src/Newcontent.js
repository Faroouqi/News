import React, { Component } from 'react'
import './App.css';

export default class Newcontent extends Component {
   
  render() {
    let web="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/66e8e54a86b92ed129737b7fb651d9a6.jpg"
    let newdescription="To see the full news click Details to view the news ...................................."
    let {title,newurl,description,urlToImage}=this.props
    return (
      <div className='cont'>
        <div className="card" >
        <img src={urlToImage?urlToImage:web} className="card-img-top" alt=" "/>
  <div className="card-body">
    <h5 className="card-title">{title && title.slice(0,40)}....</h5>
    <p className="card-text">{description?description.slice(0,80):newdescription}.....</p>
    <a href={newurl} target="_blank" className="btn btn-primary btn-sm">Details</a>
  </div>
</div>
      </div>
    )
  }
}
