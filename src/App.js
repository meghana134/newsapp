import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import NewsItems from './components/NewsItems';
import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <News pagesize={5} country="in" category="technology"/>
      

      </div>
    )
  }
}
