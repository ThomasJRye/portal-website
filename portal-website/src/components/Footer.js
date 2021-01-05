import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div class="footer_container">
            <div class="column" id="first">
                <h2 id="first2">Follow us</h2>
                <a href="https://www.linkedin.com/company/portal-space/" class="fa fa-linkedin"></a>
                <a href="https://www.instagram.com/portalspaceno/" class="fa fa-instagram"></a>

            </div>
            <div class="column" >
                <h2>Contact us</h2>
                <a href="mailto:contact@portalspace.no">contact@portalspace.no</a>
            </div>
            <div class="column" >
                <h2>Find us</h2>
                <p>Fysikkbygningen</p>
                <p>Sem Sælands vei 24</p>
                <p>Nordre Aker, Oslo</p>
                <p>0371, NO</p>
            </div>
        </div>
    )
}

export default Footer