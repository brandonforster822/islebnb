import React, { useState } from 'react'
import { closePassword, openLogin } from '../../store/modal'
import { useDispatch, useSelector } from 'react-redux'
import * as sessionActions from '../../store/session'
import './PasswordModal.css'

const PasswordForm = ({ authenticated, setAuthenticated }) => {
    const dispatch = useDispatch()
    const [password, setPassword] = useState('')
    const [passwordFail, setPasswordFail] = useState('passwordfail__inactive')
    const email = useSelector((state) => state.modal.emailStore)

    const updatePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleCancelLogin = () => {
        dispatch(closePassword())
        dispatch(openLogin())
    }

    const handleLogin = async (e) =>{
        e.preventDefault()
        const user = await dispatch(sessionActions.loginUser({ email, password }))
        if (user.errors) {
            setPasswordFail('passwordfail__active')
        } else {
            setPasswordFail('passwordfail__inactive')
            setAuthenticated(true)
            dispatch(closePassword())
        }
    }

    return (
        <div className='password__modal__container'>
            <div className='password__modal__header'>
                <i onClick={() => handleCancelLogin()}className="fa-solid fa-angle-left"></i>
                <h3>Log in</h3>
            </div>
            <form onSubmit={handleLogin} className='password__input__container'>
                <input
                        name='password'
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={updatePassword}
                        className='password__input'
                        required
                    />
                <button type='submit'>Log in</button>
                <div className={passwordFail}>
                    <i class="fa-solid fa-circle-xmark"></i>
                    <p>Incorrect password.</p>
                </div>
            </form>
        </div>
    )
}

export default PasswordForm