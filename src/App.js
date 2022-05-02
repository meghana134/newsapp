import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import NewsItems from "./components/NewsItems";
import "./App.css";
// import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/">
          </Route>
          <Route exact path="/technology">
          <News key="technology" pagesize={5} country="in" category="technology"/>
          </Route>
          <Route exact path="/health">
          <News key="health" pagesize={5} country="in" category="health"/>
          </Route>
          <Route exact path="/science">
          <News key="science" pagesize={5} country="in" category="science"/>
          </Route>
          <Route exact path="/sports">
          <News key="sports" pagesize={5} country="in" category="sports"/>
          </Route>
          <Route exact path="/film">
          <News key="film" pagesize={5} country="in" category="film"/>
          </Route>


          
        </Switch>
        </Router>
      </div>
    );
  }
}
