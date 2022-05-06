import React from 'react';
import pelle from './Images/IMG_20200806_221617.jpg'
import boom from './Images/Boom.png'
import vectorControl from './Images/vectorControl.png'
import avionics from './Images/Avionics.png'
import { Button } from './Button'
import './Novus.css'

const Novus = () => {
   return (
       
       <div className='novus'>
            <div className='Title'>
                <h1>Project Novus</h1>
                <p>
                    Two months prior to the official founding of Portal, we launched a total of four model rockets. As an attempt to learn more electronics and programing, it engaged us like no project before. Novus is a continuation of what sparked our interests and drove us to begin Portal.
                </p>
            </div>

            <div className='static-fire' />

            <div className='pelle-container'>
                <img class="pelle" src={pelle} alt="pelle"/>
                <p className='pelle-text-1'>
                    Here, we build model rockets. These can be anything from containing no electronics, to containing advanced thrust control systems and more.
                </p>
                <p className='pelle-text-2'>
                    Portal Novus gives a great introduction and hands on experience in electronics, 3d design aerodynamics and pyrotechnics. 
                </p>
                <p className='pelle-text-3'>
                    Join us to build, simulate, test and launch your very own rocket. 
                </p>
            </div>

            <div className='boom-container'>
                <img class="boom" src={boom} alt="boom"/>
                <p className='boom-text-1'>
                    We have many different fields, and whether you like to spend your time in the pyrotechnic lab or on the soldering bench. We have room for you!
                </p>
                <p className='boom-text-2'>
                    We use the 40-10 rule, which boils down to a lot of testing. This is usually very fun! and you might end ut with results you did not predict  
                </p>
            </div>

            <div className='avionics-container'>
                <img class="avionics" src={avionics} alt="avionics"/>
                <p className='avionics-text-1'>
                    Regardless of working on flight computers, launch pad or something else, we expect that everyone will get some basic understanding of Arduino and electronics.
                </p>
                <p className='avionics-text-2'>
                    All our circuits use Arduino in some way. They provide the possibility of simple code, and more complex code like the one we use in our TVC motor.
                </p>
            </div>

            <div className='vector-container'>
                <img class="vectorControl" src={vectorControl} alt="vectorControl"/>
                <p className='vector-text-1'>
                    We want to provide every student with the opportunity to work on rockets, therefore, there are no prerequisites for joining Portal Novus.
                </p>
                <p className='vector-text-2'>
                    Every member is given the choice of starting their own rocket project or joining an existing one. 
                </p>
            </div>

            <div className='join-container'>
                <h1>Want to join us?</h1>
                <p>
                    We're always looking for people to join. 
                </p>
                <p>
                Wether you are a technical or non-technical student. 
                </p>

                <div className = 'join-Button'>
                    {Button && <Button 
                        buttonStyle='btn--outline' 
                        destination='/novus-form'
                        buttonSize='btn--large'
                        >Join us
                        </Button>}
                </div>
            </div>
        </div>
       
   );
}
 
export default Novus;