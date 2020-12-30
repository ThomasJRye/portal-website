import React from 'react';
import pelle from './Images/IMG_20200806_221617.jpg'
import launch from './Videos/novusLaunch.gif'
import { Button } from './Button'
import './Novus.css'

const Novus = () => {
   return (
       <>
           <div className='Title'>
               <h1>Project Novus</h1>
           </div>

           <div className='pelle-container'>
               <img class="pelle" src={pelle} alt="pelle"/>
               <p className='pelle-text-1'>
                  Gives a great introduction to hands on electronics and 3d design. Join us to build, simulate, test and launch your very own rocket. 
               </p>
               <p className='pelle-text-2'>
                  We will teach, and use topics such as aerodynamics, pyrotechnics, and electronics.
               </p>
               <img class="launch" src={launch} alt="launch"/>
                <p className='launch-text'>
                We launch of rockets right outside the UiO physics building!
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
                        destination='/nero-form'
                        buttonSize='btn--large'
                        >Join us
                        </Button>}
                </div>
            </div>

       </>
   );
}
 
export default Novus;