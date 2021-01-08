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
import Romsenter from './Pages/Images/Partners/Logo-Norsk-Romsenter-rgb-hvit-300 1.png';
import OsloMET from './Pages/Images/Partners/OsloMET.jpg';
import Dspace from './Pages/Images/Partners/4Dspace.png';
import Anders from './Pages/Images/Partners/Anders_Brennhagen.jpg';
import Ketil from './Pages/Images/Partners/Ketil_Røed.jpeg';
import Rasmus from './Pages/Images/Partners/Rasmus.jpg';
import Maskin from './Pages/Images/Partners/Maskinspecialisten.png';




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

            <div className="text_container">
                <div className="text">
                    <p>
                        We are a student association at the University of Oslo doing rocket science. Providing students with the opporunity to work on space related projects at any level, we combine theory and practice to solve real problems fast and cheap.                 
                    </p>
                    <br />
                    <p>
                        The new generation of launchers are rapidly reducing the cost of access to space. Portal Space prepares and inspires students to take their place in the space industry.
    We don’t know what the future of space travel will look like. All we know is that we are going to be a part of it.
                    </p>
                    <p>
                        There is no destiny, just stubborn people.                
                    </p>
                    <br />
                    <p>
                        There is no destiny, just stubborn people.                
                    </p>
                    <br />
                </div>
            </div>

            <div className="sponsors_container">
                <div className="sponsor-title">
                    <h1>Partners</h1>
                </div>
                <div className="centered">
                    <img class="Romsenter" src={Romsenter} alt="Romsenter"/>
                    <br />
                    <p>
                        The Norwegian Space Agency is a government agency responsible for organizing Norwegian space activities, particularly with respect to ESA and the EU, and for coordinating national space activities. 
                    </p>
                    <br />
                    <p>
                        Our main finacial supporter, they assist us in many techincal areas and help us with complex logistics.
                    </p>
                    <br />
                    
                    <img class="Ellingsen" src={Ellingsen} alt="Ellingsen"/>
                    <p>
                        Ellingsen systems AS is our main component supplier and are responsible for providing project Nero with valves and pipes. In addition, they assist with the assembly of these components, and gives Portal acces to their workshop. 
                    </p>
                    <br />
                    <p>
                        Ellingsen Systems AS have more than 50 years experience in the Norwegian Oil & Gas market, and are considered as one of the market leaders within their fields.
They supply a wide range of quality products and systems within their business areas: Chemical Injection and Instrumentation.                    
                    </p>
                    <br />

                    <img class="Insj" src={Insj} alt="Insj"/>
                    <p>
                        Insj UiO is a an organization for student innovation and entrepreneurship. They provide services like personal coaches, a legal clinic and an accelarator program                    </p>
                    <br />
                    <p>
                        Through  personal coaches, they help us with insights, product development, management and organizational culture.                     </p>
                    <br />

                    <img class="UIO" src={UiO} alt="UIO"/> 
                    <img class="Dspace" src={Dspace} alt="Dspace"/>
                    <img class="Kjeller" src={Kjeller} alt="Kjeller"/> 
                    <img class="Meteor" src={Meteor} alt="Meteor"/>
                    <img class="Maskin" src={Maskin} alt="Maskin"/>



                    {/*
                    
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
