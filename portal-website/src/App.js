
import Header from './components/Header.js'
import background from './components/Images/Earth.jpg'
import React from "react";
import Navbar from './components/Navbar.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css'
import Home from './components/Pages/Home.js'



function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component=
        {Home} />
      </Switch>
    </Router>
      
    </>
  );
}

export default App;
