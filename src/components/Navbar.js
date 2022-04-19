import React, { Component } from 'react';


export default class extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">NewsHunt</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="About">About</a>
      </li><li className="nav-item">
        <a className="nav-link" href="Science">Science</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="Health">Health</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="Technology">Technology</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="Sports">Sports</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="Film">Film</a>
      </li>
      
      
          
      
     
    </ul>
    
  </div>
</nav>
          
      </div>
    )
  }
}
