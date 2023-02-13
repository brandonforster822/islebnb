import React, { useEffect, useRef } from 'react'
import './AccountMenu.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { openLogin } from "../../store/modal"
import { logout } from '../../services/auth'


const AccountMenu = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const ref = useRef(null)
    const { authenticated } = props
    const { setAuthenticated } = props
    const { onClickOutside } = props


    const handleOpenLogin = () =>{
        dispatch(openLogin())
        onClickOutside()
    }

    const handleLogout = async (e) =>{
        onClickOutside()
        await logout()
        setAuthenticated(false)
        navigate('/')
        window.location.reload()
    }

    const handleAccountOpen = () => {
        navigate(`/account`)
        onClickOutside()
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside && onClickOutside()
            }
        }
        document.addEventListener('click', handleClickOutside, true)
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [onClickOutside])

    if (!props.show)
        return null;

    return(
        <div ref={ref}>
            {!authenticated &&(
                <div className='account__menu'>
                    <div className='account__menu__1'>
                        <p onClick={() => handleOpenLogin()} id='bold__button'>Log in</p>
                        <p onClick={() => handleOpenLogin()}>Sign up</p>
                    </div>
                    <div className='account__menu__2'>
                        <p>Islebnb your home</p>
                        <p>Help</p>
                    </div>
                </div>
                )}
                {authenticated &&(
                    <div className='account__menu__authenticated'>
                        <div className='account__menu__authenticated__1'>
                            <p id='bold__button'>Messages</p>
                            <p id='bold__button'>Trips</p>
                        </div>
                        <div className='account__menu__authenticated__1'>
                            <p>Islebnb your island</p>
                            <p onClick={() => handleAccountOpen()}>Account</p>
                        </div>
                        <div className='account__menu__authenticated__2'>
                            <p>Help</p>
                            <p onClick={() => handleLogout()}>Log out</p>
                        </div>
                    </div>
            )}
        </div>
    )
}

export default AccountMenu