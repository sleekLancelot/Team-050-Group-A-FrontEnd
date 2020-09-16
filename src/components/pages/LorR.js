import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import Login from './Login';
import Reg from './Reg';
import '../../LorR.css';

const LorR = () => {
    const [showReg, setShowReg] = useState(true);
    const [showLog, setShowLog] = useState(false);

    const login = useRef('Login')
    const register = useRef('Register')
    const With = useRef('Register With')

    const log = (e) => {
        setShowReg(() => false);
        setShowLog(() => true);
        With.current = `${login.current.outerText} with:`;

        e.preventDefault();
    }

    const reg = (e) => {
        setShowReg(() => true);
        setShowLog(() => false);
        With.current = `${register.current.outerText} with:`;

        e.preventDefault();
    }

    return (
        <div>
            <div className="formBox">
                <div className="btnBox">
                    <div style={{ left: showLog ? '110px' : '0' }} className="btnColor"></div>
                    <Link to='/register' ref={register} id="register" className="lr-btn" onClick={reg}>Register</Link>
                    <Link to='/login' ref={login} id="login" className="lr-btn" onClick={log}>Login</Link>
                </div>
                <p reg={With} className="with">{With.current}</p>
                <div className="socials">
                    <i className="fab fa-facebook-f fa-2x"></i>
                    <i className="fab fa-twitter fa-2x"></i>
                    <i className="fab fa-google fa-2x"></i>
                </div>
                <div className="LorR">
                    <Reg showReg={showReg} />
                    <Login showLog={showLog} />
                </div>
            </div>
        </div>
    )
}

export default LorR
