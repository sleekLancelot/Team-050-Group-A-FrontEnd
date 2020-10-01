import React from 'react'
import { useState } from 'react'

const Reg = ({ showReg }) => {
    const [regDetails, setRegDetails] = useState({
        firstName: '',
        LastName: '',
        email: '',
        phone: '',
        serviceIdentificationTag: '',
        password: '',
        password2: ''
    })

    const { firstName, lastName, email, phone, serviceIdentificationTag, password, password2 } = regDetails

    const onChange = (e) => {
        setRegDetails({ ...regDetails, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={onSubmit} style={{ left: showReg ? '90px' : '-650px', visibility: showReg ? 'visible' : 'hidden' }} id="registerBox" method="post">
            <input onChange={onChange} name='firstName' type="text" placeholder="FirstName" value={firstName} required />
            <input onChange={onChange} name='lastName' type="text" placeholder="lastName" value={lastName} required />
            <input onChange={onChange} name='email' type="email" placeholder="E-mail" value={email} required />
            <input onChange={onChange} name='phone' type="number" placeholder="telephone number" value={phone} required />
            <input onChange={onChange} name='serviceIdentificationTag' type="number" placeholder="Service Identification Tag" value={serviceIdentificationTag} required />
            <input onChange={onChange} name='password' type="password" placeholder="Password" value={password} required minLength='6' />
            <input onChange={onChange} name='password2' type="password" placeholder="Confirm-Password" value={password2} required minLength='6' />

            <input type='submit' value='Register' className="lr-submit" onClick={onSubmit} />
        </form>
    )
}

export default Reg
