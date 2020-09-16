import React from 'react'
import logo from '../assets/Logo.png';
import insta from '../assets/insta.png';
import twitter from '../assets/twitter.png';
import facebook from '../assets/facebook.png';

const Footer = () => {
    return (
        <footer id='main-footer'>
            <div className="presvg">
                <ul>
                    <li>
                        <h3>Contact</h3>
                    </li>
                    <li>
                        <pre>
                            1B,Allen Avenue,
                            Ikeja, Lagos
                            Nigeria
                    </pre>
                    </li>
                    <li>+234 813 769 7114</li>
                    <li>
                        <a className='mail' href="mailto: Contact@crimistry.com" style={{ color: 'white' }}>Contact@crimistry.com</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h3>Company</h3>
                    </li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>How It Works</li>
                    <li>Terms And Conditions</li>
                </ul>
                <ul>
                    <li>
                        <h3>Partners</h3>
                    </li>
                    <li>Nigeria Police Force</li>
                    <li>Lagos Court</li>
                </ul>
                <div>
                    <img src={logo} alt="Crimistry" style={{ width: '270px', height: '90px' }} />
                    <div className="socials">
                        <img src={insta} alt="instagram" />
                        <img src={twitter} alt="twitter" />
                        <img src={facebook} alt="facebook" />
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00E6B0" fillOpacity="1" d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </footer>
    )
}

export default Footer
