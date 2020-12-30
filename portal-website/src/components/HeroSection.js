import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
import { Button } from './Pages/Button'
import './HeroSection.css'

import Ellingsen from './Pages/Images/Partners/Ellingsen.png';
import UiO from './Pages/Images/Partners/UIOBlack.png';
import Insj from './Pages/Images/Partners/Insj.png';
import Kjeller from './Pages/Images/Partners/Kjeller.jpg';
import Meteor from './Pages/Images/Partners/Meteor.png';
import Romsenter from './Pages/Images/Partners/Space_Agency.png';
import OsloMET from './Pages/Images/Partners/OsloMET.jpg';
import Dspace from './Pages/Images/Partners/4Dspace.png';
import Anders from './Pages/Images/Partners/Anders_Brennhagen.jpg';
import Ketil from './Pages/Images/Partners/Ketil_Røed.jpeg';
import Rasmus from './Pages/Images/Partners/Rasmus.jpg';




function HeroSection() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () =>  setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    return (
        <>
            <div className='hero-container'>
                <div className='title'>
                    <h1>Expanding the portal to space</h1> 
                </div>
            </div>
            <div className='nero-container'>
                <div className='nero-title'>
                    <h1>Project Nero</h1> 
                </div>
                <div className = 'nero-Button'>
                    {Button && <Button buttonStyle='btn--outline' destination='/Nero'>Learn More</Button>}
                </div>
            </div>
            <div className='novus-container'>
                <div className='novus-title'>
                    <h1>Project Novus</h1> 
                </div>
                <div className = 'novus-Button'>
                    {Button && <Button buttonStyle='btn--outline' destination='/Novus'>Learn More</Button>}
                </div>
            </div>
            <div className='text'>
                <h1>asdfasdf</h1>

            </div>
            <div className="sponsors_container">
                <div className="sponsor-title">
                    <h1>Partners</h1>
                </div>
                <div className="centered">
                    {/*
                    <img class="Ellingsen" src={Ellingsen} alt="Ellingsen"/>
                    <br/>
                    <img class="Romsenter" src={Romsenter} alt="Romsenter"/>
                    <br/>
                    <img class="UIO" src={UiO} alt="UIO"/>        
                    <img class="Insj" src={Insj} alt="Insj"/>
                    <img class="Dspace" src={Dspace} alt="Dspace"/>
                    <img class="OsloMET" src={OsloMET} alt="OsloMET"/>
                    <img class="Meteor" src={Meteor} alt="Meteor"/>
                    <img class="Kjeller" src={Kjeller} alt="Kjeller"/>                
                    */}
                </div>
            </div>
        </>
    )
}

export default HeroSection
