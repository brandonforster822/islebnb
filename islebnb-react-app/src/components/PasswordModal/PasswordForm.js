import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { closePassword } from '../../store/modal'
import { useDispatch, useSelector } from 'react-redux'
import * as sessionActions from '../../store/session'
import './PasswordModal.css'

const PasswordForm = ({ authenticated, setAuthenticated }) => {
    const [errors, setErrors] = useState([])
    const [password, setPassword] = useState('')
    const email = useSelector((state) => state.modal.emailStore)


    return (
        <div className='password__modal__container'>
            <div className='login__modal__header'>
                <i class="fa-solid fa-angle-left"></i>
                <h3>Log in</h3>
            </div>
            <input
                    name='password'
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={setPassword}
                    className='password__input'
                    required
                />
                <button>Continue</button>
        </div>
    )
}

export default PasswordForm