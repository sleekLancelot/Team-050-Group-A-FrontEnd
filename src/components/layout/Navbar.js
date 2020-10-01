import React, { useRef } from 'react'
import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const mainMenu = useRef();

    const menuClick = (e) => {
        mainMenu.current.classList.toggle('show-menu');
    }

    const closeAfterClick = (e) => {
        // console.log(e.target.hasAttribute('href'), mainMenu.current.classList.contains('show-menu'));
        if (mainMenu.current.classList.contains('show-menu') && e.target.hasAttribute('href')) {
            mainMenu.current.classList.remove('show-menu');
        }
    }

    return (
        <nav id="navbar">
            <Link to='/'>
                <img id='logo' src={logo} alt="Crimistry" style={{ width: '270px', height: '90px' }} />
            </Link>

            <div className="menu-btn" onClick={menuClick}>
                <i className="fas fa-bars fa-2x"></i>
            </div>

            <ul ref={mainMenu} className="main-menu" onClick={closeAfterClick}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/how-it-works'>How It works</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link to='/login-register'>Login/register</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
