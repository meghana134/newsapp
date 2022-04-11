import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import NewsItems from './components/NewsItems';

export default class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <News/>
      

      </div>
    )
  }
}
