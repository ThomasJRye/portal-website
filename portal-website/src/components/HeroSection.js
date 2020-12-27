import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'


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
            <div className="sponsors_container">
                <div className="centered">
                    <h1>Meet our partners</h1>
                    <img class="Ellingsen" src="./Images/Partners/Ellingsen.png" alt="Ellingsen"/>
                    <img class="UIO" src="./Images/Partners/UIOBlack.png" alt="UIO"/>        
                    <img class="Insj" src="./Images/Partners/Insj.png" alt="Insj"/>
                    <img class="Dspace" src="./Images/Partners/4Dspace.png" alt="Dspace"/>
                    <img class="Meteor" src="./Images/Partners/Meteor Logo.png" alt="Meteor"/>
                    <img class="Kjeller" src="./Images/Partners/Kjeller.jpg" alt="Kjeller"/>                
                    <img class="Romsenter" src="resources/images/Partners/Romsenter.png" alt="Romsenter"/>
                </div>
            </div>
        </>
    )
}

export default HeroSection
