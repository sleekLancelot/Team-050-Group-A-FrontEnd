import React from 'react'
import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav id="navbar">
            <Link to='/'>
                <img src={logo} alt="Crimistry" style={{ width: '270px', height: '90px' }} />
            </Link>

            <ul className="main-menu">
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
