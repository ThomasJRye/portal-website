
import Header from './components/Header.js'
import background from './components/Pages/Images/Earth.jpg'
import React from "react";
import Navbar from './components/Navbar.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css'
import Home from './components/Pages/Home.js'
import HeroSection from './components/HeroSection.js';
import Footer from './components/Footer.js'
import Nero from './components/Pages/Nero.js'
import Novus from './components/Pages/Novus.js'



function App() {
  return (
    <>
    <Router>
      <Navbar />
      
      <Switch>
        <Route path='/' exact component=
        {Home} />
        <Route path="/nero" component={Nero}/>
        <Route path="/novus" component={Novus}/>
        <Route path='/novus-form' component={() => { 
          window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfepQywQLImOzJilq_fm4XkvsBqY38a0Sa9Wa1IurXmBBZazA/viewform'; 
          return null;
            }}/>    
        <Route path='/nero-form' component={() => { 
          window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSet7XDXDRVdk09m95aVcvt9UjkjC9WvvBtGpuxEE0dVc5Mumw/viewform'; 
          return null;
            }}/>    
      </Switch>
      <Footer />
    </Router>
      
    </>
  );
}

export default App;
