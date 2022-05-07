import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import NewsItems from "./components/NewsItems";
import "./App.css";
 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
const pagesize=5;


//is a method

const [progress, setProgress]= useState(0);


  
    return (
      <div>
      <Router>
      <Navbar />
      <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
        <Switch>
          <Route exact path="/">
          <News setProgress={setProgress}    key="general" pagesize={5} country="in" category="general"/>
          </Route>
          <Route exact path="/technology">
          <News setProgress={setProgress}  key="technology" pagesize={5} country="in" category="technology"/>
          </Route>
          <Route exact path="/health">
          <News setProgress={setProgress}  key="health" pagesize={5} country="in" category="health"/>
          </Route>
          <Route exact path="/science">
          <News setProgress={setProgress}   key="science" pagesize={5} country="in" category="science"/>
          </Route>
          <Route exact path="/sports">
          <News setProgress={setProgress}  key="sports" pagesize={5} country="in" category="sports"/>
          </Route>
          <Route exact path="/film">
          <News setProgress={setProgress}   key="film" pagesize={5} country="in" category="film"/>
          </Route>
          <Route exact path="/about">
          <News setProgress={setProgress}   key="film" pagesize={5} country="in" category="about"/>
          </Route>


          
        </Switch>
        </Router>
      </div>
    );
  }
export default App;
