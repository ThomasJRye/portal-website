import React from 'react';
import './Nero.css'
import { Button } from './Button'
import rocket from './Images/Rocket.png'
import groups from './Images/work-images/groups.png'
import engagement from './Images/work-images/engagement.png'
import engagementMobile from './Images/work-images/engagementMobile.png'
import plumbing from './Images/work-images/plumbing.png'
import sveising from './Images/work-images/sveising.png'
import software from './Images/work-images/Eirik.png'
import rasmus from './Images/Partners/Rasmus.jpg'
import ketil from './Images/Partners/Ketil_Røed.jpeg'
import anders from './Images/Partners/Anders_Brennhagen.jpg'
 

const Nero = () => {
    return (
        <>
            <div className='Title'>
                <h1>Project Nero</h1>
            </div>
            <div className='top-text'>
                <p>
                    Since our founding at Andøya Space Center in february of 2020, 
                    we have been striving towards building and launching Norway's first liquid propellant rocket.
                    The first year has been spent on building infrastructure, getting connections and assemblig our amazing team.
                </p>
                <br></br>
                <p>
                    Below is an early render of the Nero rocket and explanations of some of the components. 
                </p>
            </div>
            <div className='rocket-image'>
                <img class="rocket" src={rocket} alt="rocket"/>
            </div>

            <div className='our-work'>
                <h1 className='work-title'>
                    Our Work
                </h1>
                <img class="groups" src={groups} alt="groups"/>
                <p className='groups-text'>
                Working in groups for discussing ideas and concepts is a big part of the daily work on the project. This is important to make sure all systems function in relation to each other and that every team is always on the same page about our progress.
                </p>
                
                <img class="engagement" src={engagement} alt="engagement"/>
                <p className='engagement-text'>
                Engagement is one of our most treasured values. It ensures that our members are invested in the project as a whole and not just their department or current task. 
It is what makes us a team.
                </p>
                
                <img class="sveising" src={sveising} alt="sveising"/>
                <p className='sveising-text'>
                Independent teamwork is the ability to make one’s own decisions while still working in groups so  all parts fit togheter. This is a highly treasured skill here at Portal, but often doesn’t come naturally.
                </p>
                <img class="plumbing" src={plumbing} alt="plumbing"/>
                <p className='plumbing-text'>
                Rapid prototyping is the last of our main values. It means that because we are going to fail, we might as well fail fast, and learn from it.  Don’t try to get things right the first time, as the experience gotten in harmless failure is more valueable than the time spent on perfecting it the first time.
                </p>
                <img class="software" src={software} alt="software"/>
                <p className='software-text'>
                At Portal space we give students the opportunity to put university subjects into practice. Solving real problems, members develop their critical thinking and project managing skills that are highly sought after in the job market. 
                </p>
            </div>

            <div className='advisors'>
                <h1 className='advisor-title'>Our Advisors</h1>
                <img class="rasmus" src={rasmus} alt="rasmus"/>
                <h2 className='rasmus-title'>
                    Rasmus Arnt Pedersen
                </h2>
                <h1 className='rasmus-text'>
                    Mechanical engineer at copenhagen suborbitals and chairman of DanSTAR
                </h1>

                <img class="anders" src={anders} alt="anders"/>
                <h2 className='anders-title'>
                    Anders Brennhagen                
                </h2>
                <h1 className='rasmus-text'>
                    Doctoral reasearch fellow in chemistry at the university of Oslo 
                </h1>

                <img class="ketil" src={ketil} alt="ketil"/>
                <h2 className='ketil-title'>
                    Ketil Røed                
                </h2>
                <h1 className='ketil-text'>
                    Associate professor in electronics at the university of Oslo                 
                </h1>
            </div>

            <div className='join-container'>
                <h2>Want to join us?</h2>
                <p>
                    We're always looking for people to join. 
                </p>
                <p>
                Wether you are a technical or non-technical student. 
                </p>
                <br />
                <div className = 'join-Button'>
                    {Button && <Button 
                        buttonStyle='btn--outline' 
                        destination='/novus-form'
                        buttonSize='btn--large'
                        >Join us
                        </Button>}
                </div>
            </div>
        </>
    );
}
 
export default Nero;