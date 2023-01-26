import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { closePassword } from '../../store/modal'
import { useDispatch, useSelector } from 'react-redux'
import * as sessionActions from '../../store/session'
import './PasswordModal.css'

const PasswordForm = ({ authenticated, setAuthenticated }) => {
    const dispatch = useDispatch()
    const [errors, setErrors] = useState([])
    const [password, setPassword] = useState('')
    const email = useSelector((state) => state.modal.emailStore)

    const updatePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleClosePassword = () => {
        
    }

    const handleLogin = async (e) =>{
        e.preventDefault()
        setErrors([''])
        const user = await dispatch(sessionActions.loginUser({ email, password }))
        if (user.errors) {
            setErrors(user.errors)
        } else {
            setAuthenticated(true)
        }
        dispatch(closePassword())
    }

    if (authenticated) {
        return <Navigate to='/' />
    }

    return (
        <div className='password__modal__container'>
            <div className='password__modal__header'>
                <i onClick={() => dispatch(closePassword())}className="fa-solid fa-angle-left"></i>
                <h3>Log in</h3>
            </div>
            <form onSubmit={handleLogin} className='password__input__container'>
                <input
                        name='password'
                        type='text'
                        placeholder='Password'
                        value={password}
                        onChange={updatePassword}
                        className='password__input'
                        required
                    />
                    <button type='submit'>Log in</button>
            </form>
        </div>
    )
}

export default PasswordForm