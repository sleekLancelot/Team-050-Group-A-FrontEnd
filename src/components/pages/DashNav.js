import React from 'react'

import logo from '../assets/dashLogo.png';
import dashboard from '../assets/dashboard.png';
import profile from '../assets/profile.png';
import application from '../assets/application.png';
import payments from '../assets/payments.png';
import notifications from '../assets/notifications.png';
import settings from '../assets/settings.png';

import '../../dashBoard.css';

const DashNav = () => {
    return (
        <nav className="dashNav">
            <img id='dashLogoImg' src={logo} alt="Crimistry" style={{ width: '250px', height: '100px' }} />
            <ul className='dashNavList'>
                <li className="dashNavListItem"><img src={dashboard} alt="dashboard" /> Dashboard</li>
                <li className="dashNavListItem"><img src={profile} alt="profile" /> Profile</li>
                <li className="dashNavListItem"><img src={application} alt="application" /> Applications</li>
                <li className="dashNavListItem"><img src={payments} alt="payments" /> Payments</li>
                <li className="dashNavListItem"><img src={notifications} alt="notifications" /> Notifications</li>
                <li className="dashNavListItem"><img src={settings} alt="settings" /> Settings</li>
            </ul>
        </nav>
    )
}

export default DashNav
