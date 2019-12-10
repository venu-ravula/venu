import React from 'react';
import logo from './logo.svg';
import Dashbord from "./components/dashbord";
import MyChart from "./components/chart";
import newMap from "./components/newMap";
import Maps from "./components/maps";
import Map3 from "./components/map3";
import Map4 from "./components/map4";
import Home from "./components/home";
import Home1 from "./components/home1";

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (
    <div className="App">
     <Home />
     {/*
<Router>
  <Switch>
    
 <Route path='/dashbord' component={Dashbord}></Route>
<Route path='/chart' component={MyChart}></Route>
<Route path='/map1' component={Maps}></Route>
<Route path='/map2' component={newMap}></Route>
<Route path='/map3' component={Map3}></Route>
<Route path='/map4' component={Map4}></Route>
<Route path='/home1' component={Home1}></Route>
 <Route path='/' component={Home}></Route>
  
</Switch>
</Router>
*/}

     
    </div>
  );
}

export default App;
