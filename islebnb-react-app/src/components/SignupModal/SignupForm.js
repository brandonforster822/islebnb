import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { closeSignup, openLogin } from '../../store/modal'
import { signUp } from '../../services/auth'
import { useDispatch, useSelector } from 'react-redux'
import * as sessionActions from '../../store/session'
import './SignupModal.css'

const SignupForm = ({ authenticated, setAuthenticated }) => {
    const dispatch = useDispatch()
    const initialEmail = useSelector((state) => state.modal.emailStore)
    const [passwordStrength, setPasswordStrength] = useState('weak')
    const [conditionMetIcon1, setConditionMetIcon1] = useState('fa-solid fa-circle-xmark')
    const [conditionMetIcon2, setConditionMetIcon2] = useState('fa-solid fa-circle-xmark')
    const [conditionMetIcon3, setConditionMetIcon3] = useState('fa-solid fa-circle-xmark')
    const [passwordShake, setPasswordShake] = useState('signup__password__input')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState(initialEmail)
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    
    const hasNumber = (string) =>{
        for(let i = 0; i < string.length; i++){
            if(!isNaN(parseFloat(string[i]))){
                return true
            }
        }
        return false
    }
    const hasSymbol = (string) =>{
        const symbols = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '[', '}',']', '|', `\\`, ':', ';', '"', "'", '<', ',', '>', '.', '?', '/']
        if(symbols.some(el => string.includes(el))){
            return true
        }
        return false
    }

    useEffect(() => {

        if(password.length >= 8){
            setConditionMetIcon2('fa-solid fa-circle-check condition__met')
        }
        if(password.length < 8){
            setConditionMetIcon2('fa-solid fa-circle-xmark condition__not__met')
        }
        if(hasSymbol(password) || hasNumber(password)){
            setConditionMetIcon3('fa-solid fa-circle-check condition__met')
        }
        if(!hasSymbol(password) && !hasNumber(password)){
            setConditionMetIcon3('fa-solid fa-circle-xmark condition__not__met')
        }
        if(password.length >= 8 && (hasSymbol(password) && hasNumber(password))){
            setPasswordStrength('strong')
            setConditionMetIcon1('fa-solid fa-circle-check condition__met')
        } else if(password.length >= 8 && (hasSymbol(password) || hasNumber(password))){
            setPasswordStrength('good')
            setConditionMetIcon1('fa-solid fa-circle-check condition__met')
        } else {
            setPasswordStrength('weak')
            setConditionMetIcon1('fa-solid fa-circle-xmark condition__not__met')
        }
    }, [password])

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
        if(conditionMetIcon1 !== 'fa-solid fa-circle-check condition__met'){
            setPasswordShake('signup__password__input password__shake')
            setTimeout(() => {
                setPasswordShake('signup__password__input')
            }, 300)
            return
        }
        const user = await signUp(username, email, password)
        if(user.errors){
            setErrors(user.errors)
            return
        }
        else {
            dispatch(sessionActions.loginUser({ email, password }))
            setAuthenticated(true)
            dispatch(closeSignup())
            return
        }
    }

    return (
        <div className='signup__modal__container'>
            <div className='signup__modal__header'>
                <i onClick={() => handleCancelSignup()}className="fa-solid fa-angle-left"></i>
                <h3>Finish signing up</h3>
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
                        required
                    />
                    <input
                        name='lastName'
                        type='text'
                        placeholder='Last Name'
                        value={lastName}
                        onChange={updateLastName}
                        className='lastname__input'
                        required
                    />
                    <p>Make sure it matches the name on your government ID.</p>
                </div>
                <div className='signup__email__input'>
                    <input
                        name='email'
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={updateEmail}
                        className='email__input'
                        required
                    />
                    <p>We'll email you trip confirmations and receipts.</p>
                </div>
                <div className={passwordShake}>
                    <input
                        name='password'
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={updatePassword}
                        className='password__input'
                        required
                    />
                    <div className='condition condition__1'>
                        <i className={conditionMetIcon1}></i>
                        <p>Password strength: {passwordStrength}</p>
                    </div>
                    <div className='condition condition__2'>
                        <i className={conditionMetIcon2}></i>
                        <p>At least 8 characters</p>
                    </div>
                    <div className='condition condition__3'>
                        <i className={conditionMetIcon3}></i>
                        <p>Contains a number or symbol</p>
                    </div>
                    {errors.map((error) => (
                        <div key={error} className='signup__error'>
                            <i className='fa-solid fa-circle-xmark'></i>
                            <p>{error}</p>
                        </div>
                    ))}
                </div>
                <button type='submit'>Agree and continue</button>
            </form>
        </div>
    )
}

export default SignupForm