import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
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
        return <Redirect to='/' />
    }

    const closeModal = () => dispatch(closeLogin())

    const onSwitch = () => {
        dispatch(closeLogin())
        // dispatch(openSignup())
    }

    return(
        <div className='login__modal__container'>

        </div>
    )
}

export default LoginForm