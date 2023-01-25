import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { closeLogin } from '../../store/modal'
import { useDispatch } from 'react-redux'
import * as sessionActions from '../../store/session'
import './LoginModal.css'

const LoginForm = ({ authenticated, setAuthenticated }) => {
    const dispatch = useDispatch()
    const [errors, setErrors] = useState([])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onLogin = async (e) => {
        e.preventDefault()
        setErrors([''])
        const user = await dispatch(sessionActions.loginUser({ email, password }))

        if (user.errors) {
            setErrors(user.errors)
        } else {
            setAuthenticated(true)
        }

        dispatch(closeLogin())
    }

    const onDemoLogin = async () => {
        setAuthenticated(true)
        await dispatch(sessionActions.demoLoginUser())
        dispatch(closeLogin())
    }

    const updateEmail = (e) => {
        setEmail(e.target.value)
    }

    const updatePassword = (e) => {
        setPassword(e.target.value)
    }

    if (authenticated) {
        return <Navigate to='/' />
    }

    const closeModal = () => dispatch(closeLogin())

    const onSwitch = () => {
        dispatch(closeLogin())
        // dispatch(openSignup())
    }

    return(
        <div className='login__modal__container'>
            <div className='login__modal__header'>
                <i onClick={() => closeModal()} class="fa-solid fa-xmark"></i>
                <h3>Log in or sign up</h3>
            </div>
            <div className='login__email__input'>
                <h4>Welcome to Islebnb</h4>
                <input
                    name='email'
                    type='text'
                    placeholder='Email'
                    value={email}
                    onChange={updateEmail}
                    className='email__input'
                    required
                    />
                <button>Continue</button>
            </div>
            <div className='login__or__span'>
                <div className='split__border'><span></span></div>
                <p>or</p>
            </div>
            <div className='login__demo__input'>
                <button>Continue as demo user</button>
            </div>    
        </div>
    )
}

export default LoginForm