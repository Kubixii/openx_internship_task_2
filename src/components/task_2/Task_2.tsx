import React, { useState } from 'react';

const FEEDBACK_MESSAGES = {
    INVALID_US_PS: "Invalid username/password",
    LOGIN_SUCCESS: "Welcome, ",
    LOGGED_OUT: 'User logged out.'
}

const Task_2 = () => {

    const [feedbackMsg, setFeedbackMsg] = useState<string>('')
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = (e: any) => setLogin(e.target.value)
    const handlePassword = (e: any) => setPassword(e.target.value)

    const handleSubmit = () => {
        if (login === '' || password !== 'pwd') {
            setFeedbackMsg(FEEDBACK_MESSAGES.INVALID_US_PS)
            setLogin('')
            setPassword('')
            return null
        }
        if (login !== '' && password === 'pwd') {
            setFeedbackMsg(FEEDBACK_MESSAGES.LOGIN_SUCCESS + login + "!")
            setIsLoggedIn(true)
        }
    }

    const handleLogout = () => {
        setFeedbackMsg(FEEDBACK_MESSAGES.LOGGED_OUT)
        setLogin('')
        setPassword('')
        setIsLoggedIn(false)
    }

    const feedbackMsgColor = feedbackMsg === FEEDBACK_MESSAGES.INVALID_US_PS ? { 'color': 'red' } : { 'color': 'green' }

    const button = isLoggedIn ?
        <button onClick={handleLogout} data-testid="button" >Log Out</button> :
        <button onClick={handleSubmit} data-testid="button" >Log In</button>

    return (
        <div>
            <div><p data-testid='feedbackMsg' style={feedbackMsgColor} >{feedbackMsg}</p></div>
            <div><input type="text" value={login} placeholder="User Name" data-testid="login" onChange={handleLogin} /></div>
            <div><input type="password" value={password} placeholder="********" data-testid="password" onChange={handlePassword} /></div>
            <div>{button}</div>
        </div>
    )
}

export default Task_2