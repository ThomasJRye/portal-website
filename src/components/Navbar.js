import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import logo from './Pages/Images/Logo.png'
import { Button } from './Pages/Button';
import './Navbar.css';

function NavBar() {
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

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        
                         <img src={logo} className='logo'/> 
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <br></br>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Nero' className='nav-links' onClick={closeMobileMenu}>
                                Nero
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Novus' className='nav-links' onClick={closeMobileMenu}>
                                Novus
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar
