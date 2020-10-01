import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import DashBoard from './DashBoard'
import Profile from './Profile';

import logo from '../assets/dashLogo.png';
import dashboard from '../assets/dashboard.png';
import profile from '../assets/profile.png';
import application from '../assets/application.png';
import payments from '../assets/payments.png';
import notifications from '../assets/notifications.png';
import settings from '../assets/settings.png';
import defaultCam from '../assets/defaultCam.png';

import '../../css/dashBoard.css';

const DashNav = () => {
    return (
        <nav className="dashNav">
            <img id='dashLogoImg' src={logo} alt="Crimistry" style={{ width: '250px', height: '100px' }} />
            <ul className='dashNavList'>
                <Link to='/dashboard'>
                    <li className="dashNavListItem">
                        <img src={dashboard} alt="dashboard" /> Dashboard
                    </li>
                </Link>
                <Link to='/profile'>
                    <li className="dashNavListItem">
                        <img src={profile} alt="profile" /> Profile
                        </li>
                </Link>
                <Link to='/application'>
                    <li className="dashNavListItem">
                        <img src={application} alt="application" /> Applications
                    </li>
                </Link>
                <Link to='/payments'>
                    <li className="dashNavListItem">
                        <img src={payments} alt="payments" /> Payments
                    </li>
                </Link>
                <Link to='/notifications'>
                    <li className="dashNavListItem">
                        <img src={notifications} alt="notifications" /> Notifications
                    </li>
                </Link>
                <Link to='/settings'>
                    <li className="dashNavListItem">
                        <img src={settings} alt="settings" /> Settings
                    </li>
                </Link>
            </ul>
        </nav>
    )
}


const PrivateAccess = () => {
    return (
        <Router>
            <div className='dashCon'>
                <DashNav />
                <div className="mainSec">
                    <div className="top">
                        <i className="far fa-bell fa-3x" style={{ color: 'grey' }}></i>
                        <span className="Pimg"><img src={defaultCam} alt="profile pic" /></span>
                    </div>
                    <div className="das">
                        <p>Dashboard</p>
                        <p>Home &gt; Dashboard</p>
                    </div>
                    <Switch>
                        {/* <Route path='/' children={<DashBoard />} />
                        <Route exact path='/profile' children={<Profile />} /> */}
                        <Route exact path='/profile' component={Profile} />
                        <Route path='/' component={DashBoard} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default PrivateAccess
