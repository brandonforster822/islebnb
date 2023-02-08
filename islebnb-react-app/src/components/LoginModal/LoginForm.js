import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { closeLogin, openPassword, openSignup } from '../../store/modal'
import { useDispatch } from 'react-redux'
import * as sessionActions from '../../store/session'
import { getUserByEmail } from '../../services/users'
import './LoginModal.css'

const LoginForm = ({ authenticated, setAuthenticated }) => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [emailDefined, setEmailDefined] = useState('')

    const onDemoLogin = async () => {
        setAuthenticated(true)
        await dispatch(sessionActions.demoLoginUser())
        dispatch(closeLogin())
    }

    const updateEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleEmailSubmit = async (e) => {
        if(email === ''){
            setEmailDefined('email__error__active')
            return
        }
        const user = await getUserByEmail({ email })
        if (user.email === undefined){
            dispatch(closeLogin())
            dispatch(openSignup(email))
        } else {
            dispatch(closeLogin())
            dispatch(openPassword(user.email))
        }
    }

    return(
        <div className='login__modal__container'>
            <div className='login__modal__header'>
                <i onClick={() => dispatch(closeLogin())} className="fa-solid fa-xmark"></i>
                <h3>Log in or sign up</h3>
            </div>
            <div className='login__email__input'>
                <h4>Welcome to Islebnb</h4>
                <p id={emailDefined} className='email__error__handler'>Email cannot be empty.</p>
                <input
                    name='email'
                    type='text'
                    placeholder='Email'
                    value={email}
                    onChange={updateEmail}
                    className='email__input'
                    required
                />
                <button onClick={(e) => handleEmailSubmit(e)}>Continue</button>
            </div>
            <div className='login__or__span'>
                <div className='split__border'><span></span></div>
                <p>or</p>
            </div>
            <div className='login__demo__input'>
                <button onClick={() => onDemoLogin()}>Continue as demo user</button>
            </div>    
        </div>
    )
}

export default LoginForm