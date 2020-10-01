import React, { useState } from 'react'

const Login = ({ showLog }) => {
    const [loginDetails, setLoginDetails] = useState({
        email: '',
        Aplication_ID: '',
        password: ''
    })

    const { email, Aplication_ID, password } = loginDetails;

    const onChange = (e) => {
        setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form style={{ left: showLog ? '-300px' : '300px', visibility: showLog ? 'visible' : 'hidden' }} id="loginBox" method="post">
            <input onChange={onChange} name='email' type="text" placeholder="E-mail" value={email} required />
            <input onChange={onChange} name='Aplication_ID' type="text" placeholder="Aplication ID" value={Aplication_ID} required />
            <input style={{ marginTop: '-50px' }} onChange={onChange} name='password' type="password" placeholder="Password" value={password} required />

            <input type='submit' value='Login' id='logsub' className="lr-submit" onClick={onSubmit} />
        </form>
    )
}

export default Login
