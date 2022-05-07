import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import NewsItems from "./components/NewsItems";
import "./App.css";
// import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
pagesize=5;
// apiKey=process.env.REACT_APP_NEWS_API

//is a method
state ={
  progress:0

}
setProgress=(progress)=>{
  this.setState({progress:progress})

}

  render() {
    return (
      <div>
      <Router>
      <Navbar />
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
        <Switch>
          <Route exact path="/">
          <News setProgress={this.setProgress}    key="general" pagesize={5} country="in" category="general"/>
          </Route>
          <Route exact path="/technology">
          <News setProgress={this.setProgress}  key="technology" pagesize={5} country="in" category="technology"/>
          </Route>
          <Route exact path="/health">
          <News setProgress={this.setProgress}  key="health" pagesize={5} country="in" category="health"/>
          </Route>
          <Route exact path="/science">
          <News setProgress={this.setProgress}   key="science" pagesize={5} country="in" category="science"/>
          </Route>
          <Route exact path="/sports">
          <News setProgress={this.setProgress}  key="sports" pagesize={5} country="in" category="sports"/>
          </Route>
          <Route exact path="/film">
          <News setProgress={this.setProgress}   key="film" pagesize={5} country="in" category="film"/>
          </Route>
          <Route exact path="/about">
          <News setProgress={this.setProgress}   key="film" pagesize={5} country="in" category="about"/>
          </Route>


          
        </Switch>
        </Router>
      </div>
    );
  }
}
