import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { closeSignup, openLogin } from '../../store/modal'
import { signUp } from '../../services/auth'
import { useDispatch, useSelector } from 'react-redux'
import * as sessionActions from '../../store/session'
import './SignupModal.css'

const SignupForm = ({ authenticated, setAuthenticated }) => {
    const dispatch = useDispatch()
    const initialEmail = useSelector((state) => state.modal.emailStore)
    const [errors, setErrors] = useState([])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState(initialEmail)
    const [password, setPassword] = useState('')

    const updateFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const updateLastName = (e) => {
        setLastName(e.target.value)
    }

    const updateEmail = (e) => {
        setEmail(e.target.value)
    }

    const updatePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleCancelSignup = () => {
        dispatch(closeSignup())
        dispatch(openLogin())
    }

    const handleSignup = async (e) =>{
        e.preventDefault()
        const username = (firstName + ' ' + lastName)
        const user = await signUp(username, email, password)
        if (!user.errors) {
            dispatch(sessionActions.loginUser({ email, password }))
            setAuthenticated(true)
            dispatch(closeSignup())
        }
    }

    if (authenticated) {
        return <Navigate to='/' />
    }

    return (
        <div className='signup__modal__container'>
            <div className='signup__modal__header'>
                <i onClick={() => handleCancelSignup()}className="fa-solid fa-angle-left"></i>
                <h3>Log in</h3>
            </div>
            <form onSubmit={handleSignup} className='signup__input__container'>
                <div className='fullname__input'>
                    <input
                        name='firstName'
                        type='text'
                        placeholder='First Name'
                        value={firstName}
                        onChange={updateFirstName}
                        className='firstname__input'
                    />
                    <input
                        name='lastName'
                        type='text'
                        placeholder='Last Name'
                        value={lastName}
                        onChange={updateLastName}
                        className='lastname__input'
                    />
                </div>
                <input
                    name='email'
                    type='text'
                    placeholder='Email'
                    value={email}
                    onChange={updateEmail}
                    className='email__input'
                />
                <input
                    name='password'
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={updatePassword}
                    className='password__input'                        required
                    />
                    <button type='submit'>Agree and continue</button>
            </form>
        </div>
    )
}

export default SignupForm