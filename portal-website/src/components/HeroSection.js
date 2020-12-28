import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

import Ellingsen from './Images/Partners/Ellingsen.png';
import UiO from './Images/Partners/UIOBlack.png';
import Insj from './Images/Partners/Insj.png';
import Kjeller from './Images/Partners/Kjeller.jpg';
import Meteor from './Images/Partners/Meteor.png';
import Romsenter from './Images/Partners/Space_Agency.png';
import OsloMET from './Images/Partners/OsloMET.jpg';
import Dspace from './Images/Partners/4Dspace.png';
import Anders from './Images/Partners/Anders_Brennhagen.jpg';
import Ketil from './Images/Partners/Ketil_Røed.jpeg';
import Rasmus from './Images/Partners/Rasmus.jpg';




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
                    {Button && <Button buttonStyle='btn--outline'>Learn More</Button>}
                </div>
            </div>
            <div className='novus-container'>
                <div className='novus-title'>
                    <h1>Project Novus</h1> 
                </div>
                <div className = 'novus-Button'>
                    {Button && <Button buttonStyle='btn--outline'>Learn More</Button>}
                </div>
            </div>
            <div className='text'>
                <h1>asdfasdf</h1>

            </div>
            <div className="sponsors_container">
                <div className="centered">
                    <h1>Meet our partners</h1>
                    <img class="Ellingsen" src={Ellingsen} alt="Ellingsen"/>
                    <br/>
                    <img class="UIO" src={UiO} alt="UIO"/>        
                    <img class="Insj" src={Insj} alt="Insj"/>
                    <img class="Dspace" src={Dspace} alt="Dspace"/>
                    <img class="OsloMET" src={OsloMET} alt="OsloMET"/>
                    <img class="Meteor" src={Meteor} alt="Meteor"/>
                    <img class="Kjeller" src={Kjeller} alt="Kjeller"/>                
                    <img class="Romsenter" src={Romsenter} alt="Romsenter"/>
                </div>
            </div>
        </>
    )
}

export default HeroSection
