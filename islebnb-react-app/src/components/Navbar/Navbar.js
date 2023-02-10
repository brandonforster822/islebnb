import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { openLogin } from "../../store/modal"
import { logout } from '../../services/auth'
import './Navbar.css'
import { authenticate } from '../../services/auth'


const Navbar = ({ authenticated, setAuthenticated }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [openMenu, setOpenMenu] = useState(false)
    const [picture, setPicture] = useState('https://2023.riverlegacy.org/wp-content/uploads/2021/07/blank-profile-photo.jpeg')
    const [searchActive, setSearchActive] = useState(true)
    const session = useSelector((state) => state.session)
    const url = window.location.href


    useEffect(() => {
        if (url.includes('account')){
            setSearchActive(false)
        } else {
            setSearchActive(true)
        }
    })


    useEffect(() => {
        async function fetchImg(user) {
            const image = await fetch(`/api/users/picture/${user.id}`)
            const img_url = await image.json()
            if (img_url){
                setPicture(img_url.img_url)
            }
        }
        if (authenticated) {
            fetchImg(session)
        }
    }, [authenticated, session])

    const handleOpenLogin = () =>{
        dispatch(openLogin())
        setOpenMenu(!openMenu)
    }

    const handleLogout = async (e) =>{
        setOpenMenu(!openMenu)
        await logout()
        setAuthenticated(false)
        navigate('/')
        window.location.reload()
    }

    const handleAccountOpen = () => {
        navigate(`/account/${session.id}`)
        setOpenMenu(false)
    }

    return (
        <div className='navbar__container'>
            <div className='navbar__main'>
                <div onClick={() => navigate('/')} className='navbar__main__logo'>
                    <i className="fa-solid fa-ship"></i>
                    <h1>islebnb</h1>
                </div>
                {searchActive && (<div className='navbar__main__search'>
                    <div className='search__button__left'>
                        <p>Anywhere</p>
                    </div>
                    <div className='search__button__center'>
                        <p>Any week</p>
                    </div>
                    <div className='search__button__right'>
                        <p>Add guests</p>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>)}
                <div className='navbar__main__account'>
                    <p>Islebnb your island</p>
                    <i className="fa-solid fa-globe"></i>
                    <div onClickOutside={() => setOpenMenu(!openMenu)} onClick={() => setOpenMenu(!openMenu)} className='navbar__account__button'>
                        <i className="fa-solid fa-bars"></i>
                        <img alt='pfp' src={picture}/>
                    </div>
                </div>
            </div>

            {openMenu && !authenticated &&(
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
            {openMenu && authenticated &&(
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


export default Navbar