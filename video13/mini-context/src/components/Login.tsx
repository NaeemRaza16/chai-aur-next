"use client"

import React, { useState, useContext, FormEvent } from 'react'
import UserContext from '@/context/UserContext'

const Login = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setUser({ userName, password })
    }

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder='Username'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            /> <br />
            <input
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login