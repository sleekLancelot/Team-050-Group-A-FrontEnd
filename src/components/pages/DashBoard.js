import React from 'react'

import defaultCam from '../assets/defaultCam.png';

// import person from '../assets/Vector.png';

const DashProfile = () => {
    return (
        <div className="dashProfile bodBox">
            <span className='firstSpan' style={{ color: '#49a347', background: 'rgba(73, 163, 71, 0.3)' }}>Profile</span>
            <figure>
                <img id='profilePic' src={defaultCam} alt="profile pic" />
            </figure>
            <div className="dashProfileInfo">
                <div className="subject">
                    <p>Name:</p>
                    <p>E-mail:</p>
                    <p>Passport No.:</p>
                    <p>Application No.:</p>
                    <p>ProfileInfo</p>
                </div>
                <div className="content">
                    <p>Adeokun Odugwu</p>
                    <p>mamia@yahoo-yahoo.com</p>
                    <p>8897 889 898 89837</p>
                    <p>84372042</p>
                    <p>+234 807 4837 980</p>
                </div>
            </div>
            <span className='spanBtm' style={{ color: '#49a347', top: '13px', right: '20px' }}>Update profile</span>
        </div>
    )
}

const DashApplication = () => {
    return (
        <div className="dashApp bodBox">
            <span className='firstSpan' style={{ color: '#d981ee', background: 'rgba(217, 129, 238, 0.3)' }}>Application</span>
            <table>
                <thead>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Status</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Criminal Record Request</td>
                        <td>08/09/2020</td>
                        <td className='submitted'><pre>Submitted</pre></td>
                    </tr>
                    <tr>
                        <td>Criminal Record Request</td>
                        <td>09/09/2020</td>
                        <td className='pending'><pre>Pending Review</pre> </td>
                    </tr>
                    <tr>
                        <td>Bio-data Update</td>
                        <td>19/09/2020</td>
                        <td className='rejected'><pre>Rejected</pre></td>
                    </tr>
                    <tr>
                        <td>Criminal Record Request</td>
                        <td>21/09/2020</td>
                        <td className='proceed'><pre>Proceed</pre></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const DashPaymentHistory = () => {
    return (
        <div className="dashPH bodBox">
            <span className='firstSpan' style={{ color: '#26B1FE', background: 'rgba(38, 177, 254, 0.3)' }}>Payment History</span>
            <table id='payment'>
                <thead>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Status</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Record Retrieval</td>
                        <td>#5000</td>
                        <td>08/09/2020</td>
                        <td>Failed</td>
                    </tr>
                    <tr>
                        <td>Record Retrieval</td>
                        <td>#5000</td>
                        <td>29/09/2020</td>
                        <td>Success</td>
                    </tr>
                    <tr>
                        <td>Bio-metic Amendment</td>
                        <td>#5000</td>
                        <td>29/09/2020</td>
                        <td>Success</td>
                    </tr>
                </tbody>
            </table>
            <span className='spanBtm' style={{ color: '#26b1fe', top: '50px', right: '10px' }}>view more</span>
        </div>
    )
}

const DashNotification = () => {
    return (
        <div className='dashNotify bodBox' >
            <span className='firstSpan' style={{ color: '#5351FB', background: 'rgba(83, 81, 251, 0.3)' }}>Notification</span>
            <input id='notifySearch' type="search" placeholder='Search notification or message' />
            <div className="notifies">
                <img alt="" />
                <div className="notifyContent">
                    <h4>Update Your BioData</h4>
                    <p>
                        Hi Adeokun, welcome to Crimistry, kindly update your profile to complete your application process.
                        <span className="notifyData"> 09-20 14:29</span>
                    </p>
                </div>
            </div>
            <div className="notifies">
                <img alt="" />
                <div className="notifyContent">
                    <h4>Update Your BioData</h4>
                    <p>
                        Hi Adeokun, welcome to Crimistry, kindly update your profile to complete your application process.
                        <span className="notifyData"> 07-20 16:30</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

const DashBoard = () => {
    return (
        <div className="bod">
            <DashProfile />
            <DashApplication />
            <DashPaymentHistory />
            <DashNotification />
        </div>
    )
}

export default DashBoard

