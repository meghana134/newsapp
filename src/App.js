import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import NewsItems from './components/NewsItems';
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <News pagesize={5}/>
      

      </div>
    )
  }
}
